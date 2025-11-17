<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  
  let loading = true;
  let stats: any = null;
  let user: any = null;
  
  onMount(async () => {
    const { data: { user: currentUser } } = await supabase.auth.getUser();
    user = currentUser;
    
    if (user) {
      const { data: sessions } = await supabase
        .from('sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      
      if (sessions) {
        const totalSessions = sessions.length;
        const totalProfit = sessions.reduce((sum, s) => sum + Number(s.profit), 0);
        const wins = sessions.filter(s => Number(s.profit) > 0).length;
        const losses = sessions.filter(s => Number(s.profit) < 0).length;
        const winRate = totalSessions > 0 ? (wins / totalSessions) * 100 : 0;
        const biggestWin = Math.max(...sessions.map(s => Number(s.profit)), 0);
        const biggestLoss = Math.min(...sessions.map(s => Number(s.profit)), 0);
        const avgProfit = totalSessions > 0 ? totalProfit / totalSessions : 0;
        
        const casinoStats = sessions.reduce((acc: any, s) => {
          if (!acc[s.casino]) {
            acc[s.casino] = { sessions: 0, profit: 0 };
          }
          acc[s.casino].sessions++;
          acc[s.casino].profit += Number(s.profit);
          return acc;
        }, {});
        
        const riskStats = sessions.reduce((acc: any, s) => {
          if (!acc[s.risk_level]) {
            acc[s.risk_level] = { sessions: 0, profit: 0 };
          }
          acc[s.risk_level].sessions++;
          acc[s.risk_level].profit += Number(s.profit);
          return acc;
        }, {});
        
        stats = {
          totalSessions,
          totalProfit,
          wins,
          losses,
          winRate,
          biggestWin,
          biggestLoss,
          avgProfit,
          casinoStats,
          riskStats
        };
      }
    }
    
    loading = false;
  });
</script>

<svelte:head>
  <title>Your Stats - Plinko Dashboard</title>
</svelte:head>

<main>
<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-6xl">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-bold text-white">Your Stats</h1>
        <a href="/dashboard" class="text-green-400 hover:text-green-300 text-sm">← Back to Dashboard</a>
      </div>
      
      {#if loading}
        <p class="text-gray-400">Loading your stats...</p>
      {:else if !user}
        <p class="text-gray-400">Please <a href="/dashboard" class="text-green-400 hover:underline">sign in</a> to view stats.</p>
      {:else if !stats || stats.totalSessions === 0}
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-8 text-center">
          <p class="text-gray-300 mb-4">No sessions logged yet!</p>
          <a href="/dashboard" class="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg">
            Log Your First Session
          </a>
        </div>
      {:else}
        <div class="space-y-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
              <p class="text-gray-400 text-sm mb-1">Total Sessions</p>
              <p class="text-white font-bold text-3xl">{stats.totalSessions}</p>
            </div>
            
            <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
              <p class="text-gray-400 text-sm mb-1">Total Profit</p>
              <p class="font-bold text-3xl" class:text-green-400={stats.totalProfit >= 0} class:text-red-400={stats.totalProfit < 0}>
                {stats.totalProfit >= 0 ? '+' : ''}${stats.totalProfit.toFixed(2)}
              </p>
            </div>
            
            <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
              <p class="text-gray-400 text-sm mb-1">Win Rate</p>
              <p class="text-white font-bold text-3xl">{stats.winRate.toFixed(1)}%</p>
            </div>
            
            <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
              <p class="text-gray-400 text-sm mb-1">Avg Profit</p>
              <p class="font-bold text-3xl" class:text-green-400={stats.avgProfit >= 0} class:text-red-400={stats.avgProfit < 0}>
                {stats.avgProfit >= 0 ? '+' : ''}${stats.avgProfit.toFixed(2)}
              </p>
            </div>
          </div>
          
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
            <h2 class="text-2xl font-bold text-white mb-4">Win/Loss Record</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <p class="text-green-400 text-2xl font-bold">{stats.wins} Wins</p>
                <p class="text-sm text-gray-400">Biggest: ${stats.biggestWin.toFixed(2)}</p>
              </div>
              <div>
                <p class="text-red-400 text-2xl font-bold">{stats.losses} Losses</p>
                <p class="text-sm text-gray-400">Biggest: ${stats.biggestLoss.toFixed(2)}</p>
              </div>
              <div>
                <p class="text-white text-2xl font-bold">{stats.totalSessions} Total</p>
              </div>
            </div>
          </div>
          
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
            <h2 class="text-2xl font-bold text-white mb-4">By Casino</h2>
            <div class="space-y-3">
              {#each Object.entries(stats.casinoStats) as [casino, data]}
                <div class="bg-zinc-800 rounded-lg p-4 flex justify-between">
                  <div>
                    <p class="text-white font-semibold">{casino}</p>
                    <p class="text-sm text-gray-400">{data.sessions} sessions</p>
                  </div>
                  <p class="font-bold text-lg" class:text-green-400={data.profit >= 0} class:text-red-400={data.profit < 0}>
                    {data.profit >= 0 ? '+' : ''}${data.profit.toFixed(2)}
                  </p>
                </div>
              {/each}
            </div>
          </div>
          
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
            <h2 class="text-2xl font-bold text-white mb-4">By Risk Level</h2>
            <div class="grid md:grid-cols-3 gap-4">
              {#each Object.entries(stats.riskStats) as [risk, data]}
                <div class="bg-zinc-800 rounded-lg p-4">
                  <p class="text-white font-semibold capitalize mb-2">{risk} Risk</p>
                  <p class="text-sm text-gray-400 mb-1">{data.sessions} sessions</p>
                  <p class="font-bold text-lg" class:text-green-400={data.profit >= 0} class:text-red-400={data.profit < 0}>
                    {data.profit >= 0 ? '+' : ''}${data.profit.toFixed(2)}
                  </p>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
</main>
