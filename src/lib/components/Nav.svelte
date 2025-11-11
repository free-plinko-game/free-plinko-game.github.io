<script lang="ts">
  import logo from '$lib/assets/logo.svg';
  import { page } from '$app/stores';
  
  $: currentPath = $page.url.pathname;
</script>

<nav class="sticky top-0 z-10 w-full bg-gray-700 px-5 drop-shadow-lg">
  <div class="mx-auto flex h-14 max-w-7xl items-center justify-between">
    <a href="/">
      <img src={logo} alt="Plinko Game Online" class="h-6 sm:h-7" />
    </a>
    
    <div class="flex items-center gap-6">
      <a 
        href="/" 
        class="text-sm font-medium transition {currentPath === '/' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}"
      >
        Play Free
      </a>
      <a 
        href="/best-casinos" 
        class="text-sm font-medium transition {currentPath === '/best-casinos' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}"
      >
        Best Casinos
      </a>
      <a 
        href="/best-casinos" 
        class="hidden sm:block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all"
      >
        Play for Real Money
      </a>
    </div>
  </div>
</nav>
