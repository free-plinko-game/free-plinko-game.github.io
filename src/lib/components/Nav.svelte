<script lang="ts">
  const navItems = [
    { href: '/', label: 'Play Free' },
    { href: '/best-casinos', label: 'Best Casinos' },
    { href: '/reviews', label: 'Reviews' }
  ];
</script>

<nav class="sticky top-0 z-50 w-full border-b border-green-500/20 bg-black/95 backdrop-blur-sm">
  <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
    <a href="/" class="flex items-center hover:opacity-80 transition-opacity">
      <img src="/logo.svg" alt="The Free Plinko Game" class="h-12" />
    </a>
    
    <div class="flex items-center gap-6">
      {#each navItems as item}
        
          href={item.href}
          class="text-sm font-medium text-gray-300 transition-colors hover:text-green-400"
        >
          {item.label}
        </a>
      {/each}
    </div>
  </div>
</nav>
