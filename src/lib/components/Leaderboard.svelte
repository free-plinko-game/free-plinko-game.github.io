<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  import type { LeaderboardEntry } from '$lib/supabase';

  let weeklyLeaders: LeaderboardEntry[] = [];
  let loading = true;

  onMount(async () => {
    // Fetch all sessions
    const { data: sessions, error } = await supabase
      .from('sessions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Sessions error:', error);
    } else if (sessions && sessions.length > 0) {
      // Calculate week start (Monday of current week)
      const now = new Date();
      const weekStart = new Date(now);
      const dayOfWeek = weekStart.getDay();
      const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Adjust for Monday start
      weekStart.setDate(weekStart.getDate() - diff);
      weekStart.setHours(0, 0, 0, 0);

      // Filter sessions from this week
      const weeklySessions = sessions.filter(s =>
        new Date(s.created_at) >= weekStart
      );

      // Group by user and calculate stats
      const weeklyStats = weeklySessions.reduce((acc: any, s: any) => {
        const userId = s.user_id;
        if (!acc[userId]) {
          acc[userId] = {
            user_id: userId,
            display_name: s.display_name || 'Anonymous',
            total_profit: 0,
            sessions_count: 0,
            biggest_win: 0
          };
        }
        acc[userId].total_profit += Number(s.profit);
        acc[userId].sessions_count++;
        if (Number(s.profit) > acc[userId].biggest_win) {
          acc[userId].biggest_win = Number(s.profit);
        }
        return acc;
      }, {});

      weeklyLeaders = Object.values(weeklyStats)
        .sort((a: any, b: any) => b.total_profit - a.total_profit)
        .slice(0, 10);
    }

    loading = false;
  });
</script>

<div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
  <h3 class="text-2xl font-bold text-white mb-4">🏆 Weekly Leaderboard</h3>
  
  {#if loading}
    <p class="text-gray-400">Loading...</p>
  {:else if weeklyLeaders.length === 0}
    <p class="text-gray-400">No entries yet. Be the first!</p>
  {:else}
    <div class="space-y-3">
      {#each weeklyLeaders as entry, i}
        <div class="flex items-center justify-between bg-zinc-800 rounded-lg p-4">
          <div class="flex items-center gap-3">
            <span class="text-2xl">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`}</span>
            <div>
              <p class="text-white font-semibold">{entry.display_name || 'Anonymous'}</p>
              <p class="text-sm text-gray-400">{entry.sessions_count} sessions</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-green-400 font-bold text-lg">
              ${entry.total_profit?.toFixed(2) || '0.00'}
            </p>
            <p class="text-sm text-gray-400">Best: ${entry.biggest_win?.toFixed(2) || '0.00'}</p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
