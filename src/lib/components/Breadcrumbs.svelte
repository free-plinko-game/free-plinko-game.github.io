<script lang="ts">
  export let items: Array<{
    label: string;
    href?: string;
  }>;
</script>

<nav aria-label="Breadcrumb" class="mb-6">
  <ol class="flex items-center gap-2 text-sm">
    {#each items as item, i}
      {#if i > 0}
        <li class="text-gray-500">/</li>
      {/if}
      <li>
        {#if item.href}
          <a href={item.href} class="text-gray-400 hover:text-green-400 transition-colors">
            {item.label}
          </a>
        {:else}
          <span class="text-white font-semibold">{item.label}</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
