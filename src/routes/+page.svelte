<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Balance from '$lib/components/Balance.svelte';
  import CasinoCard from '$lib/components/CasinoCard.svelte';
  import LiveStatsWindow from '$lib/components/LiveStatsWindow/LiveStatsWindow.svelte';
  import Plinko from '$lib/components/Plinko';
  import SettingsWindow from '$lib/components/SettingsWindow';
  import Sidebar from '$lib/components/Sidebar';
  import { setBalanceFromLocalStorage, writeBalanceToLocalStorage } from '$lib/utils/game';
  import casinosData from '$lib/data/casinos.json';
  import { onMount } from 'svelte';
  onMount(() => {
    setBalanceFromLocalStorage();
  });
</script>

<svelte:head>
  <title>Free Plinko Game - Play Online | Best Plinko Casinos 2024</title>
  <meta name="description" content="Play Plinko for free online! Practice with our demo game, then discover the best real money Plinko casinos with exclusive bonuses and fast payouts." />
  <meta property="og:title" content="Free Plinko Game - Play Online | Best Plinko Casinos 2024" />
  <meta property="og:description" content="Play Plinko for free online! Practice with our demo game, then discover the best real money Plinko casinos with exclusive bonuses and fast payouts." />
  <meta property="og:url" content="https://free-plinko-game.github.io/" />
  <meta property="og:image" content="https://free-plinko-game.github.io/logos/stake.svg" />
  <meta name="twitter:title" content="Free Plinko Game - Play Online" />
  <meta name="twitter:description" content="Play Plinko for free online! Practice with our demo game, then discover the best real money Plinko casinos." />
</svelte:head>

<svelte:window on:beforeunload={writeBalanceToLocalStorage} />

<div class="relative flex min-h-dvh w-full flex-col">
  <Nav />
  
  <div class="sticky top-14 z-10 w-full bg-black border-b border-green-500/20 px-5 py-2 shadow-md">
    <div class="mx-auto max-w-7xl flex justify-center">
      <Balance />
    </div>
  </div>
  
  <div class="flex-1 px-5">
    <div class="mx-auto mt-5 min-w-[300px] max-w-xl drop-shadow-xl md:mt-10 lg:max-w-7xl">
      <div class="flex flex-col-reverse overflow-hidden rounded-lg lg:w-full lg:flex-row">
        <Sidebar />
        <div class="flex-1">
          <Plinko />
        </div>
      </div>
    </div>

    <div class="mx-auto mt-16 max-w-4xl">
      <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-8 shadow-lg shadow-green-500/10 mb-12">
        <h2 class="text-3xl font-bold text-white mb-4">About Plinko Game</h2>
        <div class="text-gray-300 space-y-4">
          <p>
            Plinko is one of the most popular casino games, originally made famous by the TV show "The Price is Right." 
            The game's simple yet thrilling mechanics have made it a favorite among online casino players worldwide.
          </p>
          <p>
            In Plinko, players drop a ball from the top of a pegged board, watching it bounce unpredictably through the 
            pins until it lands in one of several slots at the bottom, each with different multiplier values. The excitement 
            comes from the unpredictability – you never know exactly where the ball will land!
          </p>
          <p>
            While our free version lets you practice and enjoy the game, playing Plinko for real money at licensed online 
            casinos adds an extra level of excitement with the chance to win actual cash prizes.
          </p>
        </div>
      </div>

      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-2 text-center">Play Plinko for Real Money</h2>
        <p class="text-gray-400 text-center mb-8">Top-rated casinos where you can play Plinko with real money</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each casinosData as casino}
            <CasinoCard {casino} />
          {/each}
        </div>
        
        <div class="text-center mt-8">
          <a 
            href="/best-casinos" 
            class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
          >
            View All Casinos →
          </a>
        </div>
      </div>

      <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-8 shadow-lg shadow-green-500/10 mb-12">
        <h2 class="text-2xl font-bold text-white mb-4">How to Play Plinko</h2>
        <div class="text-gray-300 space-y-3">
          <ol class="list-decimal list-inside space-y-2">
            <li>Choose your bet amount</li>
            <li>Select the risk level (low, medium, or high)</li>
            <li>Drop the ball and watch it bounce through the pins</li>
            <li>Win based on which multiplier slot the ball lands in</li>
          </ol>
          <p class="mt-4">
            The beauty of Plinko lies in its simplicity and the excitement of watching your ball navigate 
            the board. Whether you're playing for fun or real money, Plinko offers entertainment for everyone.
          </p>
        </div>
      </div>
    </div>
  </div>

  <SettingsWindow />
  <LiveStatsWindow />
  
  <footer class="px-5 pb-4 pt-16 border-t border-green-500/20">
    <div class="mx-auto max-w-[40rem]">
      <div class="flex items-center justify-center p-2">
        <p class="text-sm text-gray-500">
          Plinko Game Online © 2024
        </p>
      </div>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    @apply bg-black;
  }
</style>
