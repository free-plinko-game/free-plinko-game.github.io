<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import BreadcrumbSchema from '$lib/components/BreadcrumbSchema.svelte';
  import ReviewSchema from '$lib/components/ReviewSchema.svelte';
  import Author from '$lib/components/Author.svelte';

  const casino = {
    name: "Mafia Casino",
    logo: "/logos/mafiacasino.svg",
    rating: 5,
    established: "2022",
    license: "Anjouan Gaming",
    minDeposit: "$15",
    welcomeBonus: "250% up to $4,000 + 150 Free Spins",
    affiliateLink: "/go/mafia-casino"
  };

  const pros = [
    "Exclusive VIP program with luxury rewards",
    "Wide selection of Plinko games",
    "Fast crypto and fiat withdrawals",
    "24/7 live customer support",
    "Provably fair gaming technology",
    "Weekly cashback offers"
  ];

  const cons = [
    "Limited availability in some regions",
    "Higher minimum deposit than competitors",
    "Verification required for large withdrawals"
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Mafia Casino' }
  ];

  const breadcrumbSchema = [
    { name: 'Home', url: '/' },
    { name: 'Mafia Casino', url: '/mafia-casino' }
  ];

  const reviewSchema = {
    name: "Mafia Casino",
    rating: 5,
    reviewBody: "Mafia Casino delivers a premium gaming experience with its exclusive VIP program, extensive Plinko collection, and fast payouts. With provably fair technology and 24/7 support, it's become a top choice for serious players.",
    datePublished: "2025-11-27",
    dateModified: "2025-11-27",
    author: "Xavier Rudd",
    authorUrl: "https://xavierruddauthor.com/"
  };
</script>

<svelte:head>
  <title>Mafia Casino Review 2025 - Exclusive Plinko Gaming Experience</title>
  <meta name="description" content="Comprehensive Mafia Casino review. Premium casino with exclusive VIP rewards, extensive Plinko games, and fast payouts for crypto and fiat players." />
  <link rel="canonical" href="https://free-plinko-game.github.io/mafia-casino" />
</svelte:head>

<BreadcrumbSchema items={breadcrumbSchema} />
<ReviewSchema casino={reviewSchema} />

<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />

  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-5xl">

      <Breadcrumbs items={breadcrumbs} />

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mb-8 shadow-lg shadow-green-500/10">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <img src={casino.logo} alt={casino.name} class="h-20 object-contain" />
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">{casino.name} Review</h1>
            <div class="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div class="flex">
                {#each Array(5) as _, i}
                  <span class="text-green-400 text-2xl">★</span>
                {/each}
              </div>
              <span class="text-white font-bold text-xl">{casino.rating}/5</span>
            </div>
            <p class="text-gray-300 text-lg">Established {casino.established} • Licensed by {casino.license}</p>
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
          <p class="text-white font-bold text-xl">Instant - 3 days</p>
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
          <h2 class="text-3xl font-bold text-white mb-4">Welcome Bonus & Promotions</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">{casino.welcomeBonus}</p>
            <p class="text-gray-300">Mafia Casino offers one of the most generous welcome packages for new players.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>Mafia Casino's welcome bonus structure is designed to give new players maximum value. The 250% match bonus combined with free spins provides an excellent starting bankroll for exploring their extensive game library.</p>
            <p>The VIP program is where Mafia Casino truly shines. Members enjoy exclusive perks including personal account managers, luxury gifts, faster withdrawals, and invitations to exclusive events. Weekly cashback offers and reload bonuses keep regular players rewarded.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Plinko Games at Mafia Casino</h2>
          <div class="text-gray-300 space-y-3">
            <p>Mafia Casino features an impressive collection of Plinko games from top providers. Their selection includes classic Plinko variants as well as innovative themed versions that add exciting twists to the traditional gameplay.</p>
            <p>All Plinko games at Mafia Casino utilize provably fair technology, ensuring complete transparency and fairness. Players can customize their experience with multiple risk levels and row configurations to match their playing style.</p>
            <p>For more information on playing Plinko, check out our <a href="/how-to-play" class="text-green-400 underline hover:no-underline">complete guide on how to play Plinko</a>.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Payment Methods</h2>
          <div class="text-gray-300 space-y-3">
            <p>Mafia Casino supports both cryptocurrency and traditional payment methods, making it accessible to all players. Crypto deposits and withdrawals are processed quickly, while fiat options include credit cards, e-wallets, and bank transfers.</p>
            <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p class="text-green-400 font-semibold mb-2">⚡ Fast Withdrawals</p>
              <p class="text-sm">Crypto withdrawals can be instant, while fiat withdrawals typically take up to 3 working days.</p>
            </div>
          </div>
        </section>

        <div class="bg-zinc-800 border border-green-500/20 rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-4">Compare More Casinos</h3>
          <p class="text-gray-300 mb-4">Looking for alternatives? Check out our other top-rated Plinko casinos:</p>
          <div class="flex flex-wrap gap-3">
            <a href="/casinochan" class="text-green-400 hover:text-green-300 text-sm font-semibold">CasinoChan Review →</a>
            <a href="/joe-fortune" class="text-green-400 hover:text-green-300 text-sm font-semibold">Joe Fortune Review →</a>
          </div>
          <a href="/best-casinos" class="inline-block mt-4 text-white hover:text-green-400 text-sm font-semibold">View All Casino Comparisons →</a>
        </div>

      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Ready to Play Plinko at Mafia Casino?</h3>
        <p class="text-gray-300 mb-6">Join the exclusive Mafia Casino community and experience premium gaming with fast payouts.</p>
        <a
          href={casino.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 text-lg"
        >
          CLAIM YOUR BONUS NOW →
        </a>
        <p class="text-green-400 text-sm mt-4 font-semibold">{casino.welcomeBonus}</p>
      </div>

      <Author
        name="Xavier Rudd"
        bio="Casino industry expert with over 10 years of experience reviewing online gambling sites. Specializes in Plinko games and crypto casinos."
        website="https://xavierruddauthor.com/"
        lastUpdated="November 27, 2025"
      />

    </div>
  </div>

  <footer class="px-5 pb-4 pt-16 border-t border-green-500/20">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-center justify-center gap-3 p-4">
        <a href="https://github.com/free-plinko-game/free-plinko-game.github.io" target="_blank" rel="noopener" class="text-sm text-gray-400 hover:text-green-400 transition-colors">Plinko Game Repo</a>
        <p class="text-sm text-gray-400">
          Plinko Game Online © 2025
        </p>
        <div class="text-xs text-gray-400 text-center space-y-1 mt-2">
          <p>🔞 18+ Only. Gambling can be addictive. Please play responsibly.</p>
          <p>This site contains affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
      </div>
    </div>
  </footer>
</div>
