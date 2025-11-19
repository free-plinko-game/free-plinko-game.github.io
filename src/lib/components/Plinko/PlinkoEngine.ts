import { binPayouts } from '$lib/constants/game';
import {
  rowCount,
  winRecords,
  riskLevel,
  betAmount,
  balance,
  betAmountOfExistingBalls,
  totalProfitHistory,
} from '$lib/stores/game';
import { userProgress, showLevelUpNotification, levelUpData } from '$lib/stores/userProgress';
import { userPreferences } from '$lib/stores/userPreferences';
import { BOARD_THEMES } from '$lib/constants/themes';
import type { RiskLevel, RowCount } from '$lib/types';
import { getRandomBetween } from '$lib/utils/numbers';
import { logGameSession } from '$lib/utils/leaderboard';
import { awardXPForBallDrop } from '$lib/utils/progress';
import { rollForMultiplier } from '$lib/utils/multipliers';
import { supabase } from '$lib/supabase';
import Matter, { type IBodyDefinition } from 'matter-js';
import { get } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

type BallFrictionsByRowCount = {
  friction: NonNullable<IBodyDefinition['friction']>;
  frictionAirByRowCount: Record<RowCount, NonNullable<IBodyDefinition['frictionAir']>>;
};

/**
 * Engine for rendering the Plinko game using [matter-js](https://brm.io/matter-js/).
 *
 * The engine will read/write data to Svelte stores during game state changes.
 */
class PlinkoEngine {
  /**
   * The canvas element to render the game to.
   */
  private canvas: HTMLCanvasElement;

  /**
   * A cache value of the {@link betAmount} store for faster access.
   */
  private betAmount: number;
  /**
   * A cache value of the {@link rowCount} store for faster access.
   */
  private rowCount: RowCount;
  /**
   * A cache value of the {@link riskLevel} store for faster access.
   */
  private riskLevel: RiskLevel;
  /**
   * A cache value of the user's selected ball color for faster access.
   */
  private ballColor: string;
  /**
   * A cache value of the user's selected board theme for faster access.
   */
  private boardTheme: string;

  private engine: Matter.Engine;
  private render: Matter.Render;
  private runner: Matter.Runner;

  /**
   * Every pin of the game.
   */
  private pins: Matter.Body[] = [];
  /**
   * Walls are invisible, slanted "guard rails" at the left and right sides of the
   * pin triangle. It prevents balls from falling outside the pin triangle and not
   * hitting a bin.
   */
  private walls: Matter.Body[] = [];
  /**
   * "Sensor" is an invisible body at the bottom of the canvas. It detects whether
   * a ball arrives at the bottom and enters a bin.
   */
  private sensor: Matter.Body;

  /**
   * The x-coordinates of every pin's center in the last row. Useful for calculating
   * which bin a ball falls into.
   */
  private pinsLastRowXCoords: number[] = [];

  static WIDTH = 760;
  static HEIGHT = 570;

  private static PADDING_X = 52;
  private static PADDING_TOP = 36;
  private static PADDING_BOTTOM = 28;

  private static PIN_CATEGORY = 0x0001;
  private static BALL_CATEGORY = 0x0002;

  /**
   * Friction parameters to be applied to the ball body.
   *
   * Higher friction leads to more concentrated distribution towards the center. These numbers
   * are found by trial and error to make the actual weighted bin payout very close to the
   * expected bin payout.
   */
  private static ballFrictions: BallFrictionsByRowCount = {
    friction: 0.5,
    frictionAirByRowCount: {
      8: 0.0395,
      9: 0.041,
      10: 0.038,
      11: 0.0355,
      12: 0.0414,
      13: 0.0437,
      14: 0.0401,
      15: 0.0418,
      16: 0.0364,
    },
  };

  /**
   * Creates the engine and the game's layout.
   *
   * @param canvas The canvas element to render the game to.
   *
   * @remarks This constructor does NOT start the rendering and physics engine.
   * Call the `start` method to start the engine.
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    this.betAmount = get(betAmount);
    this.rowCount = get(rowCount);
    this.riskLevel = get(riskLevel);
    this.ballColor = get(userPreferences).ballColor;
    this.boardTheme = get(userPreferences).boardTheme;
    betAmount.subscribe((value) => (this.betAmount = value));
    rowCount.subscribe((value) => this.updateRowCount(value));
    riskLevel.subscribe((value) => (this.riskLevel = value));
    userPreferences.subscribe((prefs) => {
      this.ballColor = prefs.ballColor;
      if (prefs.boardTheme !== this.boardTheme) {
        this.boardTheme = prefs.boardTheme;
        this.applyTheme();
      }
    });

    this.engine = Matter.Engine.create({
      timing: {
        timeScale: 1,
      },
    });
    const theme = BOARD_THEMES[this.boardTheme] || BOARD_THEMES.classic;
    this.render = Matter.Render.create({
      engine: this.engine,
      canvas: this.canvas,
      options: {
        width: PlinkoEngine.WIDTH,
        height: PlinkoEngine.HEIGHT,
        background: theme.background,
        wireframes: false,
      },
    });
    this.runner = Matter.Runner.create();

    this.placePinsAndWalls();

    this.sensor = Matter.Bodies.rectangle(
      this.canvas.width / 2,
      this.canvas.height,
      this.canvas.width,
      10,
      {
        isSensor: true,
        isStatic: true,
        render: {
          visible: false,
        },
      },
    );
    Matter.Composite.add(this.engine.world, [this.sensor]);
    Matter.Events.on(this.engine, 'collisionStart', ({ pairs }) => {
      pairs.forEach(({ bodyA, bodyB }) => {
        if (bodyA === this.sensor) {
          this.handleBallEnterBin(bodyB);
        } else if (bodyB === this.sensor) {
          this.handleBallEnterBin(bodyA);
        }
      });
    });
  }

  /**
   * Renders the game and starts the physics engine.
   */
  start() {
    Matter.Render.run(this.render); // Renders the scene to canvas
    Matter.Runner.run(this.runner, this.engine); // Starts the simulation in physics engine
  }

