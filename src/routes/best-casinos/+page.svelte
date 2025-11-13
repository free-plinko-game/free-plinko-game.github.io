<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import CasinoComparisonCard from '$lib/components/CasinoComparisonCard.svelte';
  import casinosData from '$lib/data/best-casinos.json';
</script>

<svelte:head>
  <title>Best Plinko Casinos 2025 - Top Rated Sites Compared</title>
  <meta name="description" content="Compare the best Plinko casinos of 2025. Detailed reviews of top-rated sites with exclusive bonuses, fast payouts, and provably fair games." />
  <meta property="og:title" content="Best Plinko Casinos 2025 - Top Rated Sites Compared" />
  <meta property="og:description" content="Compare the best Plinko casinos of 2025. Detailed reviews of top-rated sites with exclusive bonuses, fast payouts, and provably fair games." />
  <meta property="og:url" content="https://free-plinko-game.github.io/best-casinos" />
  <meta name="twitter:title" content="Best Plinko Casinos 2025" />
  <meta name="twitter:description" content="Compare the best Plinko casinos of 2025 with exclusive bonuses and fast payouts." />
</svelte:head>

<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-7xl">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-white mb-4">Best Plinko Casinos 2025</h1>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          We've reviewed and ranked the top online casinos where you can play Plinko for real money. 
          All casinos are licensed, secure, and offer great bonuses.
        </p>
      </div>
      
      <div class="space-y-4">
        {#each casinosData as casino}
          <CasinoComparisonCard {casino} />
        {/each}
      </div>
      
      <div class="mt-16 bg-zinc-900 border border-green-500/20 rounded-2xl p-8 shadow-lg shadow-green-500/10">
        <h2 class="text-3xl font-bold text-white mb-6">How We Rank Casinos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h3 class="font-bold text-lg mb-2 text-green-400">🎰 Game Selection</h3>
            <p class="text-sm">We prioritize casinos with a wide variety of Plinko games and other popular casino games.</p>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2 text-green-400">💰 Bonuses & Promotions</h3>
            <p class="text-sm">Generous welcome bonuses, regular promotions, and fair wagering requirements.</p>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2 text-green-400">⚡ Payout Speed</h3>
            <p class="text-sm">Fast and reliable withdrawal processing with multiple payment options.</p>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2 text-green-400">🛡️ Security & Licensing</h3>
            <p class="text-sm">All recommended casinos are licensed and use industry-standard security measures.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <footer class="px-5 pb-4 pt-16 border-t border-green-500/20">
    <div class="mx-auto max-w-7xl">
      <div class="flex items-center justify-center p-4">
        <p class="text-sm text-gray-500">
          Plinko Game Online © 2025
        </p>
      </div>
    </div>
  </footer>
</div>
