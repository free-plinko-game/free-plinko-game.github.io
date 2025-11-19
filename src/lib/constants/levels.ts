/**
 * XP required for each level
 * Formula: level * 100 * level (quadratic growth)
 */
export const XP_PER_LEVEL: Record<number, number> = {
  1: 0,
  2: 100,
  3: 300,
  4: 600,
  5: 1000,
  6: 1500,
  7: 2100,
  8: 2800,
  9: 3600,
  10: 4500,
  11: 5500,
  12: 6600,
  13: 7800,
  14: 9100,
  15: 10500,
  16: 12000,
  17: 13600,
  18: 15300,
  19: 17100,
  20: 19000,
};

/**
 * Base XP awarded per ball drop
 */
export const BASE_XP_PER_DROP = 10;

/**
 * Calculate level from total XP
 */
export function getLevelFromXP(xp: number): number {
  let level = 1;
  for (let i = 2; i <= 20; i++) {
    if (xp >= XP_PER_LEVEL[i]) {
      level = i;
    } else {
      break;
    }
  }
  return level;
}

/**
 * Get XP required for next level
 */
export function getXPForNextLevel(currentLevel: number): number {
  return XP_PER_LEVEL[currentLevel + 1] || XP_PER_LEVEL[20];
}

/**
 * Get XP required for current level
 */
export function getXPForCurrentLevel(currentLevel: number): number {
  return XP_PER_LEVEL[currentLevel] || 0;
}

/**
 * Calculate XP progress percentage for current level
 */
export function getXPProgress(currentXP: number, currentLevel: number): number {
  const currentLevelXP = getXPForCurrentLevel(currentLevel);
  const nextLevelXP = getXPForNextLevel(currentLevel);
  const xpInCurrentLevel = currentXP - currentLevelXP;
  const xpNeededForLevel = nextLevelXP - currentLevelXP;
  return Math.min(100, (xpInCurrentLevel / xpNeededForLevel) * 100);
}
