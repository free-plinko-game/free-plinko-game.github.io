<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  
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
    "Huge selection of pokies and table games",
    "Multiple payment methods accepted",
    "Fair wagering requirements",
    "Australian player-friendly",
    "24/7 customer support",
    "Regular tournaments and promotions"
  ];
  
  const cons = [
    "Slower withdrawal processing (2-3 days)",
    "Geographic restrictions in some countries",
    "Higher minimum withdrawal amounts"
  ];
</script>

<svelte:head>
  <title>FairGo Casino Review 2025 - $1,000 Welcome Bonus</title>
  <meta name="description" content="FairGo Casino review: Fair play, excellent game variety, and a generous $1,000 welcome package. Australian-friendly with multiple payment options." />
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
          <h2 class="text-3xl font-bold text-white mb-4">Welcome Bonus & Promotions</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">{casino.welcomeBonus}</p>
            <p class="text-gray-300">A solid welcome package with fair wagering requirements and genuine value.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>FairGo Casino lives up to its name with transparent bonus terms and fair wagering requirements. The $1,000 welcome package is spread across your first five deposits, allowing you to claim bonuses at your own pace.</p>
            <p>Regular players benefit from weekly reload bonuses, cashback offers, and exclusive tournaments. The loyalty program rewards consistent play with points that can be exchanged for bonus credits and other perks.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Game Library & Plinko</h2>
          <div class="text-gray-300 space-y-3">
            <p>FairGo boasts an impressive game library with hundreds of pokies, table games, and specialty games including Plinko. The platform partners with leading software providers to ensure high-quality gaming experiences across all titles.</p>
            <p>The Plinko offering includes multiple variants with different risk levels and payout structures. Whether you prefer low-risk consistent wins or high-risk, high-reward gameplay, FairGo's Plinko games cater to all playing styles.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Payment Options</h2>
          <div class="text-gray-300 space-y-3">
            <p>FairGo accepts a wide range of payment methods including credit/debit cards, e-wallets, cryptocurrency, and bank transfers. This flexibility makes it easy for players from different regions to fund their accounts.</p>
            <p>While withdrawals take 2-3 days to process, the casino has a solid reputation for paying out winnings reliably. VIP players enjoy faster processing times and higher withdrawal limits.</p>
          </div>
        </section>
      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Start Playing at FairGo Casino</h3>
        <p class="text-gray-300 mb-6">Join a casino that prioritizes fair play and player satisfaction with excellent game variety.</p>
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
