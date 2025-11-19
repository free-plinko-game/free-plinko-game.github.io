/**
 * XP required for each level
 * Formula: Exponential growth for steeper difficulty curve
 */
export const XP_PER_LEVEL: Record<number, number> = {
  1: 0,
  2: 200,      // 20 balls
  3: 500,      // 50 balls total
  4: 1000,     // 100 balls total
  5: 2000,     // 200 balls total
  6: 3500,     // 350 balls total
  7: 5500,     // 550 balls total
  8: 8000,     // 800 balls total
  9: 11500,    // 1,150 balls total
  10: 16000,   // 1,600 balls total
  11: 22000,   // 2,200 balls total
  12: 30000,   // 3,000 balls total
  13: 40000,   // 4,000 balls total
  14: 52000,   // 5,200 balls total
  15: 66000,   // 6,600 balls total
  16: 82000,   // 8,200 balls total
  17: 100000,  // 10,000 balls total
  18: 120000,  // 12,000 balls total
  19: 142000,  // 14,200 balls total
  20: 170000,  // 17,000 balls total
};

/**
 * Rewards/perks unlocked at each level
 */
export const LEVEL_REWARDS: Record<number, { name: string; description: string; emoji: string }> = {
  1: {
    name: 'Beginner',
    description: 'Welcome to Plinko!',
    emoji: '🎮'
  },
  2: {
    name: 'Custom Ball Colors',
    description: 'Unlock 5 ball color options',
    emoji: '🎨'
  },
  3: {
    name: 'Double XP Weekends',
    description: 'Earn 2x XP on weekends',
    emoji: '⚡'
  },
  4: {
    name: 'Board Themes',
    description: 'Unlock Neon, Casino & Matrix themes',
    emoji: '🌈'
  },
  5: {
    name: 'Lucky Multiplier',
    description: 'Random 1.5x multiplier on 1 in 10 balls',
    emoji: '🍀'
  },
  6: {
    name: 'Daily Streak Bonus',
    description: '+50 XP per consecutive day played',
    emoji: '🔥'
  },
  7: {
    name: 'Ball Trails',
    description: 'Animated particle trails for your balls',
    emoji: '✨'
  },
  8: {
    name: 'Super Multiplier',
    description: 'Random 2x multiplier unlocked',
    emoji: '💎'
  },
  9: {
    name: 'Custom Sounds',
    description: 'Unlock 3 custom sound packs',
    emoji: '🔊'
  },
  10: {
    name: 'VIP Status',
    description: 'Gold badge on leaderboard',
    emoji: '👑'
  },
  11: {
    name: 'Insurance',
    description: '50% refund on losses (once per day)',
    emoji: '🛡️'
  },
  12: {
    name: 'Mega Multiplier',
    description: 'Random 2.5x multiplier unlocked',
    emoji: '💰'
  },
  13: {
    name: 'Premium Themes',
    description: 'Unlock exclusive premium themes',
    emoji: '🎭'
  },
  14: {
    name: 'Daily Challenges',
    description: 'Complete challenges for bonus XP',
    emoji: '🎯'
  },
  15: {
    name: 'Ultra Multiplier',
    description: 'Random 3x multiplier unlocked',
    emoji: '🚀'
  },
  16: {
    name: 'Tournament Access',
    description: 'Join weekly tournaments',
    emoji: '🏆'
  },
  17: {
    name: 'Master Badge',
    description: 'Platinum badge on leaderboard',
    emoji: '💫'
  },
  18: {
    name: 'Legendary Multiplier',
    description: 'Random 4x multiplier unlocked',
    emoji: '🌟'
  },
  19: {
    name: 'Elite Status',
    description: 'Diamond badge on leaderboard',
    emoji: '💠'
  },
  20: {
    name: 'Plinko Master',
    description: 'Max level! All features unlocked',
    emoji: '🎖️'
  },
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

/**
 * Get all unlocked rewards for a given level
 */
export function getUnlockedRewards(currentLevel: number): Array<{ level: number; reward: typeof LEVEL_REWARDS[1] }> {
  const unlocked: Array<{ level: number; reward: typeof LEVEL_REWARDS[1] }> = [];
  for (let i = 1; i <= currentLevel; i++) {
    if (LEVEL_REWARDS[i]) {
      unlocked.push({ level: i, reward: LEVEL_REWARDS[i] });
    }
  }
  return unlocked;
}

/**
 * Get next reward to unlock
 */
export function getNextReward(currentLevel: number): { level: number; reward: typeof LEVEL_REWARDS[1] } | null {
  const nextLevel = currentLevel + 1;
  if (nextLevel <= 20 && LEVEL_REWARDS[nextLevel]) {
    return { level: nextLevel, reward: LEVEL_REWARDS[nextLevel] };
  }
  return null;
}
