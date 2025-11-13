<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  
  const casino = {
    name: "Roobet",
    logo: "https://via.placeholder.com/200x80/1a1a1a/00ff00?text=Roobet",
    rating: 4.4,
    established: "2019",
    license: "Curacao",
    minDeposit: "$10",
    welcomeBonus: "Welcome package available",
    affiliateLink: "https://roobet.com"
  };
  
  const pros = [
    "Original exclusive games",
    "Strong social and community features",
    "Instant crypto withdrawals",
    "Sleek, modern interface",
    "Popular with streamers",
    "Regular giveaways and promotions"
  ];
  
  const cons = [
    "Restricted in many jurisdictions",
    "Bonus terms not always transparent",
    "Limited customer support availability"
  ];
</script>

<svelte:head>
  <title>Roobet Review 2025 - Original Games & Social Features</title>
  <meta name="description" content="Roobet review: Popular crypto casino with exclusive original games, social features, and instant withdrawals. Favorite among streaming communities." />
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
          <h2 class="text-3xl font-bold text-white mb-4">Welcome Package & Promotions</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">Welcome Bonuses Available</p>
            <p class="text-gray-300">Roobet offers various welcome promotions that change regularly - check their site for current offers.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>Roobet takes a dynamic approach to bonuses, regularly updating their promotional offers based on seasons, events, and partnerships. While they don't advertise a fixed welcome bonus, new players often receive special offers through promotional codes or during special events.</p>
            <p>The platform is known for generous giveaways and promotions, especially during major sporting events or holidays. Following Roobet's social media channels and signing up for notifications ensures you don't miss out on limited-time offers.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Original Exclusive Games</h2>
          <div class="text-gray-300 space-y-3">
            <p>Roobet's standout feature is its collection of original, exclusive games that you won't find anywhere else. These custom-built games feature unique mechanics and themes, offering something fresh for players tired of standard casino fare.</p>
            <p>The Plinko game at Roobet is beautifully designed with smooth animations and engaging sound effects. The platform's focus on user experience shows in the polish of their game implementations.</p>
            <p>Beyond their originals, Roobet also features popular slots and table games from major providers, ensuring a well-rounded gaming library that appeals to all types of players.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Social Features & Community</h2>
          <div class="text-gray-300 space-y-3">
            <p>Roobet has built a strong reputation in the streaming community, with many popular content creators featuring the platform. This has created a vibrant, engaged community around the brand.</p>
            <p>The platform includes robust chat features where players can interact, share big wins, and participate in chat games for additional rewards. This social aspect transforms gambling from a solitary activity into a community experience.</p>
            <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p class="text-green-400 font-semibold mb-2">🎥 Streamer Favorite</p>
              <p class="text-sm">Roobet is one of the most-streamed crypto casinos, with partnerships and sponsorships across major streaming platforms.</p>
            </div>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Crypto Payments & Instant Cashouts</h2>
          <div class="text-gray-300 space-y-3">
            <p>Roobet operates as a crypto-only casino, accepting Bitcoin, Ethereum, Litecoin, and other popular cryptocurrencies. The platform's crypto-native approach enables instant deposits and withdrawals with minimal fees.</p>
            <p>Withdrawal processing is among the fastest in the industry, with most cashouts completed within minutes. The sleek, modern interface makes managing your crypto wallet easy, even for those new to cryptocurrency.</p>
            <p>Note that Roobet has geographic restrictions and is not available in all countries. Always check if the service is available in your jurisdiction before attempting to sign up.</p>
          </div>
        </section>
      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Experience Roobet's Original Games</h3>
        <p class="text-gray-300 mb-6">Join a vibrant community and play exclusive games you won't find anywhere else.</p>
        <a 
          href={casino.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 text-lg"
        >
          PLAY NOW →
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
