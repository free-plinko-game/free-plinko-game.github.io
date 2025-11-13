<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  
  const casino = {
    name: "Rollbit",
    logo: "/logos/rollbit.svg",
    rating: 4.6,
    established: "2020",
    license: "Curacao",
    minDeposit: "$10",
    welcomeBonus: "150% up to $750",
    affiliateLink: "https://rollbit.com"
  };
  
  const pros = [
    "Provably fair Plinko games",
    "NFT integration and marketplace",
    "Instant crypto deposits and withdrawals",
    "Innovative lottery and raffle system",
    "Sports betting available",
    "Active community and social features"
  ];
  
  const cons = [
    "Crypto-only (no fiat options)",
    "Complex interface for beginners",
    "Limited customer support hours"
  ];
</script>

<svelte:head>
  <title>Rollbit Review 2025 - 150% Bonus + NFT Integration</title>
  <meta name="description" content="Rollbit review: Unique crypto casino with provably fair Plinko, NFT marketplace, 150% welcome bonus, and instant withdrawals. Web3 gaming at its best." />
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
          <p class="text-white font-bold text-xl">Instant</p>
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
          <h2 class="text-3xl font-bold text-white mb-4">Welcome Bonus & Rewards</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">{casino.welcomeBonus}</p>
            <p class="text-gray-300">Generous crypto welcome bonus with additional rewards through the lottery system.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>Rollbit offers a competitive 150% welcome bonus up to $750 on your first deposit. The bonus is designed for crypto users and comes with fair wagering requirements compared to many competitors.</p>
            <p>Beyond the welcome offer, Rollbit's unique lottery and raffle system provides ongoing opportunities to win additional bonuses, free spins, and even NFTs. Every bet you place earns you lottery tickets, creating a secondary reward mechanism that keeps gameplay exciting.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Provably Fair Plinko & Games</h2>
          <div class="text-gray-300 space-y-3">
            <p>Rollbit's Plinko implementation is among the best in the crypto casino space, featuring full provably fair technology that allows players to verify the fairness of every single drop. The game features smooth animations, customizable risk levels, and multiple row configurations.</p>
            <p>The platform also offers a wide range of other provably fair games including dice, crash, slots, and more. The provably fair system ensures complete transparency, with players able to independently verify that game outcomes are truly random and not manipulated.</p>
            <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p class="text-green-400 font-semibold mb-2">🎮 Web3 Gaming Integration</p>
              <p class="text-sm">Rollbit pioneered the integration of NFTs into online casino gaming, allowing players to use their NFTs as collateral or trade them on the built-in marketplace.</p>
            </div>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Cryptocurrency & Instant Withdrawals</h2>
          <div class="text-gray-300 space-y-3">
            <p>As a crypto-native casino, Rollbit supports multiple cryptocurrencies including Bitcoin, Ethereum, Litecoin, and various stablecoins. Deposits are instant and withdrawals are processed immediately without any waiting period.</p>
            <p>The platform's focus on cryptocurrency allows for true anonymity and lightning-fast transactions. There are no KYC requirements for most users, and you can start playing within minutes of signing up. The only downside is the lack of fiat currency options, which may be a barrier for some players.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">NFT Marketplace & Innovation</h2>
          <div class="text-gray-300 space-y-3">
            <p>Rollbit stands out with its integrated NFT marketplace where players can buy, sell, and trade NFTs. The platform's own NFT collections offer utility beyond just collectibles – some NFTs provide rakeback bonuses, VIP perks, and other benefits.</p>
            <p>This Web3 integration represents the future of online gaming, blending traditional casino gameplay with blockchain technology and digital asset ownership. It's an innovative approach that appeals to both crypto enthusiasts and traditional casino players looking for something new.</p>
          </div>
        </section>
      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Experience Next-Gen Crypto Gaming</h3>
        <p class="text-gray-300 mb-6">Join Rollbit for provably fair Plinko, NFT integration, and instant crypto withdrawals.</p>
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
        <p class="text-sm text-gray-400">
          Plinko Game Online © 2025
        </p>
      </div>
    </div>
  </footer>
</div>
