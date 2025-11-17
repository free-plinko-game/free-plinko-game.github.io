<script lang="ts">
  import { supabase } from '$lib/supabase';
  
  let casino = 'Stake';
  let riskLevel = 'medium';
  let betAmount = 10;
  let resultAmount = 0;
  let loading = false;
  
  const casinos = ['Stake', 'BC.Game', 'Rollbit', 'Roobet', 'Duelbits', 'Joe Fortune'];
  
  $: profit = resultAmount - betAmount;
  
  async function logSession() {
    loading = true;

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('Please sign in first!');
      loading = false;
      return;
    }

    // Get display name from user metadata
    const displayName = user.user_metadata?.display_name || user.email?.split('@')[0] || 'Anonymous';

    const { error } = await supabase.from('sessions').insert({
      user_id: user.id,
      display_name: displayName,
      casino,
      risk_level: riskLevel,
      bet_amount: betAmount,
      result_amount: resultAmount,
      profit: profit
    });

    if (error) {
      alert('Error logging session: ' + error.message);
    } else {
      alert('Session logged! ✅');
      resultAmount = 0;
    }

    loading = false;
  }
</script>

<div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
  <h3 class="text-2xl font-bold text-white mb-4">Log Your Session</h3>
  
  <form on:submit|preventDefault={logSession} class="space-y-4">
    <div>
      <label for="casino" class="block text-sm font-medium text-gray-300 mb-1">Casino</label>
      <select id="casino" bind:value={casino} class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white">
        {#each casinos as c}
          <option value={c}>{c}</option>
        {/each}
      </select>
    </div>
    
    <div>
      <label for="riskLevel" class="block text-sm font-medium text-gray-300 mb-1">Risk Level</label>
      <select id="riskLevel" bind:value={riskLevel} class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
    
    <div>
      <label for="betAmount" class="block text-sm font-medium text-gray-300 mb-1">Bet Amount ($)</label>
      <input
        id="betAmount"
        type="number"
        bind:value={betAmount}
        min="0"
        step="0.01"
        required
        class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
      />
    </div>
    
    <div>
      <label for="resultAmount" class="block text-sm font-medium text-gray-300 mb-1">Result Amount ($)</label>
      <input
        id="resultAmount"
        type="number"
        bind:value={resultAmount}
        min="0"
        step="0.01"
        required
        class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
      />
    </div>
    
    <div class="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
      <p class="text-sm text-gray-300">
        Profit/Loss: 
        <span class:text-green-400={profit >= 0} class:text-red-400={profit < 0} class="font-bold text-lg">
          {profit >= 0 ? '+' : ''}{profit.toFixed(2)}
        </span>
      </p>
    </div>
    
    <button
      type="submit"
      disabled={loading}
      class="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg disabled:opacity-50"
    >
      {loading ? 'Logging...' : 'Log Session'}
    </button>
  </form>
</div>
