<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Balance from '$lib/components/Balance.svelte';
  import CasinoCard from '$lib/components/CasinoCard.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import LevelUpNotification from '$lib/components/LevelUpNotification.svelte';
  import { setBalanceFromLocalStorage, writeBalanceToLocalStorage } from '$lib/utils/game';
  import casinosData from '$lib/data/casinos.json';
  import { onMount } from 'svelte';
  
  // Lazy load heavy components
  let Plinko: any;
  let SettingsWindow: any;
  let LiveStatsWindow: any;
  let Sidebar: any;
  
  onMount(async () => {
    setBalanceFromLocalStorage();

    // Handle auth callback code exchange
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (code) {
        const { supabase } = await import('$lib/supabase');
        await supabase.auth.exchangeCodeForSession(code);
        // Remove code from URL
        window.history.replaceState({}, document.title, '/');
      }
    }

    // Lazy load Plinko and other heavy components
    const [plinkoModule, settingsModule, liveStatsModule, sidebarModule] = await Promise.all([
      import('$lib/components/Plinko'),
      import('$lib/components/SettingsWindow'),
      import('$lib/components/LiveStatsWindow/LiveStatsWindow.svelte'),
      import('$lib/components/Sidebar')
    ]);

    Plinko = plinkoModule.default;
    SettingsWindow = settingsModule.default;
    LiveStatsWindow = liveStatsModule.default;
    Sidebar = sidebarModule.default;
  });
  
  const faqs = [
    {
      question: "Is Plinko a game of skill or luck?",
      answer: "Plinko is primarily a game of luck. While you can choose where to drop the ball and select risk levels, the path the ball takes is determined by physics and randomness as it bounces off the pegs. No strategy can guarantee wins."
    },
    {
      question: "Can I play Plinko for real money?",
      answer: "Yes! Many online casinos offer Plinko for real money. You can practice with our free version first, then play at licensed casinos like Stake, BC.Game, or Joe Fortune when you're ready."
    },
    {
      question: "What are the best Plinko strategies?",
      answer: "The most important strategy is bankroll management. Set a budget and stick to it. Choose risk levels based on your comfort - low risk for steady smaller wins, high risk for bigger potential payouts. Remember that higher risk means higher volatility."
    },
    {
      question: "Is online Plinko fair?",
      answer: "Reputable online casinos use provably fair technology for Plinko, allowing you to verify each result's randomness. Always play at licensed casinos that use certified random number generators (RNG)."
    },
    {
      question: "What's the best casino for playing Plinko?",
      answer: "Mafia Casino is highly rated for Plinko with fast payouts and provably fair games. BC.Game and Joe Fortune are also excellent choices. Check our <a href='/best-casinos' class='text-green-400 underline hover:no-underline'>casino comparison page</a> for detailed reviews."
    },
    {
      question: "How do I withdraw my Plinko winnings?",
      answer: "Withdrawal methods vary by casino but typically include cryptocurrency (fastest), e-wallets, credit cards, or bank transfers. Crypto casinos like Mafia Casino offer fast withdrawals, while traditional methods may take 1-5 days."
    }
  ];
</script>

<svelte:head>
  <title>Free Plinko Game - Play Online | Best Plinko Casinos 2025</title>
  <meta name="description" content="Play Plinko for free online! Practice with our demo game, then discover the best real money Plinko casinos with exclusive bonuses and fast payouts." />
  <meta property="og:title" content="Free Plinko Game - Play Online | Best Plinko Casinos 2025" />
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
        {#if Sidebar}
          <svelte:component this={Sidebar} />
        {:else}
          <div class="w-full lg:w-80 bg-zinc-900 p-4">
            <div class="animate-pulse h-96 bg-zinc-800 rounded"></div>
          </div>
        {/if}
        <div class="flex-1">
          {#if Plinko}
            <svelte:component this={Plinko} />
          {:else}
            <div class="bg-zinc-900 h-[600px] flex items-center justify-center">
              <div class="text-white">Loading Plinko...</div>
            </div>
          {/if}
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
      
      <div class="mb-12">
        <FAQ {faqs} />
      </div>
    </div>
  </div>

  {#if SettingsWindow}
    <svelte:component this={SettingsWindow} />
  {/if}
  {#if LiveStatsWindow}
    <svelte:component this={LiveStatsWindow} />
  {/if}

  <!-- Level Up Notification -->
  <LevelUpNotification />

  <footer class="px-5 pb-4 pt-16 border-t border-green-500/20">
    <div class="mx-auto max-w-[40rem]">
      <div class="flex items-center justify-center p-2">
        <p class="text-sm text-gray-400">
          Plinko Game Online © 2025
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
