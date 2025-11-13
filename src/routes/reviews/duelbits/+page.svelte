<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  
  const casino = {
    name: "Duelbits",
    logo: "https://via.placeholder.com/200x80/1a1a1a/00ff00?text=Duelbits",
    rating: 4.5,
    established: "2020",
    license: "Curacao",
    minDeposit: "$20",
    welcomeBonus: "$100 + 100 Free Spins",
    affiliateLink: "https://duelbits.com"
  };
  
  const pros = [
    "Multiple unique game modes",
    "Crypto cashback program",
    "Fast 1-3 hour withdrawals",
    "Sports betting integration",
    "Active community and chat",
    "Regular tournaments and events"
  ];
  
  const cons = [
    "Higher minimum deposit ($20)",
    "Smaller welcome bonus than competitors",
    "Crypto-only platform"
  ];
</script>

<svelte:head>
  <title>Duelbits Review 2025 - $100 Bonus + Crypto Cashback</title>
  <meta name="description" content="Duelbits review: Innovative crypto casino with multiple game modes, cashback rewards, and fast withdrawals. Perfect for competitive players." />
</svelte:head>

<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-5xl">
      
      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mb-8 shadow-lg shadow-green-500/10">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <img src={casino.logo} alt={casino.name} class="h-20 object-contain" />
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">{casino.name} Review</h1>
            <div class="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div class="flex">
                {#each Array(5) as _, i}
                  <span class="text-green-400 text-2xl">{i < 4 ? '★' : '☆'}</span>
                {/each}
              </div>
              <span class="text-white font-bold text-xl">{casino.rating}/5</span>
            </div>
            <p class="text-gray-300 text-lg">Established {casino.established} • Licensed in {casino.license}</p>
          </div>
          <div class="flex flex-col gap-3">
            <a 
              href={casino.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-4 px-8 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 whitespace-nowrap"
            >
              PLAY NOW →
            </a>
            <p class="text-green-400 text-sm text-center font-semibold">{casino.welcomeBonus}</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-4 text-center">
          <p class="text-gray-400 text-sm mb-1">Min Deposit</p>
          <p class="text-white font-bold text-xl">{casino.minDeposit}</p>
        </div>
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-4 text-center">
          <p class="text-gray-400 text-sm mb-1">Payout Speed</p>
          <p class="text-white font-bold text-xl">1-3 hours</p>
        </div>
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-4 text-center">
          <p class="text-gray-400 text-sm mb-1">License</p>
          <p class="text-white font-bold text-xl">{casino.license}</p>
        </div>
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-4 text-center">
          <p class="text-gray-400 text-sm mb-1">Plinko Available</p>
          <p class="text-green-400 font-bold text-xl">✓ Yes</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
          <h3 class="text-2xl font-bold text-green-400 mb-4">Pros</h3>
          <ul class="space-y-3">
            {#each pros as pro}
              <li class="flex items-start text-gray-300">
                <span class="text-green-400 mr-3 text-xl">✓</span>
                <span>{pro}</span>
              </li>
            {/each}
          </ul>
        </div>
        <div class="bg-zinc-900 border border-red-500/20 rounded-lg p-6">
          <h3 class="text-2xl font-bold text-red-400 mb-4">Cons</h3>
          <ul class="space-y-3">
            {#each cons as con}
              <li class="flex items-start text-gray-300">
                <span class="text-red-400 mr-3 text-xl">✗</span>
                <span>{con}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <div class="space-y-8">
        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Welcome Bonus & Cashback System</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">{casino.welcomeBonus}</p>
            <p class="text-gray-300">Solid starter bonus with ongoing crypto cashback rewards for regular players.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>Duelbits offers a $100 welcome bonus plus 100 free spins to new players. While not the largest bonus on the market, it comes with fair terms and reasonable wagering requirements that make it actually achievable.</p>
            <p>The real value at Duelbits comes from their ongoing cashback program. Players earn crypto cashback on all bets, whether they win or lose. This rakeback system ensures that even during losing streaks, you're getting value back. VIP players enjoy higher cashback percentages and exclusive perks.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Multiple Game Modes & Plinko</h2>
          <div class="text-gray-300 space-y-3">
            <p>Duelbits stands out with its variety of game modes and competitive features. The platform offers traditional casino games like Plinko alongside unique modes like Battles, Duels, and Upgrader, which add a competitive and social element to gambling.</p>
            <p>The Plinko game at Duelbits is well-implemented with smooth gameplay and provably fair mechanics. Players can adjust risk levels and bet amounts to suit their playing style, whether conservative or aggressive.</p>
            <p>Battle mode is particularly popular, allowing players to compete against each other in case opening battles. This social gaming aspect creates a more engaging experience than traditional solo play.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Sports Betting Integration</h2>
          <div class="text-gray-300 space-y-3">
            <p>In addition to casino games, Duelbits offers comprehensive sports betting coverage including football, basketball, esports, and more. This makes it a one-stop shop for players who enjoy both casino games and sports wagering.</p>
            <p>The sports betting section features competitive odds and live betting options. The cashback program applies to sports bets as well, providing added value across all types of gambling activities.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Crypto Payments & Withdrawals</h2>
          <div class="text-gray-300 space-y-3">
            <p>Duelbits accepts multiple cryptocurrencies including Bitcoin, Ethereum, Litecoin, and various altcoins. Deposits are instant and withdrawals are typically processed within 1-3 hours, which is faster than many competitors.</p>
            <p>The minimum deposit is $20, which is slightly higher than some competitors but still accessible for most players. The crypto-first approach means no lengthy KYC verification for most users, allowing you to start playing quickly.</p>
            <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p class="text-green-400 font-semibold mb-2">💰 Automatic Cashback</p>
              <p class="text-sm">Cashback is calculated and credited automatically - no need to claim or request it manually.</p>
            </div>
          </div>
        </section>
      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Join the Duelbits Community</h3>
        <p class="text-gray-300 mb-6">Experience competitive gaming with cashback rewards and multiple game modes.</p>
        <a 
          href={casino.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 text-lg"
        >
          CLAIM YOUR BONUS NOW →
        </a>
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
