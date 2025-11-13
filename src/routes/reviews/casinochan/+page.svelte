<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import BreadcrumbSchema from '$lib/components/BreadcrumbSchema.svelte';
  import ReviewSchema from '$lib/components/ReviewSchema.svelte';
  import Author from '$lib/components/Author.svelte';
  
  const casino = {
    name: "CasinoChan",
    logo: "/logos/casinochan.svg",
    rating: 4.95,
    established: "2020",
    license: "Curacao",
    minDeposit: "$10",
    welcomeBonus: "$1,500 + 120 Free Spins",
    affiliateLink: "https://www.casinochan.com"
  };
  
  const pros = [
    "Massive game library (2000+ games)",
    "Generous weekly promotions",
    "VIP program with exclusive benefits",
    "Multiple software providers",
    "Mobile-optimized platform",
    "Live dealer games available"
  ];
  
  const cons = [
    "Withdrawal times vary (instant to 5 days)",
    "Wagering requirements can be high",
    "Region restrictions apply"
  ];
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'CasinoChan' }
  ];
  
  const breadcrumbSchema = [
    { name: 'Home', url: '/' },
    { name: 'Reviews', url: '/reviews' },
    { name: 'CasinoChan', url: '/reviews/casinochan' }
  ];
  
  const reviewSchema = {
    name: "CasinoChan",
    rating: 4.95,
    reviewBody: "CasinoChan impresses with a massive library of 2000+ games from top providers. Weekly promotions and a generous VIP program keep players engaged, while the mobile-optimized platform ensures gaming on the go.",
    datePublished: "2025-11-13",
    dateModified: "2025-11-13",
    author: "Xavier Rudd",
    authorUrl: "https://xavierruddauthor.com/"
  };
</script>

<svelte:head>
  <title>CasinoChan Review 2025 - $1,500 + 120 Free Spins</title>
  <meta name="description" content="CasinoChan review: 2000+ games, generous weekly promotions, and VIP rewards. Massive game library with top software providers." />
  <link rel="canonical" href="https://free-plinko-game.github.io/reviews/casinochan" />
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
          <p class="text-white font-bold text-xl">Instant-5d</p>
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
          <h2 class="text-3xl font-bold text-white mb-4">Welcome Package & Promotions</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">{casino.welcomeBonus}</p>
            <p class="text-gray-300">Generous welcome package plus ongoing weekly promotions.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>CasinoChan's welcome bonus of $1,500 plus 120 free spins provides excellent value for new players. The bonus is split across your first deposits, giving you sustained playing power as you explore the massive game library.</p>
            <p>Weekly promotions keep things interesting for regular players, with reload bonuses, free spins, and special tournament events. The VIP program offers increasing benefits as you play more, including personalized bonuses and faster withdrawals.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Massive Game Library</h2>
          <div class="text-gray-300 space-y-3">
            <p>With over 2,000 games from top software providers, CasinoChan offers one of the largest game selections in the online casino industry. From classic slots to modern video slots, table games, live dealer games, and specialty games like Plinko, there's something for every type of player.</p>
            <p>The platform partners with leading providers including NetEnt, Microgaming, Play'n GO, Evolution Gaming, and many more, ensuring high-quality graphics, smooth gameplay, and fair outcomes.</p>
            <p>New to Plinko? Check out our <a href="/how-to-play" class="text-green-400 underline hover:no-underline">beginner's guide</a>.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Payment Methods & Mobile Gaming</h2>
          <div class="text-gray-300 space-y-3">
            <p>CasinoChan supports a wide range of payment methods including credit/debit cards, e-wallets, bank transfers, and cryptocurrency options. Withdrawal times vary depending on the method chosen, ranging from instant (crypto) to 5 business days (bank transfers).</p>
            <p>The platform is fully optimized for mobile devices, allowing you to play your favorite games including Plinko on smartphones and tablets without any loss of functionality or quality.</p>
          </div>
        </section>
        
        <div class="bg-zinc-800 border border-green-500/20 rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-4">Compare More Casinos</h3>
          <p class="text-gray-300 mb-4">Looking for alternatives? Check out our other top-rated Plinko casinos:</p>
          <div class="flex flex-wrap gap-3">
            <a href="/reviews/stake" class="text-green-400 hover:text-green-300 text-sm font-semibold">Stake Review →</a>
            <a href="/reviews/bc-game" class="text-green-400 hover:text-green-300 text-sm font-semibold">BC.Game Review →</a>
            <a href="/reviews/rollbit" class="text-green-400 hover:text-green-300 text-sm font-semibold">Rollbit Review →</a>
          </div>
          <a href="/best-casinos" class="inline-block mt-4 text-white hover:text-green-400 text-sm font-semibold">View All Casino Comparisons →</a>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Ready to Explore 2000+ Games?</h3>
        <p class="text-gray-300 mb-6">Join CasinoChan for the largest game selection and generous promotions.</p>
        <a 
          href={casino.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 text-lg"
        >
          CLAIM YOUR BONUS →
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
