import { writable } from 'svelte/store';
import type { UserProgress } from '$lib/supabase';

export const userProgress = writable<UserProgress | null>(null);
export const showLevelUpNotification = writable(false);
export const levelUpData = writable<{ oldLevel: number; newLevel: number } | null>(null);
