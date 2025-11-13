<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  
  const reviews = [
    {
      name: "Stake Casino",
      slug: "stake",
      logo: "/logos/stake.svg",
      rating: 4.8,
      bonus: "100% up to $500 + 200 Free Spins",
      excerpt: "Leading crypto casino with extensive Plinko options, instant withdrawals, and VIP rewards.",
      pros: ["Instant withdrawals", "VIP program", "Crypto-friendly"]
    },
    {
      name: "BC.Game",
      slug: "bc-game",
      logo: "/logos/bcgame.png",
      rating: 4.7,
      bonus: "200% up to $1,000",
      excerpt: "Leading crypto casino with extensive Plinko options and fast withdrawals.",
      pros: ["150+ cryptocurrencies", "Provably fair games", "1-2 hour withdrawals"]
    },
    {
      name: "Joe Fortune Casino",
      slug: "joe-fortune",
      logo: "/logos/joefortune.svg",
      rating: 4.95,
      bonus: "$5,000 + 450 Free Spins",
      excerpt: "Massive welcome package with Wheel of Fortune daily bonuses and excellent pokies selection.",
      pros: ["Huge welcome bonus", "Wheel of Fortune", "Australian-friendly"]
    },
    {
      name: "FairGo Casino",
      slug: "fairgo",
      logo: "/logos/fairgo.svg",
      rating: 4.95,
      bonus: "$1,000 Welcome Package",
      excerpt: "Fair wagering requirements and excellent game variety with multiple payment options.",
      pros: ["Fair terms", "Multiple payment methods", "24/7 support"]
    },
    {
      name: "CasinoChan",
      slug: "casinochan",
      logo: "/logos/casinochan.svg",
      rating: 4.95,
      bonus: "$1,500 + 120 Free Spins",
      excerpt: "Massive game library with 2000+ games and generous weekly promotions.",
      pros: ["2000+ games", "Weekly bonuses", "VIP program"]
    },
    {
      name: "Rollbit",
      slug: "rollbit",
      logo: "/logos/rollbit.svg",
      rating: 4.6,
      bonus: "150% up to $750",
      excerpt: "Innovative Web3 casino with NFT integration and provably fair Plinko games.",
      pros: ["NFT integration", "Provably fair", "Instant payouts"]
    },
    {
      name: "Duelbits",
      slug: "duelbits",
      logo: "/logos/duelbits.svg",
      rating: 4.5,
      bonus: "$100 + 100 Free Spins",
      excerpt: "Multiple game modes with crypto cashback and competitive features.",
      pros: ["Crypto cashback", "Battle modes", "Sports betting"]
    },
    {
      name: "Roobet",
      slug: "roobet",
      logo: "/logos/roobet.svg",
      rating: 4.4,
      bonus: "Welcome package available",
      excerpt: "Original exclusive games with strong social features and streaming community.",
      pros: ["Original games", "Social features", "Instant withdrawals"]
    },
    {
      name: "Betplay",
      slug: "betplay",
      logo: "/logos/betplay.svg",
      rating: 4.3,
      bonus: "100% up to $300",
      excerpt: "Combined casino and sportsbook perfect for players who enjoy both.",
      pros: ["Sports betting", "Live chat", "Flexible bonus"]
    }
  ];
  
  const faqs = [
    {
      question: "How do you review casinos?",
      answer: "Our review process is comprehensive and hands-on. We sign up at each casino, test the games (including Plinko), make deposits and withdrawals, contact customer support, and evaluate the overall user experience. We consider factors like game variety, bonus fairness, payout speed, security, and licensing before recommending any casino."
    },
    {
      question: "Are these casino reviews unbiased?",
      answer: "Yes. While we may earn affiliate commissions from casinos we recommend, this doesn't influence our reviews. We only promote casinos that meet our strict quality standards. If a casino has issues, we clearly highlight them in the 'Cons' section of each review."
    },
    {
      question: "How often do you update these reviews?",
      answer: "We update our reviews regularly to reflect changes in bonuses, terms, game selection, and user feedback. Casino offerings change frequently, so we monitor each site continuously and update reviews as needed to keep information current and accurate."
    },
    {
      question: "What makes a good Plinko casino?",
      answer: "A good Plinko casino offers provably fair games (so you can verify fairness), multiple Plinko variants with different risk levels, fast withdrawals, generous bonuses, and reliable customer support. Crypto casinos often provide the best Plinko experience with instant payouts and lower fees."
    },
    {
      question: "Can I trust the casinos you review?",
      answer: "All casinos we review are licensed by reputable gambling authorities and have established track records of paying out winnings. However, we always recommend reading the full review, checking terms and conditions, and starting with smaller deposits until you're comfortable with a casino."
    }
  ];
</script>

<svelte:head>
  <title>Casino Reviews 2025 - In-Depth Plinko Casino Analysis</title>
  <meta name="description" content="Comprehensive reviews of the best Plinko casinos. Expert analysis of bonuses, payouts, games, and player experience." />
</svelte:head>

<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-5xl">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-white mb-4">Casino Reviews</h1>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          In-depth reviews of the best online casinos for playing Plinko. We test each casino for fairness, payouts, bonuses, and game selection.
        </p>
      </div>
      
      <div class="space-y-6">
        {#each reviews as review}
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition-all">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-shrink-0">
                <img src={review.logo} alt={review.name} class="h-16 object-contain" />
              </div>
              
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h2 class="text-2xl font-bold text-white">{review.name}</h2>
                  <div class="flex items-center gap-1">
                    <span class="text-green-400 text-xl">★</span>
                    <span class="text-white font-bold">{review.rating}</span>
                  </div>
                </div>
                
                <p class="text-green-400 font-semibold mb-3">{review.bonus}</p>
                <p class="text-gray-300 mb-4">{review.excerpt}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each review.pros as pro}
                    <span class="bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full">
                      ✓ {pro}
                    </span>
                  {/each}
                </div>
                
                <a 
                  href="/reviews/{review.slug}" 
                  class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-2 px-6 rounded-lg transition-all"
                >
                  Read Full Review →
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="mt-12 bg-zinc-900 border border-green-500/20 rounded-lg p-8 text-center">
        <h3 class="text-2xl font-bold text-white mb-3">Try Plinko for Free First</h3>
        <p class="text-gray-400 mb-6">Practice with our free Plinko game before playing for real money.</p>
        <a 
          href="/" 
          class="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-3 px-8 rounded-lg transition-all"
        >
          Play Free Plinko
        </a>
      </div>
      
      <div class="mt-12">
        <FAQ {faqs} />
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
