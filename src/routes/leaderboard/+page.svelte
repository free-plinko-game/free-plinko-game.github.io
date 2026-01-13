<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  import type { LeaderboardEntry } from '$lib/supabase';
  import { getBadgeForLevel } from '$lib/utils/badges';

  let loading = true;
  let activeTab: 'weekly' | 'monthly' | 'alltime' = 'weekly';
  let weeklyLeaders: LeaderboardEntry[] = [];
  let monthlyLeaders: any[] = [];
  let alltimeLeaders: any[] = [];
  let userLevels: Record<string, number> = {}; // Map user_id to level

  onMount(async () => {
    await loadLeaderboards();
  });
  
  async function loadLeaderboards() {
    loading = true;

    console.log('🔍 Loading leaderboards...');

    // Fetch all sessions
    const { data: sessions, error: sessionsError } = await supabase
      .from('sessions')
      .select('*')
      .order('created_at', { ascending: false });

    // Fetch user progress data for badges
    const { data: progressData } = await supabase
      .from('user_progress')
      .select('user_id, level');

    if (progressData) {
      userLevels = progressData.reduce((acc, entry) => {
        acc[entry.user_id] = entry.level;
        return acc;
      }, {} as Record<string, number>);
    }

    console.log('📊 Query result:', { sessions, error: sessionsError });

    if (sessionsError) {
      console.error('❌ Sessions error:', sessionsError);
    } else if (sessions) {
      console.log(`✅ Total sessions fetched: ${sessions.length}`);

      if (sessions.length === 0) {
        console.warn('⚠️ No sessions found in database');
      } else {
        // Calculate week start (Monday of current week)
        const now = new Date();
        const weekStart = new Date(now);
        const dayOfWeek = weekStart.getDay();
        const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Adjust for Monday start
        weekStart.setDate(weekStart.getDate() - diff);
        weekStart.setHours(0, 0, 0, 0);

        console.log('📅 Week start date:', weekStart.toISOString());
        console.log('📅 Today:', now.toISOString());

        // Process weekly leaderboard
        const weeklySessions = sessions.filter(s => {
          const sessionDate = new Date(s.created_at);
          return sessionDate >= weekStart;
        });

        console.log(`📈 Weekly sessions count: ${weeklySessions.length}`);
        console.log('📈 Weekly sessions:', weeklySessions);

        const weeklyStats = weeklySessions.reduce((acc: any, s: any) => {
        const userId = s.user_id;
        const sessionDate = new Date(s.created_at);

        if (!acc[userId]) {
          acc[userId] = {
            user_id: userId,
            display_name: s.display_name || 'Anonymous',
            total_profit: 0,
            sessions_count: 0,
            biggest_win: 0,
            latest_session_date: sessionDate
          };
        }

        // Use most recent display name
        if (sessionDate > acc[userId].latest_session_date) {
          acc[userId].display_name = s.display_name || 'Anonymous';
          acc[userId].latest_session_date = sessionDate;
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
        .slice(0, 50);

      console.log('Weekly leaders:', weeklyLeaders);

      // Process monthly leaderboard
      const monthStart = new Date();
      monthStart.setDate(1);
      monthStart.setHours(0, 0, 0, 0);

      const monthlySessions = sessions.filter(s =>
        new Date(s.created_at) >= monthStart
      );

      const monthlyStats = monthlySessions.reduce((acc: any, s: any) => {
        const userId = s.user_id;
        const sessionDate = new Date(s.created_at);

        if (!acc[userId]) {
          acc[userId] = {
            user_id: userId,
            display_name: s.display_name || 'Anonymous',
            total_profit: 0,
            sessions_count: 0,
            biggest_win: 0,
            latest_session_date: sessionDate
          };
        }

        // Use most recent display name
        if (sessionDate > acc[userId].latest_session_date) {
          acc[userId].display_name = s.display_name || 'Anonymous';
          acc[userId].latest_session_date = sessionDate;
        }

        acc[userId].total_profit += Number(s.profit);
        acc[userId].sessions_count++;
        if (Number(s.profit) > acc[userId].biggest_win) {
          acc[userId].biggest_win = Number(s.profit);
        }
        return acc;
      }, {});

      monthlyLeaders = Object.values(monthlyStats)
        .sort((a: any, b: any) => b.total_profit - a.total_profit)
        .slice(0, 50);

      // Process all-time leaderboard
      const alltimeStats = sessions.reduce((acc: any, s: any) => {
        const userId = s.user_id;
        const sessionDate = new Date(s.created_at);

        if (!acc[userId]) {
          acc[userId] = {
            user_id: userId,
            display_name: s.display_name || 'Anonymous',
            total_profit: 0,
            sessions_count: 0,
            biggest_win: 0,
            latest_session_date: sessionDate
          };
        }

        // Use most recent display name
        if (sessionDate > acc[userId].latest_session_date) {
          acc[userId].display_name = s.display_name || 'Anonymous';
          acc[userId].latest_session_date = sessionDate;
        }

        acc[userId].total_profit += Number(s.profit);
        acc[userId].sessions_count++;
        if (Number(s.profit) > acc[userId].biggest_win) {
          acc[userId].biggest_win = Number(s.profit);
        }
        return acc;
      }, {});

      alltimeLeaders = Object.values(alltimeStats)
        .sort((a: any, b: any) => b.total_profit - a.total_profit)
        .slice(0, 100);

        console.log('🏆 Weekly leaders:', weeklyLeaders);
        console.log('📆 Monthly leaders:', monthlyLeaders);
        console.log('⭐ All-time leaders:', alltimeLeaders);
      }
    } else {
      console.warn('⚠️ Sessions is null or undefined');
    }

    loading = false;
  }
  
  function getMedalEmoji(rank: number) {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `${rank}.`;
  }
  
  $: currentLeaders = activeTab === 'weekly'
    ? weeklyLeaders
    : activeTab === 'monthly'
    ? monthlyLeaders
    : alltimeLeaders;

  $: {
    console.log('🎯 Active tab:', activeTab);
    console.log('🎯 Current leaders:', currentLeaders);
    console.log('🎯 Weekly leaders:', weeklyLeaders);
    console.log('🎯 Monthly leaders:', monthlyLeaders);
    console.log('🎯 All-time leaders:', alltimeLeaders);
  }
</script>

<svelte:head>
  <title>Leaderboard - Top Plinko Players</title>
  <meta name="description" content="See the top Plinko players worldwide. Weekly, monthly, and all-time leaderboards showing biggest wins and profits." />
</svelte:head>

<main>
<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-5xl">
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">🏆 Leaderboard</h1>
        <p class="text-xl text-gray-300">Top Plinko players from around the world</p>
      </div>
      
      <!-- Tabs -->
      <div class="flex gap-2 mb-8 bg-zinc-900 border border-green-500/20 rounded-lg p-2">
        <button
          on:click={() => activeTab = 'weekly'}
          class="flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition"
          class:bg-green-500={activeTab === 'weekly'}
          class:text-black={activeTab === 'weekly'}
          class:text-gray-300={activeTab !== 'weekly'}
          class:hover:bg-zinc-800={activeTab !== 'weekly'}
        >
          This Week
        </button>
        <button
          on:click={() => activeTab = 'monthly'}
          class="flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition"
          class:bg-green-500={activeTab === 'monthly'}
          class:text-black={activeTab === 'monthly'}
          class:text-gray-300={activeTab !== 'monthly'}
          class:hover:bg-zinc-800={activeTab !== 'monthly'}
        >
          This Month
        </button>
        <button
          on:click={() => activeTab = 'alltime'}
          class="flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition"
          class:bg-green-500={activeTab === 'alltime'}
          class:text-black={activeTab === 'alltime'}
          class:text-gray-300={activeTab !== 'alltime'}
          class:hover:bg-zinc-800={activeTab !== 'alltime'}
        >
          All Time
        </button>
      </div>
      
      {#if loading}
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-8 text-center">
          <p class="text-gray-400">Loading leaderboard...</p>
        </div>
      {:else if currentLeaders.length === 0}
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-8 text-center">
          <p class="text-gray-300 mb-4">No players yet for this period!</p>
          <a href="/dashboard" class="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg">
            Be the First →
          </a>
        </div>
      {:else}
        <div class="space-y-3">
          <!-- Top 3 Podium -->
          {#if currentLeaders.length >= 3}
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <!-- 2nd Place -->
              <div class="bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-500 rounded-lg p-6 text-center order-2 md:order-1">
                <div class="text-4xl mb-2">🥈</div>
                <div class="flex items-center justify-center gap-1 mb-1">
                  <p class="text-white font-bold text-lg">{currentLeaders[1].display_name || 'Anonymous'}</p>
                  {#if userLevels[currentLeaders[1].user_id]}
                    {@const badge = getBadgeForLevel(userLevels[currentLeaders[1].user_id])}
                    {#if badge}
                      <span class="{badge.color} text-lg" title="{badge.name}">{badge.emoji}</span>
                    {/if}
                  {/if}
                </div>
                <p class:text-green-400={currentLeaders[1].total_profit >= 0} class:text-red-400={currentLeaders[1].total_profit < 0} class="font-bold text-2xl mb-1">
                  {currentLeaders[1].total_profit >= 0 ? '+' : ''}${currentLeaders[1].total_profit?.toFixed(2)}
                </p>
                <p class="text-sm text-gray-400">{currentLeaders[1].sessions_count} sessions</p>
              </div>
              
              <!-- 1st Place -->
              <div class="bg-gradient-to-br from-yellow-600 to-yellow-700 border-2 border-yellow-400 rounded-lg p-6 text-center order-1 md:order-2 md:scale-110 md:z-10">
                <div class="text-5xl mb-2">🥇</div>
                <div class="flex items-center justify-center gap-1 mb-1">
                  <p class="text-white font-bold text-xl">{currentLeaders[0].display_name || 'Anonymous'}</p>
                  {#if userLevels[currentLeaders[0].user_id]}
                    {@const badge = getBadgeForLevel(userLevels[currentLeaders[0].user_id])}
                    {#if badge}
                      <span class="{badge.color} text-xl" title="{badge.name}">{badge.emoji}</span>
                    {/if}
                  {/if}
                </div>
                <p class:text-green-400={currentLeaders[0].total_profit >= 0} class:text-red-400={currentLeaders[0].total_profit < 0} class="font-bold text-3xl mb-1">
                  {currentLeaders[0].total_profit >= 0 ? '+' : ''}${currentLeaders[0].total_profit?.toFixed(2)}
                </p>
                <p class="text-sm text-gray-300">{currentLeaders[0].sessions_count} sessions</p>
                <p class="text-xs text-gray-300 mt-2">Best: ${currentLeaders[0].biggest_win?.toFixed(2)}</p>
              </div>

              <!-- 3rd Place -->
              <div class="bg-gradient-to-br from-amber-700 to-amber-800 border-2 border-amber-600 rounded-lg p-6 text-center order-3">
                <div class="text-4xl mb-2">🥉</div>
                <div class="flex items-center justify-center gap-1 mb-1">
                  <p class="text-white font-bold text-lg">{currentLeaders[2].display_name || 'Anonymous'}</p>
                  {#if userLevels[currentLeaders[2].user_id]}
                    {@const badge = getBadgeForLevel(userLevels[currentLeaders[2].user_id])}
                    {#if badge}
                      <span class="{badge.color} text-lg" title="{badge.name}">{badge.emoji}</span>
                    {/if}
                  {/if}
                </div>
                <p class:text-green-400={currentLeaders[2].total_profit >= 0} class:text-red-400={currentLeaders[2].total_profit < 0} class="font-bold text-2xl mb-1">
                  {currentLeaders[2].total_profit >= 0 ? '+' : ''}${currentLeaders[2].total_profit?.toFixed(2)}
                </p>
                <p class="text-sm text-gray-400">{currentLeaders[2].sessions_count} sessions</p>
              </div>
            </div>
          {/if}
          
          <!-- Rest of the leaderboard (or all if less than 3 players) -->
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg overflow-hidden">
            {#each currentLeaders as entry, i}
              {#if currentLeaders.length < 3 || i >= 3}
                <div class="flex items-center justify-between p-4 border-b border-zinc-800 hover:bg-zinc-800/50 transition">
                  <div class="flex items-center gap-4 flex-1">
                    <span class="text-gray-400 font-bold text-lg w-8">{getMedalEmoji(i + 1)}</span>
                    <div class="flex-1">
                      <div class="flex items-center gap-1">
                        <p class="text-white font-semibold">{entry.display_name || 'Anonymous'}</p>
                        {#if userLevels[entry.user_id]}
                          {@const badge = getBadgeForLevel(userLevels[entry.user_id])}
                          {#if badge}
                            <span class="{badge.color}" title="{badge.name}">{badge.emoji}</span>
                          {/if}
                        {/if}
                      </div>
                      <p class="text-sm text-gray-400">{entry.sessions_count} sessions</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class:text-green-400={entry.total_profit >= 0} class:text-red-400={entry.total_profit < 0} class="font-bold text-xl">
                      {entry.total_profit >= 0 ? '+' : ''}${entry.total_profit?.toFixed(2) || '0.00'}
                    </p>
                    <p class="text-sm text-gray-400">Best: ${entry.biggest_win?.toFixed(2) || '0.00'}</p>
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}
      
      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Want to Compete?</h3>
        <p class="text-gray-300 mb-6">Track your sessions and climb the leaderboard!</p>
        <a 
          href="/dashboard"
          class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 text-lg"
        >
          START TRACKING →
        </a>
      </div>
    </div>
  </div>
  
  <footer class="px-5 pb-4 pt-16 border-t border-green-500/20">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-center justify-center gap-3 p-4">
        <a href="https://github.com/free-plinko-game/free-plinko-game.github.io" target="_blank" rel="noopener" class="text-sm text-gray-400 hover:text-green-400 transition-colors">Plinko Game Repo</a>
        <p class="text-sm text-gray-400">
          Plinko Game Online © 2026
        </p>
        <div class="text-xs text-gray-400 text-center space-y-1 mt-2">
          <p>🔞 18+ Only. Gambling can be addictive. Please play responsibly.</p>
          <p>This site contains affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
      </div>
    </div>
  </footer>
</div>
</main>
