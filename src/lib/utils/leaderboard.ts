import { supabase } from '$lib/supabase';
import type { RiskLevel, RowCount } from '$lib/types';

/**
 * Automatically log a game session to the leaderboard if user is authenticated.
 * This runs silently in the background - errors won't interrupt gameplay.
 */
export async function logGameSession(params: {
  betAmount: number;
  resultAmount: number;
  profit: number;
  riskLevel: RiskLevel;
  rowCount: RowCount;
}) {
  try {
    // Check if user is logged in
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      // User not logged in, skip logging
      return;
    }

    // Get display name from user metadata
    const displayName = user.user_metadata?.display_name || user.email?.split('@')[0] || 'Anonymous';

    // Log the session to Supabase
    await supabase.from('sessions').insert({
      user_id: user.id,
      display_name: displayName,
      casino: 'Free Plinko Game',
      risk_level: params.riskLevel.toLowerCase(),
      bet_amount: params.betAmount,
      result_amount: params.resultAmount,
      profit: params.profit
    });
  } catch (error) {
    // Silently fail - don't interrupt gameplay
    console.debug('Session logging failed:', error);
  }
}
