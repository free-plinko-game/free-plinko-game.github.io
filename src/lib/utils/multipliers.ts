/**
 * Multiplier system for level-based bonuses
 */

export interface MultiplierResult {
  multiplier: number;
  name: string;
  emoji: string;
}

/**
 * Get available multipliers based on user level
 */
export function getAvailableMultipliers(userLevel: number): MultiplierResult[] {
  const multipliers: MultiplierResult[] = [];

  if (userLevel >= 5) {
    multipliers.push({ multiplier: 1.5, name: 'Lucky', emoji: '🍀' });
  }
  if (userLevel >= 8) {
    multipliers.push({ multiplier: 2.0, name: 'Super', emoji: '💎' });
  }
  if (userLevel >= 12) {
    multipliers.push({ multiplier: 2.5, name: 'Mega', emoji: '💰' });
  }
  if (userLevel >= 15) {
    multipliers.push({ multiplier: 3.0, name: 'Ultra', emoji: '🚀' });
  }
  if (userLevel >= 18) {
    multipliers.push({ multiplier: 4.0, name: 'Legendary', emoji: '🌟' });
  }

  return multipliers;
}

/**
 * Roll for a random multiplier bonus
 * Returns null if no multiplier is applied
 * Chance: 10% (1 in 10 balls)
 */
export function rollForMultiplier(userLevel: number): MultiplierResult | null {
  const availableMultipliers = getAvailableMultipliers(userLevel);

  if (availableMultipliers.length === 0) {
    return null;
  }

  // 10% chance to get a multiplier
  const roll = Math.random();
  if (roll < 0.1) {
    // Pick a random multiplier from available ones (weighted towards higher levels)
    const randomIndex = Math.floor(Math.random() * availableMultipliers.length);
    return availableMultipliers[randomIndex];
  }

  return null;
}
