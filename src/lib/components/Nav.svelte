<script lang="ts">
  let isGuidesOpen = false;
  let isMobileMenuOpen = false;

  function toggleGuides() {
    isGuidesOpen = !isGuidesOpen;
  }

  function closeGuides() {
    isGuidesOpen = false;
  }
</script>

<nav class="sticky top-0 z-50 w-full border-b border-green-500/20 bg-black/95 backdrop-blur-sm">
  <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
    <a href="/" class="flex items-center hover:opacity-80 transition-opacity">
      <img src="/logo.svg" alt="The Free Plinko Game" width="280" height="60" class="h-12" />
    </a>
    
    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-6">
      <a href="/" class="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">Play Free</a>
      
      <!-- Guides Dropdown -->
      <div class="relative">
        <button 
          on:click={toggleGuides}
          on:blur={() => setTimeout(closeGuides, 200)}
          class="flex items-center gap-1 text-sm font-medium text-gray-300 transition-colors hover:text-green-400"
        >
          Guides
          <svg class="w-4 h-4 transition-transform" class:rotate-180={isGuidesOpen} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {#if isGuidesOpen}
          <div class="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-green-500/20 rounded-lg shadow-lg shadow-green-500/10 py-2">
            <a href="/how-to-play" class="block px-4 py-2 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-colors">
              How to Play
            </a>
            <a href="/plinko-strategy" class="block px-4 py-2 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-colors">
              Strategy Guide
            </a>
            <a href="/plinko-vs-slots" class="block px-4 py-2 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-colors">
              Plinko vs Slots
            </a>
          </div>
        {/if}
      </div>
      
      <a href="/best-casinos" class="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">Best Casinos</a>
      <a href="/reviews" class="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">Reviews</a>
    </div>

    <!-- Mobile Menu Button -->
    <button 
      on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
      class="md:hidden text-gray-300 hover:text-green-400"
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if isMobileMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if isMobileMenuOpen}
    <div class="md:hidden border-t border-green-500/20 bg-black/95 backdrop-blur-sm">
      <div class="px-5 py-4 space-y-3">
        <a href="/" class="block text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
          Play Free
        </a>
        
        <!-- Mobile Guides Section -->
        <div>
          <button 
            on:click={toggleGuides}
            class="flex items-center justify-between w-full text-sm font-medium text-gray-300 hover:text-green-400 transition-colors"
          >
            Guides
            <svg class="w-4 h-4 transition-transform" class:rotate-180={isGuidesOpen} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {#if isGuidesOpen}
            <div class="mt-2 ml-4 space-y-2">
              <a href="/how-to-play" class="block text-sm text-gray-400 hover:text-green-400 transition-colors">
                How to Play
              </a>
              <a href="/plinko-strategy" class="block text-sm text-gray-400 hover:text-green-400 transition-colors">
                Strategy Guide
              </a>
              <a href="/plinko-vs-slots" class="block text-sm text-gray-400 hover:text-green-400 transition-colors">
                Plinko vs Slots
              </a>
            </div>
          {/if}
        </div>
        
        <a href="/best-casinos" class="block text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
          Best Casinos
        </a>
        <a href="/reviews" class="block text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
          Reviews
        </a>
      </div>
    </div>
  {/if}
</nav>
