<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  
  let loading = false;
  let email = '';
  let password = '';
  let isSignUp = false;
  let user: any = null;
  
  onMount(async () => {
    const { data: { user: currentUser } } = await supabase.auth.getUser();
    user = currentUser;
  });
  
  async function handleAuth() {
    loading = true;

    const redirectUrl = typeof window !== 'undefined'
      ? `${window.location.origin}/auth/callback`
      : '/auth/callback';

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            display_name: email.split('@')[0]
          }
        }
      });
      if (error) alert(error.message);
      else alert('Check your email for confirmation link!');
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) alert(error.message);
      else window.location.href = '/';
    }

    loading = false;
  }
  
  async function signOut() {
    await supabase.auth.signOut();
    window.location.reload();
  }
</script>

{#if user}
  <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-4">
    <p class="text-white mb-2">Logged in as: <strong>{user.email}</strong></p>
    <button 
      on:click={signOut}
      class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
    >
      Sign Out
    </button>
  </div>
{:else}
  <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
    <h2 class="text-2xl font-bold text-white mb-4">
      {isSignUp ? 'Create Account' : 'Sign In'}
    </h2>
    
    <form on:submit|preventDefault={handleAuth} class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          required
          class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
        />
      </div>
      
      <div>
        <label for="password" class="block text-sm font-medium text-gray-300 mb-1">Password</label>
        <input
          id="password"
          type="password"
          bind:value={password}
          required
          class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        class="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg disabled:opacity-50"
      >
        {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
    </form>
    
    <button
      on:click={() => isSignUp = !isSignUp}
      class="mt-4 text-green-400 text-sm hover:underline"
    >
      {isSignUp ? 'Already have an account? Sign in' : 'Need an account? Sign up'}
    </button>
  </div>
{/if}
