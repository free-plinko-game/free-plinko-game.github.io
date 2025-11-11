<script lang="ts">
  export let casino: {
    name: string;
    logo: string;
    bonus: string;
    rating: number;
    features: string[];
    affiliateLink: string;
    cta: string;
  };
</script>

<div class="casino-card bg-gray-700 rounded-lg shadow-lg p-6 border border-gray-600 hover:border-cyan-500 transition-all">
  <div class="flex items-center justify-between mb-4">
    <img src={casino.logo} alt={casino.name} class="h-12 object-contain" />
    <div class="flex items-center gap-1">
      <span class="text-yellow-400 text-xl">★</span>
      <span class="font-bold text-white">{casino.rating}</span>
    </div>
  </div>
  
  <h3 class="text-xl font-bold mb-2 text-white">{casino.name}</h3>
  
  <div class="bg-green-900/30 border border-green-700 rounded p-3 mb-4">
    <p class="text-green-400 font-semibold text-sm">🎁 {casino.bonus}</p>
  </div>
  
  <ul class="space-y-2 mb-4">
    {#each casino.features as feature}
      <li class="flex items-center text-sm text-gray-300">
        <span class="text-green-400 mr-2">✓</span>
        {feature}
      </li>
    {/each}
  </ul>
  
  <a 
    href={casino.affiliateLink}
    target="_blank"
    rel="noopener noreferrer sponsored"
    class="block w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-all transform hover:scale-105"
  >
    {casino.cta} →
  </a>
</div>

<style>
  .casino-card {
    transition: all 0.3s ease;
  }
  
  .casino-card:hover {
    transform: translateY(-5px);
  }
</style>
