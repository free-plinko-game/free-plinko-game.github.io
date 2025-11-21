<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Auth from '$lib/components/Auth.svelte';
  import { userProgress } from '$lib/stores/userProgress';
  import { userPreferences } from '$lib/stores/userPreferences';
  import { supabase } from '$lib/supabase';
  import { getUserProgress } from '$lib/utils/progress';
  import { onMount } from 'svelte';
  import { LEVEL_REWARDS } from '$lib/constants/levels';

  // Ball colors unlocked at level 2
  const ballColors = [
    { name: 'Classic Red', color: '#ff0000', requiredLevel: 1 },
    { name: 'Electric Blue', color: '#0066ff', requiredLevel: 2 },
    { name: 'Neon Green', color: '#00ff00', requiredLevel: 2 },
    { name: 'Golden Yellow', color: '#ffcc00', requiredLevel: 2 },
    { name: 'Hot Pink', color: '#ff00ff', requiredLevel: 2 },
    { name: 'Deep Purple', color: '#9900ff', requiredLevel: 2 },
  ];

  // Board themes unlocked at level 4
  const boardThemes = [
    { name: 'Classic', value: 'classic', requiredLevel: 1 },
    { name: 'Neon', value: 'neon', requiredLevel: 4 },
    { name: 'Casino', value: 'casino', requiredLevel: 4 },
    { name: 'Matrix', value: 'matrix', requiredLevel: 4 },
  ];

  // Premium themes unlocked at level 13
  const premiumThemes = [
    { name: 'Sunset', value: 'sunset', requiredLevel: 13 },
    { name: 'Ocean', value: 'ocean', requiredLevel: 13 },
    { name: 'Midnight', value: 'midnight', requiredLevel: 13 },
    { name: 'Royal', value: 'royal', requiredLevel: 13 },
  ];

  onMount(async () => {
    // Load user progress if logged in
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const progressData = await getUserProgress(user.id);
      if (progressData) {
        userProgress.set(progressData);
      }
    }
  });

  function isFeatureUnlocked(requiredLevel: number): boolean {
    return $userProgress ? $userProgress.level >= requiredLevel : false;
  }

  function handleBallColorChange(color: string) {
    userPreferences.update(prefs => ({ ...prefs, ballColor: color }));
  }

  function handleThemeChange(theme: string) {
    userPreferences.update(prefs => ({ ...prefs, boardTheme: theme }));
  }

  function handleBallTrailsToggle() {
    userPreferences.update(prefs => ({ ...prefs, ballTrailsEnabled: !prefs.ballTrailsEnabled }));
  }
</script>

<svelte:head>
  <title>Customise - Plinko Game</title>
</svelte:head>

