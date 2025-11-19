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
  // Premium themes (Level 13+)
  sunset: {
    name: 'Sunset',
    background: '#1a0a0a', // Dark red/black
    pinColor: '#ff6b35', // Coral orange
    accentColor: '#f7b731', // Yellow
  },
  ocean: {
    name: 'Ocean',
    background: '#001a33', // Deep ocean blue
    pinColor: '#00d4ff', // Bright cyan
    accentColor: '#3498db', // Sky blue
  },
  midnight: {
    name: 'Midnight',
    background: '#0a0a1a', // Very dark blue
    pinColor: '#9b59b6', // Purple
    accentColor: '#3498db', // Blue
  },
  royal: {
    name: 'Royal',
    background: '#0f0020', // Dark purple
    pinColor: '#ffd700', // Gold
    accentColor: '#9b59b6', // Purple
  },
};
