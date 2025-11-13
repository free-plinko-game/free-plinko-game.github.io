<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  
  const casino = {
    name: "CasinoChan",
    logo: "https://via.placeholder.com/200x80/1a1a1a/00ff00?text=CasinoChan",
    rating: 4.95,
    established: "2020",
    license: "Curacao",
    minDeposit: "$10",
    welcomeBonus: "$1,500 + 120 Free Spins",
    affiliateLink: "https://www.casinochan.com"
  };
  
  const pros = [
    "Massive game selection (2000+ games)",
    "Weekly reload bonuses and promotions",
    "Instant to 5-day withdrawal processing",
    "Accepts cryptocurrency and fiat",
    "Mobile-optimized platform",
    "VIP program with exclusive rewards"
  ];
  
  const cons = [
    "Variable withdrawal processing times",
    "Wagering requirements can be high",
    "Limited phone support options"
  ];
</script>

<svelte:head>
  <title>CasinoChan Review 2025 - $1,500 + 120 Free Spins Bonus</title>
  <meta name="description" content="CasinoChan review: 2000+ games, generous $1,500 welcome bonus, 120 free spins, and weekly promotions. Multi-currency support with crypto options." />
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
          <h2 class="text-3xl font-bold text-white mb-4">Welcome Bonus & Weekly Promotions</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">{casino.welcomeBonus}</p>
            <p class="text-gray-300">Generous welcome package split across your first four deposits with 120 free spins included.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>CasinoChan welcomes new players with an impressive $1,500 bonus package plus 120 free spins. The bonus is distributed across your first four deposits, giving you flexibility in how you claim the full amount.</p>
            <p>What sets CasinoChan apart is their commitment to ongoing promotions. Weekly reload bonuses, cashback offers, and special tournaments keep the value flowing long after you've claimed your welcome bonus. The Friday reload bonus and weekend cashback are particularly popular among regular players.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Massive Game Selection</h2>
          <div class="text-gray-300 space-y-3">
            <p>With over 2,000 games from leading software providers, CasinoChan offers one of the most comprehensive gaming libraries in the industry. From classic pokies to modern video slots, table games, and specialty games like Plinko, there's something for everyone.</p>
            <p>The Plinko section features multiple variants with different themes and payout structures. The games are optimized for both desktop and mobile play, ensuring a smooth experience regardless of your device.</p>
            <p>CasinoChan regularly adds new titles to keep the gaming experience fresh. The platform's intuitive categorization makes it easy to find your favorite games or discover new ones.</p>
          </div>
        </section>

        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Banking & Payment Methods</h2>
          <div class="text-gray-300 space-y-3">
            <p>CasinoChan supports a wide range of payment methods including credit/debit cards, e-wallets, bank transfers, and cryptocurrencies like Bitcoin and Ethereum. This flexibility makes it accessible to players worldwide.</p>
            <p>Withdrawal processing times vary depending on the method chosen. Cryptocurrency withdrawals are typically processed instantly, while card and bank transfer withdrawals may take 3-5 business days. The minimum withdrawal amount is $20.</p>
            <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p class="text-green-400 font-semibold mb-2">💎 VIP Fast Track</p>
              <p class="text-sm">VIP members enjoy priority withdrawal processing with significantly reduced waiting times and higher withdrawal limits.</p>
            </div>
          </div>
        </section>
      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Ready to Explore 2000+ Games?</h3>
        <p class="text-gray-300 mb-6">Join CasinoChan today and claim your $1,500 welcome bonus plus 120 free spins.</p>
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
