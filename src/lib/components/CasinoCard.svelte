<script lang="ts">
  export let casino: {
    name: string;
    logo: string;
    bonus: string;
    rating: number;
    features: string[];
    link: string;
  };
</script>

<div class="flex flex-col rounded-lg border border-green-500/20 bg-zinc-900 p-6 shadow-lg shadow-green-500/5 transition-all hover:border-green-500/50">
  <div class="mb-4 flex items-center justify-between">
    <img src={casino.logo} alt="{casino.name} logo" width="200" height="80" class="h-12 object-contain" />
    <div class="flex items-center gap-1">
      <span class="text-xl text-green-400">★</span>
      <span class="font-bold text-white">{casino.rating}</span>
    </div>
  </div>

  <h3 class="mb-2 text-xl font-bold text-white">{casino.name}</h3>
  <p class="mb-4 font-semibold text-green-400">{casino.bonus}</p>

  <ul class="mb-4 space-y-2">
    {#each casino.features as feature}
      <li class="flex items-center text-sm text-gray-300">
        <span class="mr-2 text-green-400">✓</span>
        {feature}
      </li>
    {/each}
  </ul>

  <a 
    href={casino.link}
    target="_blank"
    rel="noopener noreferrer sponsored"
    class="mt-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-3 px-6 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
  >
    {casino.name === 'Stake Casino' ? 'Play Now' : casino.name === 'BC.Game' ? 'Claim Bonus' : 'Join Now'} →
  </a>
</div>
