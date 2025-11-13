<script lang="ts">
  export let items: Array<{
    name: string;
    url?: string;
  }>;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": `https://free-plinko-game.github.io${item.url}` })
    }))
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
</svelte:head>
