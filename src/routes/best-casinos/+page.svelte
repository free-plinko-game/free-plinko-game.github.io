<script lang="ts">
  import logo from '$lib/assets/logo.svg';
  import CasinoComparisonCard from '$lib/components/CasinoComparisonCard.svelte';
  import casinosData from '$lib/data/best-casinos.json';
</script>

<div class="relative flex min-h-dvh w-full flex-col bg-gray-50">
  <nav class="sticky top-0 z-10 w-full bg-gray-700 px-5 drop-shadow-lg">
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between">
      <a href="/"><img src={logo} alt="logo" class="h-6 sm:h-7" /></a>
      <div class="flex gap-6">
        <a href="/" class="text-gray-300 hover:text-white transition text-sm font-medium">Play Free</a>
        <a href="/best-casinos" class="text-cyan-400 hover:text-cyan-300 transition text-sm font-medium">Best Casinos</a>
      </div>
    </div>
  </nav>
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-7xl">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-900 mb-4">Best Plinko Casinos 2024</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We've reviewed and ranked the top online casinos where you can play Plinko for real money. 
          All casinos are licensed, secure, and offer great bonuses.
        </p>
      </div>
      
      <div class="space-y-4">
        {#each casinosData as casino}
          <CasinoComparisonCard {casino} />
        {/each}
      </div>
      
      <div class="mt-16 bg-white rounded-2xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">How We Rank Casinos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 class="font-bold text-lg mb-2">🎰 Game Selection</h3>
            <p class="text-sm">We prioritize casinos with a wide variety of Plinko games and other popular casino games.</p>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2">💰 Bonuses & Promotions</h3>
            <p class="text-sm">Generous welcome bonuses, regular promotions, and fair wagering requirements.</p>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2">⚡ Payout Speed</h3>
            <p class="text-sm">Fast and reliable withdrawal processing with multiple payment options.</p>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2">🛡️ Security & Licensing</h3>
            <p class="text-sm">All recommended casinos are licensed and use industry-standard security measures.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <footer class="px-5 pb-4 pt-16 bg-white">
    <div class="mx-auto max-w-7xl">
      <div aria-hidden="true" class="h-[1px] bg-slate-300" />
      <div class="flex items-center justify-center p-4">
        <p class="text-sm text-slate-600">
          Plinko Game Online © 2024
        </p>
      </div>
    </div>
  </footer>
</div>
