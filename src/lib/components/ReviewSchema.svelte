<script lang="ts">
  export let casino: {
    name: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
    dateModified: string;
    author: string;
    authorUrl: string;
  };
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": casino.name,
      "image": `https://free-plinko-game.github.io/logos/${casino.name.toLowerCase().replace(/\s+/g, '')}.svg`
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": casino.rating,
      "bestRating": 5,
      "worstRating": 0
    },
    "author": {
      "@type": "Person",
      "name": casino.author,
      "url": casino.authorUrl
    },
    "reviewBody": casino.reviewBody,
    "datePublished": casino.datePublished,
    "dateModified": casino.dateModified,
    "publisher": {
      "@type": "Organization",
      "name": "Free Plinko Game"
    }
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
</svelte:head>
