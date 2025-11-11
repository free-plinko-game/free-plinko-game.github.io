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
    reviewLink: string;
  };
  
  const stars = Array(5).fill('★');
</script>

<div class="casino-comparison-card bg-white rounded-2xl shadow-lg overflow-hidden border-2 {casino.rank === 1 ? 'border-green-600' : 'border-gray-200'} hover:shadow-xl transition-all">
  {#if casino.badges.length > 0}
    <div class="bg-green-700 text-white text-center py-2 px-4 text-sm font-bold">
      {casino.badges[0]}
    </div>
  {/if}
  
  <div class="flex items-start p-6 gap-4">
    <div class="flex-shrink-0 w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
      <span class="text-3xl font-bold text-green-700">{casino.rank}</span>
    </div>
    
    <div class="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6">
      <div class="md:col-span-3 flex flex-col items-center md:items-start justify-center">
        <img src={casino.logo} alt={casino.name} class="h-12 object-contain mb-2" />
        <a href={casino.reviewLink} class="text-green-600 hover:text-green-700 text-sm font-semibold">{casino.name}</a>
      </div>
      
      <div class="md:col-span-3">
        <p class="text-xs text-gray-600 mb-1">Welcome Bonus</p>
        <p class="text-lg font-bold text-gray-900 mb-3">{casino.bonus}</p>
        
        <div class="space-y-1">
          {#each casino.features as feature}
            <div class="flex items-start text-sm text-gray-700">
              <span class="text-green-500 mr-2 flex-shrink-0">✓</span>
              <span>{feature}</span>
            </div>
          {/each}
        </div>
        
        <div class="mt-3 space-y-1">
          {#if casino.minDeposit}
            <div class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
              💰 Min Deposit: {casino.minDeposit}
            </div>
          {/if}
          {#if casino.payoutTime}
            <div class="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
              ⏱️ Payout Time: {casino.payoutTime}
            </div>
          {/if}
          {#if casino.badges.includes("New Casino")}
            <div class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              🌱 New Casino
            </div>
          {/if}
        </div>
      </div>
      
      <div class="md:col-span-2 flex flex-col items-center justify-center border-l border-r border-gray-200 px-4">
        <p class="text-xs text-gray-600 mb-1">Payout</p>
        <p class="text-xl font-bold text-gray-900 mb-3">{casino.payout}</p>
        
        <div class="flex items-center gap-1 mb-1">
          {#each stars as star}
            <span class="text-yellow-400 text-xl">{star}</span>
          {/each}
        </div>
        <p class="text-lg font-bold text-gray-900">{casino.rating}/5</p>
      </div>
      
      <div class="md:col-span-4 flex flex-col items-center justify-center gap-3">
        <a 
          href={casino.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-center transition-all transform hover:scale-105 text-lg shadow-lg"
        >
          PLAY NOW
        </a>
        <a 
          href={casino.reviewLink}
          class="text-orange-600 hover:text-orange-700 font-semibold text-sm underline"
        >
          {casino.name} Review
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
  }
</style>
