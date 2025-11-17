<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  
  let loading = true;
  let sessions: any[] = [];
  let user: any = null;
  let filterCasino = 'all';
  let filterRisk = 'all';
  
  $: filteredSessions = sessions.filter(s => {
    if (filterCasino !== 'all' && s.casino !== filterCasino) return false;
    if (filterRisk !== 'all' && s.risk_level !== filterRisk) return false;
    return true;
  });
  
  onMount(async () => {
    const { data: { user: currentUser } } = await supabase.auth.getUser();
    user = currentUser;
    
    if (user) {
      const { data } = await supabase
        .from('sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      
      if (data) sessions = data;
    }
    
    loading = false;
  });
  
  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  function getRiskClass(risk: string) {
    if (risk === 'low') return 'bg-green-500 bg-opacity-20 text-green-400';
    if (risk === 'medium') return 'bg-yellow-500 bg-opacity-20 text-yellow-400';
    if (risk === 'high') return 'bg-red-500 bg-opacity-20 text-red-400';
    return '';
  }
</script>

<svelte:head>
  <title>Session History - Plinko Dashboard</title>
</svelte:head>

<main>
<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-6xl">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-bold text-white">Session History</h1>
        <a href="/dashboard" class="text-green-400 hover:text-green-300 text-sm">← Back to Dashboard</a>
      </div>
      
      {#if loading}
        <p class="text-gray-400">Loading your history...</p>
      {:else if !user}
        <p class="text-gray-400">Please <a href="/dashboard" class="text-green-400 hover:underline">sign in</a> to view history.</p>
      {:else if sessions.length === 0}
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-8 text-center">
          <p class="text-gray-300 mb-4">No sessions logged yet!</p>
          <a href="/dashboard" class="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg">
            Log Your First Session
          </a>
        </div>
      {:else}
        <div class="space-y-6">
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-4 flex flex-wrap gap-4">
            <div>
              <label for="filterCasino" class="block text-sm text-gray-400 mb-1">Casino</label>
              <select id="filterCasino" bind:value={filterCasino} class="bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white text-sm">
                <option value="all">All Casinos</option>
                <option value="Stake">Stake</option>
                <option value="BC.Game">BC.Game</option>
                <option value="Rollbit">Rollbit</option>
                <option value="Roobet">Roobet</option>
                <option value="Duelbits">Duelbits</option>
                <option value="Joe Fortune">Joe Fortune</option>
              </select>
            </div>
            
            <div>
              <label for="filterRisk" class="block text-sm text-gray-400 mb-1">Risk Level</label>
              <select id="filterRisk" bind:value={filterRisk} class="bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white text-sm">
                <option value="all">All Levels</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            
            <div class="ml-auto self-end">
              <p class="text-sm text-gray-400">Showing {filteredSessions.length} of {sessions.length} sessions</p>
            </div>
          </div>
          
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-zinc-800 border-b border-zinc-700">
                  <tr>
                    <th class="text-left p-4 text-sm font-semibold text-gray-300">Date</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-300">Casino</th>
                    <th class="text-left p-4 text-sm font-semibold text-gray-300">Risk</th>
                    <th class="text-right p-4 text-sm font-semibold text-gray-300">Bet</th>
                    <th class="text-right p-4 text-sm font-semibold text-gray-300">Result</th>
                    <th class="text-right p-4 text-sm font-semibold text-gray-300">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  {#each filteredSessions as session}
                    <tr class="border-b border-zinc-800 hover:bg-zinc-800/50 transition">
                      <td class="p-4 text-sm text-gray-300">{formatDate(session.created_at)}</td>
                      <td class="p-4 text-sm text-white font-medium">{session.casino}</td>
                      <td class="p-4">
                        <span class="text-xs px-2 py-1 rounded capitalize {getRiskClass(session.risk_level)}">
                          {session.risk_level}
                        </span>
                      </td>
                      <td class="p-4 text-sm text-gray-300 text-right">${Number(session.bet_amount).toFixed(2)}</td>
                      <td class="p-4 text-sm text-gray-300 text-right">${Number(session.result_amount).toFixed(2)}</td>
                      <td class="p-4 text-sm font-bold text-right"
                          class:text-green-400={Number(session.profit) >= 0}
                          class:text-red-400={Number(session.profit) < 0}>
                        {Number(session.profit) >= 0 ? '+' : ''}${Number(session.profit).toFixed(2)}
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
</main>
