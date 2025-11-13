<script lang="ts">
  export let name: string = "Xavier Rudd";
  export let bio: string = "Casino industry expert with over 10 years of experience reviewing online gambling sites. Specializes in Plinko games and crypto casinos.";
  export let website: string = "https://xavierruddauthor.com/";
  export let lastUpdated: string;
</script>

<div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6 mt-8">
  <div class="flex items-start gap-4">
    <div class="flex-shrink-0">
      <div class="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center">
        <span class="text-green-400 text-2xl font-bold">{name.split(' ').map(n => n[0]).join('')}</span>
      </div>
    </div>
    <div class="flex-1">
      <div class="flex items-center gap-3 mb-2">
        <h3 class="text-white font-bold text-lg">Written by {name}</h3>
        {#if lastUpdated}
          <span class="text-gray-400 text-sm">• Updated {lastUpdated}</span>
        {/if}
      </div>
      <p class="text-gray-300 text-sm mb-3">{bio}</p>
      <a href={website} target="_blank" rel="author noopener" class="text-green-400 hover:text-green-300 text-sm font-semibold">
        Visit Author Website →
      </a>
    </div>
  </div>
</div>
