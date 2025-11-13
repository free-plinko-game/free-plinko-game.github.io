<script lang="ts">
  export let casino: {
    rank: number;
    name: string;
    slug?: string;
    logo: string;
    bonus: string;
    rating: number;
    payout: string;
    features: string[];
    badges?: string[];
    minDeposit?: string;
    payoutTime?: string;
    affiliateLink: string;
  };
</script>

<div class="bg-zinc-900 border border-green-500/20 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all shadow-lg shadow-green-500/5">
  <div class="p-6">
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center gap-4">
        <div class="bg-green-500 text-black font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
          {casino.rank}
        </div>
        <div>
          <div class="flex items-center gap-3 mb-1">
            <img src={casino.logo} alt={casino.name} class="h-12 object-contain" />
            {#if casino.slug}
              <a 
                href="/reviews/{casino.slug}"
                class="text-2xl font-bold text-white hover:text-green-400 transition-colors"
              >
                {casino.name}
              </a>
            {:else}
              <h3 class="text-2xl font-bold text-white">{casino.name}</h3>
            {/if}
          </div>
          {#if casino.badges && casino.badges.length > 0}
            <div class="flex gap-2">
              {#each casino.badges as badge}
                <span class="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
                  {badge}
                </span>
              {/each}
            </div>
          {/if}
        </div>
      </div>
      <div class="text-right">
        <div class="flex items-center gap-1 justify-end mb-1">
          <span class="text-green-400 text-2xl">★</span>
          <span class="text-white font-bold text-xl">{casino.rating}</span>
        </div>
        <p class="text-gray-400 text-sm">Rating</p>
      </div>
    </div>

    <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4">
      <p class="text-green-400 font-bold text-lg mb-1">{casino.bonus}</p>
      <p class="text-gray-400 text-sm">Welcome Bonus</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      {#if casino.minDeposit}
        <div class="bg-zinc-800 rounded-lg p-3">
          <p class="text-gray-400 text-xs mb-1">Min Deposit</p>
          <p class="text-white font-semibold">{casino.minDeposit}</p>
        </div>
      {/if}
      {#if casino.payoutTime}
        <div class="bg-zinc-800 rounded-lg p-3">
          <p class="text-gray-400 text-xs mb-1">Payout Time</p>
          <p class="text-white font-semibold text-sm">{casino.payoutTime}</p>
        </div>
      {/if}
      <div class="bg-zinc-800 rounded-lg p-3">
        <p class="text-gray-400 text-xs mb-1">Payout %</p>
        <p class="text-white font-semibold">{casino.payout}</p>
      </div>
      <div class="bg-zinc-800 rounded-lg p-3">
        <p class="text-gray-400 text-xs mb-1">Plinko</p>
        <p class="text-green-400 font-semibold">✓ Available</p>
      </div>
    </div>

    <div class="mb-4">
      <h4 class="text-white font-semibold mb-2 text-sm">Key Features:</h4>
      <div class="flex flex-wrap gap-2">
        {#each casino.features as feature}
          <span class="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-green-500/20">
            {feature}
          </span>
        {/each}
      </div>
    </div>

    <div class="flex gap-3">
      
        href={casino.affiliateLink}
        target="_blank"
        rel="noopener noreferrer sponsored"
        class="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-3 px-6 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
      >
        PLAY NOW
      </a>
      {#if casino.slug}
        
          href="/reviews/{casino.slug}"
          class="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-all border border-green-500/20 hover:border-green-500/50"
        >
          Read Review
        </a>
      {/if}
    </div>
  </div>
</div>
