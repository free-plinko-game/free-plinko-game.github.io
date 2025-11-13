<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import BreadcrumbSchema from '$lib/components/BreadcrumbSchema.svelte';
  import ReviewSchema from '$lib/components/ReviewSchema.svelte';
  import Author from '$lib/components/Author.svelte';
  
  const casino = {
    name: "FairGo Casino",
    logo: "/logos/fairgo.svg",
    rating: 4.95,
    established: "2017",
    license: "Curacao",
    minDeposit: "$10",
    welcomeBonus: "$1,000 Welcome Package",
    affiliateLink: "https://www.fairgo.com"
  };
  
  const pros = [
    "Fair wagering requirements",
    "Excellent game variety",
    "Multiple payment options",
    "24/7 customer support",
    "Australian-friendly",
    "Regular promotions"
  ];
  
  const cons = [
    "Slower withdrawal times (2-3 days)",
    "Limited crypto options",
    "Smaller maximum bet limits"
  ];
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'FairGo Casino' }
  ];
  
  const breadcrumbSchema = [
    { name: 'Home', url: '/' },
    { name: 'Reviews', url: '/reviews' },
    { name: 'FairGo Casino', url: '/reviews/fairgo' }
  ];
  
  const reviewSchema = {
    name: "FairGo Casino",
    rating: 4.95,
    reviewBody: "FairGo Casino stands out for fair wagering requirements and excellent game variety. With multiple payment options, 24/7 support, and a welcoming approach to Australian players, it's a solid choice for online gambling.",
    datePublished: "2025-11-13",
    dateModified: "2025-11-13",
    author: "Xavier Rudd",
    authorUrl: "https://xavierruddauthor.com/"
  };
</script>

<svelte:head>
  <title>FairGo Casino Review 2025 - $1,000 Welcome Bonus</title>
  <meta name="description" content="FairGo Casino review: Fair wagering requirements, excellent game variety, and multiple payment options. Perfect for Australian players." />
  <link rel="canonical" href="https://free-plinko-game.github.io/reviews/fairgo" />
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
          <img src={casino.logo} alt={casino.name} width="200" height="80" class="h-20 object-contain" />
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">{casino.name} Review</h1>
            <div class="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div class="flex">
                {#each Array(5) as _}
                  <span class="text-green-400 text-2xl">★</span>
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
          <p class="text-white font-bold text-xl">2-3 days</p>
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
          <h2 class="text-3xl font-bold text-white mb-4">Welcome Bonus & Fair Terms</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">{casino.welcomeBonus}</p>
            <p class="text-gray-300">Reasonable wagering requirements make this bonus genuinely achievable.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>FairGo Casino lives up to its name with genuinely fair bonus terms. Unlike many casinos with impossible 40x-60x wagering requirements, FairGo keeps things reasonable, making it actually possible to clear bonuses and withdraw winnings.</p>
            <p>The $1,000 welcome package is spread across multiple deposits, giving you sustained value rather than a one-time boost. Regular players also benefit from ongoing promotions and a loyalty program.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Game Variety & Plinko</h2>
          <div class="text-gray-300 space-y-3">
            <p>FairGo offers a healthy mix of pokies, table games, and specialty games including Plinko. The platform partners with reputable game providers to ensure quality and fairness across all offerings.</p>
            <p>The Plinko implementation features adjustable settings and reasonable betting limits, making it accessible to both casual players and those looking for bigger action.</p>
            <p>Learn the basics with our <a href="/how-to-play" class="text-green-400 hover:underline">complete Plinko guide</a>.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Payment Options & Support</h2>
          <div class="text-gray-300 space-y-3">
            <p>FairGo accepts multiple payment methods including credit cards, e-wallets, and some cryptocurrency options. While not as crypto-focused as platforms like Stake or BC.Game, the variety ensures most players can find a suitable option.</p>
            <p>Withdrawals typically process within 2-3 business days, which is reasonable for traditional payment methods. The 24/7 customer support team is responsive and helpful, available via live chat and email.</p>
          </div>
        </section>
        
        <div class="bg-zinc-800 border border-green-500/20 rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-4">Compare More Casinos</h3>
          <p class="text-gray-300 mb-4">Looking for alternatives? Check out our other top-rated Plinko casinos:</p>
          <div class="flex flex-wrap gap-3">
            <a href="/reviews/stake" class="text-green-400 hover:text-green-300 text-sm font-semibold">Stake Review →</a>
            <a href="/reviews/joe-fortune" class="text-green-400 hover:text-green-300 text-sm font-semibold">Joe Fortune Review →</a>
            <a href="/reviews/casinochan" class="text-green-400 hover:text-green-300 text-sm font-semibold">CasinoChan Review →</a>
          </div>
          <a href="/best-casinos" class="inline-block mt-4 text-white hover:text-green-400 text-sm font-semibold">View All Casino Comparisons →</a>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Ready to Play at FairGo?</h3>
        <p class="text-gray-300 mb-6">Join FairGo Casino for genuinely fair gaming with reasonable terms and great support.</p>
        <a 
          href={casino.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 text-lg"
        >
          CLAIM BONUS NOW →
        </a>
      </div>
      
      <Author 
        name="Xavier Rudd" 
        bio="Casino industry expert with over 10 years of experience reviewing online gambling sites. Specializes in Plinko games and crypto casinos."
        website="https://xavierruddauthor.com/"
        lastUpdated="November 13, 2025"
      />

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