  /**
   * Stops (pauses) the rendering and physics engine.
   */
  stop() {
    Matter.Render.stop(this.render);
    Matter.Runner.stop(this.runner);
  }

  /**
   * Drops a new ball from the top with a random horizontal offset, and deducts the balance.
   */
  dropBall() {
    const ballOffsetRangeX = this.pinDistanceX * 0.8;
    const ballRadius = this.pinRadius * 2;
    const { friction, frictionAirByRowCount } = PlinkoEngine.ballFrictions;

    const ball = Matter.Bodies.circle(
      getRandomBetween(
        this.canvas.width / 2 - ballOffsetRangeX,
        this.canvas.width / 2 + ballOffsetRangeX,
      ),
      0,
      ballRadius,
      {
        restitution: 0.8, // Bounciness
        friction,
        frictionAir: frictionAirByRowCount[this.rowCount],
        collisionFilter: {
          category: PlinkoEngine.BALL_CATEGORY,
          mask: PlinkoEngine.PIN_CATEGORY, // Collide with pins only, but not other balls
        },
        render: {
          fillStyle: this.ballColor,
        },
      },
    );
    Matter.Composite.add(this.engine.world, ball);

    betAmountOfExistingBalls.update((value) => ({ ...value, [ball.id]: this.betAmount }));
    balance.update((balance) => balance - this.betAmount);
  }

  /**
   * Total width of all bins as percentage of the canvas width.
   */
  get binsWidthPercentage(): number {
    const lastPinX = this.pinsLastRowXCoords[this.pinsLastRowXCoords.length - 1];
    return (lastPinX - this.pinsLastRowXCoords[0]) / PlinkoEngine.WIDTH;
  }

  /**
   * Gets the horizontal distance between each pin's center point.
   */
  private get pinDistanceX(): number {
    const lastRowPinCount = 3 + this.rowCount - 1;
    return (this.canvas.width - PlinkoEngine.PADDING_X * 2) / (lastRowPinCount - 1);
  }

  private get pinRadius(): number {
    return (24 - this.rowCount) / 2;
  }

  /**
   * Refreshes the game with a new number of rows.
   *
   * Does nothing if the new row count equals the current count.
   */
  private updateRowCount(rowCount: RowCount) {
    if (rowCount === this.rowCount) {
      return;
    }

    this.removeAllBalls();

    this.rowCount = rowCount;
    this.placePinsAndWalls();
  }

  /**
   * Called when a ball hits the invisible sensor at the bottom.
   */
  private async handleBallEnterBin(ball: Matter.Body) {
    const binIndex = this.pinsLastRowXCoords.findLastIndex((pinX) => pinX < ball.position.x);
    if (binIndex !== -1 && binIndex < this.pinsLastRowXCoords.length - 1) {
      const betAmount = get(betAmountOfExistingBalls)[ball.id] ?? 0;
      const baseMultiplier = binPayouts[this.rowCount][this.riskLevel][binIndex];

      // Check for level-based bonus multipliers
      const currentUserProgress = get(userProgress);
      const bonusMultiplier = currentUserProgress ? rollForMultiplier(currentUserProgress.level) : null;

      // Apply bonus multiplier if rolled
      const finalMultiplier = bonusMultiplier
        ? baseMultiplier * bonusMultiplier.multiplier
        : baseMultiplier;
      const payoutValue = betAmount * finalMultiplier;
      const profit = payoutValue - betAmount;

      winRecords.update((records) => [
        ...records,
        {
          id: uuidv4(),
          betAmount,
          rowCount: this.rowCount,
          binIndex,
          payout: {
            multiplier: finalMultiplier,
            value: payoutValue,
          },
          profit,
          bonusMultiplier: bonusMultiplier ? {
            name: bonusMultiplier.name,
            value: bonusMultiplier.multiplier,
            emoji: bonusMultiplier.emoji,
          } : undefined,
        },
      ]);
      totalProfitHistory.update((history) => {
        const lastTotalProfit = history.slice(-1)[0];
        return [...history, lastTotalProfit + profit];
      });
      balance.update((balance) => balance + payoutValue);

      // Automatically log to leaderboard if user is logged in
      logGameSession({
        betAmount,
        resultAmount: payoutValue,
        profit,
        riskLevel: this.riskLevel,
        rowCount: this.rowCount,
      });

      // Award XP for ball drop if user is logged in
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const result = await awardXPForBallDrop(user.id);
        if (result) {
          userProgress.set(result.progress);

          // Show level-up notification if leveled up
          if (result.leveledUp) {
            levelUpData.set({ oldLevel: result.oldLevel, newLevel: result.progress.level });
            showLevelUpNotification.set(true);

            // Auto-hide notification after 5 seconds
            setTimeout(() => {
              showLevelUpNotification.set(false);
            }, 5000);
          }
        }
      }
    }

