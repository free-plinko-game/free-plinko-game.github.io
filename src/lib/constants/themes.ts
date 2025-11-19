/**
 * Visual themes for the Plinko board
 * Unlocked at Level 4
 */

export interface BoardTheme {
  name: string;
  background: string;
  pinColor: string;
  accentColor: string;
}

export const BOARD_THEMES: Record<string, BoardTheme> = {
  classic: {
    name: 'Classic',
    background: '#0f1728', // Dark blue
    pinColor: '#ffffff', // White
    accentColor: '#00ff00', // Green
  },
  neon: {
    name: 'Neon',
    background: '#0a0015', // Deep purple/black
    pinColor: '#ff00ff', // Magenta
    accentColor: '#00ffff', // Cyan
  },
  casino: {
    name: 'Casino',
    background: '#0d1f0d', // Dark forest green
    pinColor: '#ffd700', // Gold
    accentColor: '#ff0000', // Red
  },
  matrix: {
    name: 'Matrix',
    background: '#000000', // Pure black
    pinColor: '#00ff00', // Matrix green
    accentColor: '#00ff00', // Green
  },
};
