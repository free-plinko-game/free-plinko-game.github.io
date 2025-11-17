<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Auth from '$lib/components/Auth.svelte';
  import SessionLogger from '$lib/components/SessionLogger.svelte';
  import Leaderboard from '$lib/components/Leaderboard.svelte';
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  
  let user: any = null;
  
  onMount(async () => {
    const { data: { user: currentUser } } = await supabase.auth.getUser();
    user = currentUser;
  });
</script>

<svelte:head>
  <title>Dashboard - Track Your Plinko Wins</title>
</svelte:head>

<main>
<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-6xl">
      <h1 class="text-4xl font-bold text-white mb-8">Dashboard</h1>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-8">
          <Auth />
          {#if user}
            <SessionLogger />
          {/if}
        </div>
        
        <div>
          <Leaderboard />
        </div>
      </div>
    </div>
  </div>
</div>
</main>
