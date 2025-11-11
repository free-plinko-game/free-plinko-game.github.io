<script lang="ts">
  import logo from '$lib/assets/logo.svg';
  import Balance from '$lib/components/Balance.svelte';
  import CasinoCard from '$lib/components/CasinoCard.svelte';
  import LiveStatsWindow from '$lib/components/LiveStatsWindow/LiveStatsWindow.svelte';
  import Plinko from '$lib/components/Plinko';
  import SettingsWindow from '$lib/components/SettingsWindow';
  import Sidebar from '$lib/components/Sidebar';
  import { setBalanceFromLocalStorage, writeBalanceToLocalStorage } from '$lib/utils/game';
  import casinosData from '$lib/data/casinos.json';
  import GitHubLogo from 'phosphor-svelte/lib/GithubLogo';
  import { onMount } from 'svelte';
  onMount(() => {
    setBalanceFromLocalStorage();
  });
</script>
<svelte:window on:beforeunload={writeBalanceToLocalStorage} />
<div class="relative flex min-h-dvh w-full flex-col">
  <nav class="sticky top-0 z-10 w-full bg-gray-700 px-5 drop-shadow-lg">
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between">
      <img src={logo} alt="logo" class="h-6 sm:h-7" />
      <div class="mx-auto">
        <Balance />
      </div>
    </div>
  </nav>
  <div class="flex-1 px-5">
    <div class="mx-auto mt-5 min-w-[300px] max-w-xl drop-shadow-xl md:mt-10 lg:max-w-7xl">
      <div class="flex flex-col-reverse overflow-hidden rounded-lg lg:w-full lg:flex-row">
        <Sidebar />
        <div class="flex-1">
          <Plinko />
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="mx-auto mt-16 max-w-4xl">
      <div class="bg-gray-700 rounded-lg p-8 shadow-lg mb-12">
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

      <!-- Casino Offers Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-2 text-center">Play Plinko for Real Money</h2>
        <p class="text-gray-400 text-center mb-8">Top-rated casinos where you can play Plinko with real money</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each casinosData as casino}
            <CasinoCard {casino} />
          {/each}
        </div>
      </div>

      <!-- Additional Content -->
      <div class="bg-gray-700 rounded-lg p-8 shadow-lg mb-12">
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
  <footer class="px-5 pb-4 pt-16">
    <div class="mx-auto max-w-[40rem]">
      <div aria-hidden="true" class="h-[1px] bg-slate-700" />
      <div class="flex items-center justify-between p-2">
        <p class="text-sm text-slate-500">
          
            href="/"
            target="_blank"
            rel="noreferrer"
            class=" text-cyan-600 transition hover:text-cyan-500"
          >
            Plinko Game Online
          </a>
          © 2024
        </p>
        
          href="https://github.com/plinko-game-online/plinko-game-online.github.io"
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-1 p-1 text-sm text-slate-500 transition hover:text-cyan-500"
        >
          <GitHubLogo class="size-4" weight="bold" />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  </footer>
</div>
<style>
  :global(body) {
    @apply bg-gray-800;
  }
</style>
