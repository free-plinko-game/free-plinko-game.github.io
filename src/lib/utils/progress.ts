import { supabase, type UserProgress } from '$lib/supabase';
import { BASE_XP_PER_DROP, getLevelFromXP } from '$lib/constants/levels';

/**
 * Award XP to a user for dropping a ball
 * Returns the updated progress and whether they leveled up
 */
export async function awardXPForBallDrop(
  userId: string
): Promise<{ progress: UserProgress; leveledUp: boolean; oldLevel: number } | null> {
  try {
    // Get current progress
    const { data: currentProgress } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    const oldXP = currentProgress?.xp || 0;
    const oldLevel = currentProgress?.level || 1;
    const newXP = oldXP + BASE_XP_PER_DROP;
    const newLevel = getLevelFromXP(newXP);
    const leveledUp = newLevel > oldLevel;

    // Upsert progress
    const { data: updatedProgress, error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        xp: newXP,
        level: newLevel,
        total_balls_dropped: (currentProgress?.total_balls_dropped || 0) + 1,
      })
      .select()
      .single();

    if (error) {
      console.error('Error awarding XP:', error);
      return null;
    }

    return {
      progress: updatedProgress,
      leveledUp,
      oldLevel,
    };
  } catch (error) {
    console.error('Error in awardXPForBallDrop:', error);
    return null;
  }
}

/**
 * Get user progress (creates if doesn't exist)
 */
export async function getUserProgress(userId: string): Promise<UserProgress | null> {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error && error.code === 'PGRST116') {
      // No progress found, create initial progress
      const { data: newProgress } = await supabase
        .from('user_progress')
        .insert({
          user_id: userId,
          xp: 0,
          level: 1,
          total_balls_dropped: 0,
        })
        .select()
        .single();

      return newProgress;
    }

    return data;
  } catch (error) {
    console.error('Error getting user progress:', error);
    return null;
  }
}
