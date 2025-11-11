<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  
  const casino = {
    name: "BC.Game",
    logo: "/logos/bcgame.png",
    rating: 4.7,
    established: "2017",
    license: "Curacao",
    minDeposit: "$5",
    welcomeBonus: "200% up to $1,000",
    affiliateLink: "https://your-affiliate-link.com"
  };
  
  const pros = [
    "Extensive crypto payment options",
    "Provably fair Plinko games",
    "Fast withdrawals (1-2 hours)",
    "No KYC required for crypto",
    "24/7 live chat support",
    "Mobile-optimized platform"
  ];
  
  const cons = [
    "Limited fiat currency options",
    "Curacao license (not UK/EU regulated)",
    "Bonus wagering requirements can be high"
  ];
</script>

<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-5xl">
      
      <!-- Hero Section -->
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

      <!-- Quick Facts -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-4 text-center">
          <p class="text-gray-400 text-sm mb-1">Min Deposit</p>
          <p class="text-white font-bold text-xl">{casino.minDeposit}</p>
        </div>
        <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-4 text-center">
          <p class="text-gray-400 text-sm mb-1">Payout Speed</p>
          <p class="text-white font-bold text-xl">1-2 hours</p>
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

      <!-- Pros and Cons -->
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

      <!-- Main Content Sections -->
      <div class="space-y-8">
        
        <!-- Welcome Bonus -->
        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Welcome Bonus & Promotions</h2>
          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
            <p class="text-green-400 font-bold text-2xl mb-2">{casino.welcomeBonus}</p>
            <p class="text-gray-300">New players can claim a generous welcome package when they sign up.</p>
          </div>
          <div class="text-gray-300 space-y-3">
            <p>BC.Game offers one of the most competitive welcome bonuses in the crypto casino space. The 200% match bonus gives new players significant extra funds to explore the platform's extensive game library, including their popular Plinko variants.</p>
            <p>Beyond the welcome offer, BC.Game provides regular promotions including reload bonuses, cashback offers, and exclusive tournaments. The loyalty program rewards consistent players with increasing benefits and perks.</p>
            <div class="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
              <p class="text-amber-400 font-semibold mb-2">⚠️ Terms & Conditions</p>
              <ul class="text-sm text-gray-400 space-y-1">
                <li>• Minimum deposit: $5</li>
                <li>• Wagering requirements: 35x bonus amount</li>
                <li>• Maximum bet with bonus funds: $5</li>
                <li>• Bonus valid for 30 days</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Plinko Games -->
        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Plinko Games at BC.Game</h2>
          <div class="text-gray-300 space-y-3">
            <p>BC.Game features multiple Plinko variations, making it an excellent choice for Plinko enthusiasts. Their original Plinko game includes customizable risk levels and pin configurations, allowing players to adjust their strategy based on preference.</p>
            <div class="grid md:grid-cols-3 gap-4 my-6">
              <div class="bg-black border border-green-500/20 rounded-lg p-4">
                <h4 class="text-green-400 font-bold mb-2">Classic Plinko</h4>
                <p class="text-sm text-gray-400">Traditional Plinko gameplay with multiple risk settings</p>
              </div>
              <div class="bg-black border border-green-500/20 rounded-lg p-4">
                <h4 class="text-green-400 font-bold mb-2">Turbo Plinko</h4>
                <p class="text-sm text-gray-400">Fast-paced version for quick sessions</p>
              </div>
              <div class="bg-black border border-green-500/20 rounded-lg p-4">
                <h4 class="text-green-400 font-bold mb-2">Provably Fair</h4>
                <p class="text-sm text-gray-400">Verify every game result independently</p>
              </div>
            </div>
            <p>All Plinko games at BC.Game are provably fair, meaning players can verify the randomness and fairness of each drop. This transparency is a significant advantage for players who value trustworthy gaming experiences.</p>
          </div>
        </section>

        <!-- Payment Methods -->
        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Payment Methods</h2>
          <div class="text-gray-300 space-y-3">
            <p>BC.Game specializes in cryptocurrency payments, supporting over 150 different cryptocurrencies including Bitcoin, Ethereum, Litecoin, and many altcoins. This makes it one of the most crypto-friendly casinos available.</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              <div class="bg-black border border-green-500/20 rounded-lg p-3 text-center">
                <p class="text-white font-semibold">Bitcoin</p>
              </div>
              <div class="bg-black border border-green-500/20 rounded-lg p-3 text-center">
                <p class="text-white font-semibold">Ethereum</p>
              </div>
              <div class="bg-black border border-green-500/20 rounded-lg p-3 text-center">
                <p class="text-white font-semibold">Litecoin</p>
              </div>
              <div class="bg-black border border-green-500/20 rounded-lg p-3 text-center">
                <p class="text-white font-semibold">150+ More</p>
              </div>
            </div>
            <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <p class="text-green-400 font-semibold mb-2">⚡ Fast Withdrawals</p>
              <p class="text-sm">Cryptocurrency withdrawals are typically processed within 1-2 hours, with no additional fees charged by BC.Game.</p>
            </div>
          </div>
        </section>

        <!-- Customer Support -->
        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Customer Support</h2>
          <div class="text-gray-300 space-y-3">
            <p>BC.Game provides 24/7 customer support through live chat, ensuring players can get help whenever they need it. The support team is knowledgeable and typically responds within minutes.</p>
            <div class="grid md:grid-cols-3 gap-4 my-6">
              <div class="bg-black border border-green-500/20 rounded-lg p-4 text-center">
                <p class="text-green-400 text-3xl mb-2">💬</p>
                <p class="text-white font-semibold">Live Chat</p>
                <p class="text-sm text-gray-400">24/7 Available</p>
              </div>
              <div class="bg-black border border-green-500/20 rounded-lg p-4 text-center">
                <p class="text-green-400 text-3xl mb-2">📧</p>
                <p class="text-white font-semibold">Email Support</p>
                <p class="text-sm text-gray-400">Response in 24h</p>
              </div>
              <div class="bg-black border border-green-500/20 rounded-lg p-4 text-center">
                <p class="text-green-400 text-3xl mb-2">📚</p>
                <p class="text-white font-semibold">Help Center</p>
                <p class="text-sm text-gray-400">Extensive FAQ</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Security & Licensing -->
        <section class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-white mb-4">Security & Licensing</h2>
          <div class="text-gray-300 space-y-3">
            <p>BC.Game operates under a Curacao gaming license and implements industry-standard security measures including SSL encryption and two-factor authentication. While Curacao licensing is less stringent than UK or Malta licenses, BC.Game has built a solid reputation in the crypto casino community.</p>
            <p>The platform's provably fair system allows players to verify game outcomes, adding an extra layer of trust. All cryptocurrency transactions are secured through blockchain technology, and player funds are kept in segregated wallets.</p>
          </div>
        </section>

      </div>

      <!-- Bottom CTA -->
      <div class="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-8 mt-8 text-center">
        <h3 class="text-3xl font-bold text-white mb-4">Ready to Play Plinko at BC.Game?</h3>
        <p class="text-gray-300 mb-6">Join thousands of players enjoying provably fair Plinko games with fast crypto payouts.</p>
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

      <!-- FAQ -->
      <div class="mt-12 bg-zinc-900 border border-green-500/20 rounded-lg p-8">
        <h2 class="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-green-400 mb-2">Is BC.Game safe and legitimate?</h3>
            <p class="text-gray-300">Yes, BC.Game is a licensed casino operating under Curacao regulations. They use provably fair technology and have built a strong reputation since 2017.</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-green-400 mb-2">Can I play Plinko with cryptocurrency?</h3>
            <p class="text-gray-300">Absolutely! BC.Game specializes in crypto gaming and accepts over 150 different cryptocurrencies for Plinko and other games.</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-green-400 mb-2">How fast are withdrawals at BC.Game?</h3>
            <p class="text-gray-300">Cryptocurrency withdrawals are typically processed within 1-2 hours, making BC.Game one of the fastest payout casinos available.</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-green-400 mb-2">Do I need to verify my identity?</h3>
            <p class="text-gray-300">For cryptocurrency transactions, KYC verification is not required. However, BC.Game may request verification for security purposes or large withdrawals.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  
  <footer class="px-5 pb-4 pt-16 border-t border-green-500/20">
    <div class="mx-auto max-w-7xl">
      <div class="flex items-center justify-center p-4">
        <p class="text-sm text-gray-500">
          Plinko Game Online © 2024
        </p>
      </div>
    </div>
  </footer>
</div>
