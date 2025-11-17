<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  
  let loading = true;
  let saving = false;
  let user: any = null;
  let displayName = '';
  let newPassword = '';
  let confirmPassword = '';
  
  onMount(async () => {
    const { data: { user: currentUser } } = await supabase.auth.getUser();
    user = currentUser;
    
    if (user) {
      displayName = user.user_metadata?.display_name || user.email?.split('@')[0] || '';
    }
    
    loading = false;
  });
  
  async function updateProfile() {
    saving = true;
    
    const { error } = await supabase.auth.updateUser({
      data: { display_name: displayName }
    });
    
    if (error) {
      alert('Error updating profile: ' + error.message);
    } else {
      alert('Profile updated! ✅');
    }
    
    saving = false;
  }
  
  async function changePassword() {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (newPassword.length < 6) {
      alert('Password must be at least 6 characters!');
      return;
    }
    
    saving = true;
    
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });
    
    if (error) {
      alert('Error changing password: ' + error.message);
    } else {
      alert('Password changed! ✅');
      newPassword = '';
      confirmPassword = '';
    }
    
    saving = false;
  }
  
  async function signOut() {
    await supabase.auth.signOut();
    window.location.href = '/';
  }
</script>

<svelte:head>
  <title>Profile - Plinko Dashboard</title>
</svelte:head>

<main>
<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />
  
  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-4xl">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-4xl font-bold text-white">Profile Settings</h1>
        <a href="/dashboard" class="text-green-400 hover:text-green-300 text-sm">← Back to Dashboard</a>
      </div>
      
      {#if loading}
        <p class="text-gray-400">Loading your profile...</p>
      {:else if !user}
        <p class="text-gray-400">Please <a href="/dashboard" class="text-green-400 hover:underline">sign in</a> to view profile.</p>
      {:else}
        <div class="space-y-6">
          <!-- Account Info -->
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
            <h2 class="text-2xl font-bold text-white mb-4">Account Information</h2>
            <div class="space-y-4">
              <div>
                <p class="text-sm text-gray-400 mb-1">Email</p>
                <p class="text-white font-medium">{user.email}</p>
              </div>
              <div>
                <p class="text-sm text-gray-400 mb-1">Account Created</p>
                <p class="text-white font-medium">
                  {new Date(user.created_at).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
          
          <!-- Update Display Name -->
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
            <h2 class="text-2xl font-bold text-white mb-4">Display Name</h2>
            <form on:submit|preventDefault={updateProfile} class="space-y-4">
              <div>
                <label for="displayName" class="block text-sm text-gray-400 mb-1">
                  This name will appear on the leaderboard
                </label>
                <input
                  id="displayName"
                  type="text"
                  bind:value={displayName}
                  required
                  class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
              <button
                type="submit"
                disabled={saving}
                class="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : 'Update Name'}
              </button>
            </form>
          </div>
          
          <!-- Change Password -->
          <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-6">
            <h2 class="text-2xl font-bold text-white mb-4">Change Password</h2>
            <form on:submit|preventDefault={changePassword} class="space-y-4">
              <div>
                <label for="newPassword" class="block text-sm text-gray-400 mb-1">New Password</label>
                <input
                  id="newPassword"
                  type="password"
                  bind:value={newPassword}
                  required
                  minlength="6"
                  class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
              <div>
                <label for="confirmPassword" class="block text-sm text-gray-400 mb-1">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  bind:value={confirmPassword}
                  required
                  minlength="6"
                  class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
              <button
                type="submit"
                disabled={saving}
                class="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Changing...' : 'Change Password'}
              </button>
            </form>
          </div>
          
          <!-- Sign Out -->
          <div class="bg-zinc-900 border border-red-500/20 rounded-lg p-6">
            <h2 class="text-2xl font-bold text-white mb-4">Sign Out</h2>
            <p class="text-gray-400 mb-4">Sign out of your account on this device.</p>
            <button
              on:click={signOut}
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
</main>
