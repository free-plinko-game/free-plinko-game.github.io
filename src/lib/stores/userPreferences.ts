import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface UserPreferences {
  ballColor: string;
  boardTheme: 'classic' | 'neon' | 'casino' | 'matrix';
  soundPack: 'default' | 'retro' | 'sci-fi' | 'casino';
  ballTrailsEnabled: boolean;
}

const defaultPreferences: UserPreferences = {
  ballColor: '#ff0000', // Classic red
  boardTheme: 'classic',
  soundPack: 'default',
  ballTrailsEnabled: false,
};

// Load from localStorage if available
function loadPreferences(): UserPreferences {
  if (browser) {
    const stored = localStorage.getItem('userPreferences');
    if (stored) {
      try {
        return { ...defaultPreferences, ...JSON.parse(stored) };
      } catch (e) {
        console.error('Failed to parse stored preferences:', e);
      }
    }
  }
  return defaultPreferences;
}

// Create the store
function createUserPreferencesStore() {
  const { subscribe, set, update } = writable<UserPreferences>(loadPreferences());

  return {
    subscribe,
    set: (value: UserPreferences) => {
      if (browser) {
        localStorage.setItem('userPreferences', JSON.stringify(value));
      }
      set(value);
    },
    update: (updater: (value: UserPreferences) => UserPreferences) => {
      update((current) => {
        const updated = updater(current);
        if (browser) {
          localStorage.setItem('userPreferences', JSON.stringify(updated));
        }
        return updated;
      });
    },
    reset: () => {
      if (browser) {
        localStorage.removeItem('userPreferences');
      }
      set(defaultPreferences);
    },
  };
}

export const userPreferences = createUserPreferencesStore();
