/**
 * Badge system for level-based achievements
 */

export interface Badge {
  emoji: string;
  name: string;
  color: string; // Tailwind color class
}

/**
 * Get badge for a user based on their level
 * Level 10: VIP (Gold)
 * Level 17: Master (Platinum)
 * Level 19: Elite (Diamond)
 */
export function getBadgeForLevel(level: number): Badge | null {
  if (level >= 19) {
    return {
      emoji: '💠',
      name: 'Elite',
      color: 'text-cyan-400',
    };
  }

  if (level >= 17) {
    return {
      emoji: '💫',
      name: 'Master',
      color: 'text-purple-400',
    };
  }

  if (level >= 10) {
    return {
      emoji: '👑',
      name: 'VIP',
      color: 'text-yellow-400',
    };
  }

  return null;
}
