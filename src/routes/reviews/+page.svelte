<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  
  const reviews = [
    {
      name: "BC.Game",
      slug: "bc-game",
      logo: "/logos/bcgame.png",
      rating: 4.7,
      bonus: "200% up to $1,000",
      excerpt: "Leading crypto casino with extensive Plinko options and fast withdrawals.",
      pros: ["150+ cryptocurrencies", "Provably fair games", "1-2 hour withdrawals"]
    }
  ];
</script>

<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-5xl">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-white mb-4">Casino Reviews</h1>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          In-depth reviews of the best online casinos for playing Plinko. We test each casino for fairness, payouts, bonuses, and game selection.
        </p>
      </div>
      
      <div class="space-y-6">
        {#each reviews as review}
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition-all">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-shrink-0">
                <img src={review.logo} alt={review.name} class="h-16 object-contain" />
              </div>
              
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h2 class="text-2xl font-bold text-white">{review.name}</h2>
                  <div class="flex items-center gap-1">
                    <span class="text-green-400 text-xl">★</span>
                    <span class="text-white font-bold">{review.rating}</span>
                  </div>
                </div>
                
                <p class="text-green-400 font-semibold mb-3">{review.bonus}</p>
                <p class="text-gray-300 mb-4">{review.excerpt}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each review.pros as pro}
                    <span class="bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full">
                      ✓ {pro}
                    </span>
                  {/each}
                </div>
                
                <a 
                  href="/reviews/{review.slug}" 
                  class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-2 px-6 rounded-lg transition-all"
                >
                  Read Full Review →
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="mt-12 bg-zinc-900 border border-green-500/20 rounded-lg p-8 text-center">
        <h3 class="text-2xl font-bold text-white mb-3">More Reviews Coming Soon</h3>
        <p class="text-gray-400 mb-6">We're constantly reviewing new casinos. Check back regularly for the latest additions.</p>
        <a 
          href="/best-casinos" 
          class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-3 px-8 rounded-lg transition-all"
        >
          View All Casinos
        </a>
      </div>
    </div>
  </div>
  
  <footer class="px-5 pb-4 pt-16 border-t border-green-500/20">
    <div class="mx-auto max-w-7xl">
      <div class="flex items-center justify-center p-4">
        <p class="text-sm text-gray-500">
          Plinko Game Online © 2024
        </p>
      </div>
    </div>
  </footer>
</div>
