<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import BreadcrumbSchema from '$lib/components/BreadcrumbSchema.svelte';
  import ReviewSchema from '$lib/components/ReviewSchema.svelte';
  import Author from '$lib/components/Author.svelte';
  
  const casino = {
    name: "Joe Fortune Casino",
    logo: "/logos/joefortune.svg",
    rating: 4.95,
    established: "2012",
    license: "Curaçao",
    minDeposit: "$10",
    welcomeBonus: "$5,000 + 450 Free Spins",
    affiliateLink: "https://www.joefortune.com"
  };
  
  const pros = [
    "Massive $5,000 welcome package",
    "Wheel of Fortune daily bonuses",
    "Excellent pokies selection",
    "Australian-friendly casino",
    "Multiple payment options",
    "Responsive customer support"
  ];
  
  const cons = [
    "Slower withdrawals (from 1 hour)",
    "Higher wagering requirements",
    "Limited crypto options"
  ];
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Joe Fortune Casino' }
  ];

  const breadcrumbSchema = [
    { name: 'Home', url: '/' },
    { name: 'Joe Fortune Casino', url: '/joe-fortune' }
  ];
  
  const reviewSchema = {
    name: "Joe Fortune Casino",
    rating: 4.95,
    reviewBody: "Joe Fortune Casino offers a massive $5,000 welcome package with 450 free spins. Known for exceptional daily bonuses through the Wheel of Fortune feature and excellent pokies selection, it's a top choice for Australian players.",
    datePublished: "2025-11-13",
    dateModified: "2025-11-13",
    author: "Xavier Rudd",
    authorUrl: "https://xavierruddauthor.com/"
  };
</script>

<svelte:head>
  <title>Joe Fortune Casino Review 2025 - $5,000 + 450 Free Spins</title>
  <meta name="description" content="Joe Fortune Casino review: Massive $5,000 welcome bonus, Wheel of Fortune daily bonuses, and excellent game selection. Perfect for Australian players." />
  <link rel="canonical" href="https://free-plinko-game.github.io/joe-fortune" />
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
          <p class="text-white font-bold text-xl">From 1 hour</p>
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
          <h2 class="text-3xl font-bold text-white mb-4">Massive Welcome Package</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">{casino.welcomeBonus}</p>
            <p class="text-gray-300">One of the largest welcome packages in the online casino industry.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>Joe Fortune's welcome package is truly exceptional, offering up to $5,000 in bonuses plus 450 free spins across your first nine deposits. This extended bonus structure means you get value over multiple deposits, not just the first one.</p>
            <p>The package includes a 200% match on your first deposit, followed by generous matches on subsequent deposits. This approach rewards loyal players and gives you more opportunities to explore the casino's extensive game library.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Wheel of Fortune Daily Bonuses</h2>
          <div class="text-gray-300 space-y-3">
            <p>One of Joe Fortune's standout features is the Wheel of Fortune, which gives players daily bonus opportunities. Spin the wheel each day to win free spins, bonus cash, or other rewards. This feature adds an extra layer of excitement and value for regular players.</p>
            <p>The Wheel of Fortune rewards are substantial and can significantly boost your bankroll. It's one of the reasons why Joe Fortune has such high player retention and loyalty.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Game Selection & Plinko</h2>
          <div class="text-gray-300 space-y-3">
            <p>Joe Fortune features an extensive collection of pokies (slots) from top providers, along with table games and specialty games including Plinko. The platform is particularly popular with Australian players due to its game selection and payment options.</p>
            <p>The Plinko implementation offers multiple betting levels and risk configurations, allowing you to customize your gameplay experience. Whether you're a casual player or high roller, there's a Plinko variant for you.</p>
            <p>Learn more about playing Plinko in our <a href="/how-to-play" class="text-green-400 underline hover:no-underline">complete Plinko guide</a>.</p>
          </div>
        </section>
        
        <div class="bg-zinc-800 border border-green-500/20 rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-4">Compare More Casinos</h3>
          <p class="text-gray-300 mb-4">Looking for alternatives? Check out our other top-rated Plinko casinos:</p>
          <div class="flex flex-wrap gap-3">
            <a href="/mafia-casino" class="text-green-400 hover:text-green-300 text-sm font-semibold">Mafia Casino Review →</a>
            <a href="/casinochan" class="text-green-400 hover:text-green-300 text-sm font-semibold">CasinoChan Review →</a>
          </div>
          <a href="/best-casinos" class="inline-block mt-4 text-white hover:text-green-400 text-sm font-semibold">View All Casino Comparisons →</a>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Ready to Claim Your $5,000 Bonus?</h3>
        <p class="text-gray-300 mb-6">Join Joe Fortune and get started with the biggest welcome package online.</p>
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
