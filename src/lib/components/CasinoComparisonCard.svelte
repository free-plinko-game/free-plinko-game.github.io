<script lang="ts">
  export let casino: {
    rank: number;
    name: string;
    logo: string;
    bonus: string;
    rating: number;
    payout: string;
    features: string[];
    badges: string[];
    minDeposit: string | null;
    payoutTime: string | null;
    affiliateLink: string;
  };
  
  const stars = Array(5).fill('★');
</script>

<div class="casino-comparison-card bg-zinc-900 border rounded-2xl shadow-lg overflow-hidden {casino.rank === 1 ? 'border-green-500' : 'border-green-500/20'} hover:shadow-xl hover:border-green-500/50 transition-all">
  {#if casino.badges.length > 0}
    <div class="bg-gradient-to-r from-green-500 to-green-600 text-black text-center py-2 px-4 text-sm font-bold">
      {casino.badges[0]}
    </div>
  {/if}
  
  <div class="flex items-start p-6 gap-4">
    <div class="flex-shrink-0 w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center">
      <span class="text-3xl font-bold text-green-400">{casino.rank}</span>
    </div>
    
    <div class="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6">
      <div class="md:col-span-3 flex flex-col items-center md:items-start justify-center">
        <img src={casino.logo} alt={casino.name} class="h-12 object-contain mb-2" />
        <p class="text-white text-sm font-semibold">{casino.name}</p>
      </div>
      
      <div class="md:col-span-3">
        <p class="text-xs text-gray-500 mb-1">Welcome Bonus</p>
        <p class="text-lg font-bold text-white mb-3">{casino.bonus}</p>
        
        <div class="space-y-1">
          {#each casino.features as feature}
            <div class="flex items-start text-sm text-gray-300">
              <span class="text-green-400 mr-2 flex-shrink-0">✓</span>
              <span>{feature}</span>
            </div>
          {/each}
        </div>
        
        <div class="mt-3 space-y-1">
          {#if casino.minDeposit}
            <div class="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs px-2 py-1 rounded mr-2">
              💰 Min Deposit: {casino.minDeposit}
            </div>
          {/if}
          {#if casino.payoutTime}
            <div class="inline-block bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs px-2 py-1 rounded">
              ⏱️ Payout Time: {casino.payoutTime}
            </div>
          {/if}
          {#if casino.badges.includes("New Casino")}
            <div class="inline-block bg-green-500/20 border border-green-500/30 text-green-400 text-xs px-2 py-1 rounded">
              🌱 New Casino
            </div>
          {/if}
        </div>
      </div>
      
      <div class="md:col-span-2 flex flex-col items-center justify-center border-l border-r border-green-500/20 px-4">
        <p class="text-xs text-gray-500 mb-1">Payout</p>
        <p class="text-xl font-bold text-white mb-3">{casino.payout}</p>
        
        <div class="flex items-center gap-1 mb-1">
          {#each stars as star}
            <span class="text-green-400 text-xl">{star}</span>
          {/each}
        </div>
        <p class="text-lg font-bold text-white">{casino.rating}/5</p>
      </div>
      
      <div class="md:col-span-4 flex flex-col items-center justify-center gap-3">
        <a 
          href={casino.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          class="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-4 px-8 rounded-lg text-center transition-all transform hover:scale-105 text-lg shadow-lg shadow-green-500/50"
        >
          PLAY NOW
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .casino-comparison-card {
    transition: all 0.3s ease;
  }
  
  .casino-comparison-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(34, 197, 94, 0.2);
  }
</style>