    Matter.Composite.remove(this.engine.world, ball);
    betAmountOfExistingBalls.update((value) => {
      const newValue = { ...value };
      delete newValue[ball.id];
      return newValue;
    });
  }

  /**
   * Renders the pins and walls. Previous ones are removed before rendering new ones.
   */
  private placePinsAndWalls() {
    const { PADDING_X, PADDING_TOP, PADDING_BOTTOM, PIN_CATEGORY, BALL_CATEGORY } = PlinkoEngine;

    if (this.pins.length > 0) {
      Matter.Composite.remove(this.engine.world, this.pins);
      this.pins = [];
    }
    if (this.pinsLastRowXCoords.length > 0) {
      this.pinsLastRowXCoords = [];
    }
    if (this.walls.length > 0) {
      Matter.Composite.remove(this.engine.world, this.walls);
      this.walls = [];
    }

    for (let row = 0; row < this.rowCount; ++row) {
      const rowY =
        PADDING_TOP +
        ((this.canvas.height - PADDING_TOP - PADDING_BOTTOM) / (this.rowCount - 1)) * row;

      /** Horizontal distance between canvas left/right boundary and first/last pin of the row. */
      const rowPaddingX = PADDING_X + ((this.rowCount - 1 - row) * this.pinDistanceX) / 2;

      for (let col = 0; col < 3 + row; ++col) {
        const colX = rowPaddingX + ((this.canvas.width - rowPaddingX * 2) / (3 + row - 1)) * col;
        const theme = BOARD_THEMES[this.boardTheme] || BOARD_THEMES.classic;
        const pin = Matter.Bodies.circle(colX, rowY, this.pinRadius, {
          isStatic: true,
          render: {
            fillStyle: theme.pinColor,
          },
          collisionFilter: {
            category: PIN_CATEGORY,
            mask: BALL_CATEGORY, // Collide with balls
          },
        });
        this.pins.push(pin);

        if (row === this.rowCount - 1) {
          this.pinsLastRowXCoords.push(colX);
        }
      }
    }
    Matter.Composite.add(this.engine.world, this.pins);

    const firstPinX = this.pins[0].position.x;
    const leftWallAngle = Math.atan2(
      firstPinX - this.pinsLastRowXCoords[0],
      this.canvas.height - PADDING_TOP - PADDING_BOTTOM,
    );
    const leftWallX =
      firstPinX - (firstPinX - this.pinsLastRowXCoords[0]) / 2 - this.pinDistanceX * 0.25;

    const leftWall = Matter.Bodies.rectangle(
      leftWallX,
      this.canvas.height / 2,
      10,
      this.canvas.height,
      {
        isStatic: true,
        angle: leftWallAngle,
        render: { visible: false },
      },
    );
    const rightWall = Matter.Bodies.rectangle(
      this.canvas.width - leftWallX,
      this.canvas.height / 2,
      10,
      this.canvas.height,
      {
        isStatic: true,
        angle: -leftWallAngle,
        render: { visible: false },
      },
    );
    this.walls.push(leftWall, rightWall);
    Matter.Composite.add(this.engine.world, this.walls);
  }

  private removeAllBalls() {
    Matter.Composite.allBodies(this.engine.world).forEach((body) => {
      if (body.collisionFilter.category === PlinkoEngine.BALL_CATEGORY) {
        Matter.Composite.remove(this.engine.world, body);
      }
    });
    betAmountOfExistingBalls.set({});
  }

  /**
   * Applies the current theme to the board
   */
  private applyTheme() {
    const theme = BOARD_THEMES[this.boardTheme] || BOARD_THEMES.classic;

    // Update background
    this.render.options.background = theme.background;

    // Update pin colors
    this.pins.forEach((pin) => {
      if (pin.render.fillStyle) {
        pin.render.fillStyle = theme.pinColor;
      }
    });
  }
}

export default PlinkoEngine;