<main>
<div class="relative flex min-h-dvh w-full flex-col bg-black">
  <Nav />

  <div class="flex-1 px-5 py-10">
    <div class="mx-auto max-w-4xl">
      <h1 class="text-4xl font-bold text-white mb-4">Customise Your Game</h1>
      <p class="text-gray-400 mb-8">Unlock new customization options by leveling up!</p>

      {#if !$userProgress}
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
          <p class="text-gray-400 mb-4">Please log in to access customization features</p>
          <div class="max-w-md mx-auto">
            <Auth />
          </div>
        </div>
      {:else}
        <div class="space-y-8">
          <!-- Ball Colors Section -->
          <section class="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-2xl font-bold text-white flex items-center gap-2">
                  🎨 Ball Colors
                </h2>
                <p class="text-sm text-gray-400 mt-1">
                  {isFeatureUnlocked(2) ? 'Choose your ball color' : `Unlock at Level 2 (Current: Level ${$userProgress.level})`}
                </p>
              </div>
              {#if !isFeatureUnlocked(2)}
                <div class="bg-slate-900 border border-yellow-500/30 rounded-lg px-4 py-2">
                  <span class="text-yellow-400 text-sm font-semibold">🔒 Locked</span>
                </div>
              {/if}
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              {#each ballColors as ballColor}
                <button
                  on:click={() => handleBallColorChange(ballColor.color)}
                  disabled={!isFeatureUnlocked(ballColor.requiredLevel)}
                  class="relative bg-slate-900 border-2 rounded-lg p-4 transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 {$userPreferences.ballColor === ballColor.color && isFeatureUnlocked(ballColor.requiredLevel) ? 'border-green-500 ring-2 ring-green-500/50' : 'border-slate-700 hover:border-slate-600'}"
                >
                  <div class="flex flex-col items-center gap-2">
                    <div
                      class="w-12 h-12 rounded-full"
                      style="background-color: {ballColor.color};"
                    ></div>
                    <p class="text-white text-sm font-semibold">{ballColor.name}</p>
                    {#if !isFeatureUnlocked(ballColor.requiredLevel)}
                      <span class="text-xs text-gray-500">Level {ballColor.requiredLevel}</span>
                    {/if}
                  </div>
                  {#if $userPreferences.ballColor === ballColor.color && isFeatureUnlocked(ballColor.requiredLevel)}
                    <div class="absolute top-2 right-2">
                      <span class="text-green-400">✓</span>
                    </div>
                  {/if}
                </button>
              {/each}
            </div>
          </section>

          <!-- Board Themes Section -->
          <section class="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-2xl font-bold text-white flex items-center gap-2">
                  🌈 Board Themes
                </h2>
                <p class="text-sm text-gray-400 mt-1">
                  {isFeatureUnlocked(4) ? 'Choose your board theme' : `Unlock at Level 4 (Current: Level ${$userProgress.level})`}
                </p>
              </div>
              {#if !isFeatureUnlocked(4)}
                <div class="bg-slate-900 border border-yellow-500/30 rounded-lg px-4 py-2">
                  <span class="text-yellow-400 text-sm font-semibold">🔒 Locked</span>
                </div>
              {/if}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              {#each boardThemes as theme}
                <button
                  on:click={() => handleThemeChange(theme.value)}
                  disabled={!isFeatureUnlocked(theme.requiredLevel)}
                  class="bg-slate-900 border-2 rounded-lg p-4 transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 {$userPreferences.boardTheme === theme.value && isFeatureUnlocked(theme.requiredLevel) ? 'border-green-500 ring-2 ring-green-500/50' : 'border-slate-700 hover:border-slate-600'}"
                >
                  <div class="flex items-center justify-between">
                    <p class="text-white text-lg font-semibold">{theme.name}</p>
                    {#if !isFeatureUnlocked(theme.requiredLevel)}
                      <span class="text-xs text-gray-500 bg-slate-800 px-2 py-1 rounded">Level {theme.requiredLevel}</span>
                    {:else if $userPreferences.boardTheme === theme.value}
                      <span class="text-green-400">✓ Active</span>
                    {/if}
                  </div>
                </button>
              {/each}
            </div>
          </section>

          <!-- Premium Themes Section -->
          <section class="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-2xl font-bold text-white flex items-center gap-2">
                  🎭 Premium Themes
                </h2>
                <p class="text-sm text-gray-400 mt-1">
                  {isFeatureUnlocked(13) ? 'Exclusive premium themes' : `Unlock at Level 13 (Current: Level ${$userProgress.level})`}
                </p>
              </div>
              {#if !isFeatureUnlocked(13)}
                <div class="bg-slate-900 border border-yellow-500/30 rounded-lg px-4 py-2">
                  <span class="text-yellow-400 text-sm font-semibold">🔒 Locked</span>
                </div>
              {/if}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              {#each premiumThemes as theme}
                <button
                  on:click={() => handleThemeChange(theme.value)}
                  disabled={!isFeatureUnlocked(theme.requiredLevel)}
                  class="bg-slate-900 border-2 rounded-lg p-4 transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 {$userPreferences.boardTheme === theme.value && isFeatureUnlocked(theme.requiredLevel) ? 'border-green-500 ring-2 ring-green-500/50' : 'border-slate-700 hover:border-slate-600'}"
                >
                  <div class="flex items-center justify-between">
                    <p class="text-white text-lg font-semibold">{theme.name}</p>
                    {#if !isFeatureUnlocked(theme.requiredLevel)}
                      <span class="text-xs text-gray-500 bg-slate-800 px-2 py-1 rounded">Level {theme.requiredLevel}</span>
                    {:else if $userPreferences.boardTheme === theme.value}
                      <span class="text-green-400">✓ Active</span>
                    {/if}
                  </div>
                </button>
              {/each}
            </div>
          </section>

          <!-- Ball Trails Section -->
          <section class="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h2 class="text-2xl font-bold text-white flex items-center gap-2">
                  ✨ Ball Trails
                </h2>
                <p class="text-sm text-gray-400 mt-1">
                  {isFeatureUnlocked(7) ? 'Animated particle trails for your balls' : `Unlock at Level 7 (Current: Level ${$userProgress.level})`}
                </p>
              </div>
              {#if !isFeatureUnlocked(7)}
                <div class="bg-slate-900 border border-yellow-500/30 rounded-lg px-4 py-2">
                  <span class="text-yellow-400 text-sm font-semibold">🔒 Locked</span>
                </div>
              {/if}
            </div>

            <div class="flex items-center justify-between bg-slate-900 border-2 rounded-lg p-4 {isFeatureUnlocked(7) ? 'border-slate-700' : 'border-slate-800 opacity-40'}">
              <div class="flex-1">
                <p class="text-white font-semibold">Enable Ball Trails</p>
                <p class="text-sm text-gray-400">Add glowing particle effects behind falling balls</p>
              </div>
              <button
                on:click={handleBallTrailsToggle}
                disabled={!isFeatureUnlocked(7)}
                class="relative inline-flex h-8 w-14 items-center rounded-full transition-colors disabled:cursor-not-allowed {$userPreferences.ballTrailsEnabled && isFeatureUnlocked(7) ? 'bg-green-500' : 'bg-gray-600'}"
              >
                <span
                  class="inline-block h-6 w-6 transform rounded-full bg-white transition-transform {$userPreferences.ballTrailsEnabled && isFeatureUnlocked(7) ? 'translate-x-7' : 'translate-x-1'}"
                ></span>
              </button>
            </div>
          </section>

          <!-- Coming Soon Features -->
          <section class="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 class="text-2xl font-bold text-white mb-4">🚀 Coming Soon</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {#if LEVEL_REWARDS[9]}
                <div class="bg-slate-900 rounded-lg p-4 opacity-60">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-2xl">{LEVEL_REWARDS[9].emoji}</span>
                    <p class="text-white font-semibold">{LEVEL_REWARDS[9].name}</p>
                  </div>
                  <p class="text-sm text-gray-400">{LEVEL_REWARDS[9].description}</p>
                  <p class="text-xs text-yellow-500 mt-2">Unlock at Level 9</p>
                </div>
              {/if}
            </div>
          </section>
        </div>
      {/if}
    </div>
  </div>
</div>
</main>
