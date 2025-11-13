<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import BreadcrumbSchema from '$lib/components/BreadcrumbSchema.svelte';
  import ReviewSchema from '$lib/components/ReviewSchema.svelte';
  import Author from '$lib/components/Author.svelte';
  
  const casino = {
    name: "Roobet",
    logo: "/logos/roobet.svg",
    rating: 4.4,
    established: "2019",
    license: "Curacao",
    minDeposit: "$10",
    welcomeBonus: "Welcome package available",
    affiliateLink: "https://roobet.com"
  };
  
  const pros = [
    "Original exclusive games",
    "Strong social features",
    "Active streaming community",
    "Instant crypto withdrawals",
    "Clean modern interface",
    "Regular tournaments"
  ];
  
  const cons = [
    "Limited bonus information",
    "Crypto-only platform",
    "Not available in all regions"
  ];
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Roobet' }
  ];
  
  const breadcrumbSchema = [
    { name: 'Home', url: '/' },
    { name: 'Reviews', url: '/reviews' },
    { name: 'Roobet', url: '/reviews/roobet' }
  ];
  
  const reviewSchema = {
    name: "Roobet",
    rating: 4.4,
    reviewBody: "Roobet offers original exclusive games and strong social features with an active streaming community. Instant crypto withdrawals and a clean interface make it popular among crypto casino players.",
    datePublished: "2025-11-13",
    dateModified: "2025-11-13",
    author: "Xavier Rudd",
    authorUrl: "https://xavierruddauthor.com/"
  };
</script>

<svelte:head>
  <title>Roobet Review 2025 - Original Games & Social Features</title>
  <meta name="description" content="Roobet review: Original exclusive games, strong social features, and instant crypto withdrawals. Popular streaming community and clean interface." />
  <link rel="canonical" href="https://free-plinko-game.github.io/reviews/roobet" />
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
          <h2 class="text-3xl font-bold text-white mb-4">Original Exclusive Games</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">Unique Gaming Experience</p>
            <p class="text-gray-300">Play games you won't find anywhere else.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>Roobet's standout feature is its collection of original, exclusive games developed specifically for the platform. These unique titles offer fresh gaming experiences you won't find at other casinos, setting Roobet apart from competitors who rely solely on third-party providers.</p>
            <p>The platform combines these exclusives with popular titles from established providers, giving you the best of both worlds - innovative new games and trusted classics like Plinko.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Social Features & Streaming</h2>
          <div class="text-gray-300 space-y-3">
            <p>Roobet has cultivated one of the most active streaming communities in crypto gambling. Popular streamers regularly broadcast their gameplay, creating an engaging social atmosphere. You can watch, learn strategies, and feel part of a community rather than gambling in isolation.</p>
            <p>The platform's social features allow you to interact with other players, share big wins, and participate in community events and tournaments. This social element adds entertainment value beyond just the games themselves.</p>
            <p>Learn the basics with our <a href="/how-to-play" class="text-green-400 hover:underline">Plinko guide</a>.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Crypto Payments & Interface</h2>
          <div class="text-gray-300 space-y-3">
            <p>Roobet operates as a crypto-only casino, accepting Bitcoin, Ethereum, and Litecoin. The instant withdrawal system means you can cash out your winnings immediately without waiting for banking delays.</p>
            <p>The platform features a clean, modern interface that's intuitive to navigate. Whether you're a crypto casino veteran or newcomer, you'll find the layout straightforward and user-friendly.</p>
          </div>
        </section>
        
        <div class="bg-zinc-800 border border-green-500/20 rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-4">Compare More Casinos</h3>
          <p class="text-gray-300 mb-4">Looking for alternatives? Check out our other top-rated Plinko casinos:</p>
          <div class="flex flex-wrap gap-3">
            <a href="/reviews/stake" class="text-green-400 hover:text-green-300 text-sm font-semibold">Stake Review →</a>
            <a href="/reviews/duelbits" class="text-green-400 hover:text-green-300 text-sm font-semibold">Duelbits Review →</a>
            <a href="/reviews/betplay" class="text-green-400 hover:text-green-300 text-sm font-semibold">Betplay Review →</a>
          </div>
          <a href="/best-casinos" class="inline-block mt-4 text-white hover:text-green-400 text-sm font-semibold">View All Casino Comparisons →</a>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Ready for Original Games?</h3>
        <p class="text-gray-300 mb-6">Join Roobet for exclusive games and an active streaming community.</p>
        <a 
          href={casino.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 text-lg"
        >
          START PLAYING →
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
