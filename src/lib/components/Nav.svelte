<script lang="ts">
  import logo from '$lib/assets/logo.svg';
  import { page } from '$app/stores';
  
  $: currentPath = $page.url.pathname;
</script>

<nav class="sticky top-0 z-10 w-full bg-black border-b border-green-500/20 px-5 drop-shadow-lg">
  <div class="mx-auto flex h-14 max-w-7xl items-center justify-between">
    <a href="/">
      <img src={logo} alt="Plinko Game Online" class="h-6 sm:h-7" />
    </a>
    
    <div class="flex items-center gap-6">
      <a 
        href="/" 
        class="text-sm font-medium transition {currentPath === '/' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'}"
      >
        Play Free
      </a>
      <a 
        href="/best-casinos" 
        class="text-sm font-medium transition {currentPath === '/best-casinos' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'}"
      >
        Best Casinos
      </a>
      <a 
        href="/reviews" 
        class="text-sm font-medium transition {currentPath.startsWith('/reviews') ? 'text-green-400' : 'text-gray-400 hover:text-green-400'}"
      >
        Reviews
      </a>
      <a 
        href="/best-casinos" 
        class="hidden sm:block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black font-bold py-2 px-4 rounded-lg text-sm transition-all shadow-lg shadow-green-500/50"
      >
        Play for Real Money
      </a>
    </div>
  </div>
</nav>
