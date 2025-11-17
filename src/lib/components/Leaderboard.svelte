<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  import type { LeaderboardEntry } from '$lib/supabase';
  
  let weeklyLeaders: LeaderboardEntry[] = [];
  let loading = true;
  
  onMount(async () => {
    const { data, error } = await supabase
      .from('weekly_leaderboard')
      .select('*')
      .limit(10);
    
    if (data) weeklyLeaders = data;
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
