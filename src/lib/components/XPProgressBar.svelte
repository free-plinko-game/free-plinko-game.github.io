<script lang="ts">
  import { userProgress } from '$lib/stores/userProgress';
  import { getXPProgress, getXPForNextLevel, getXPForCurrentLevel, getNextReward, getUnlockedRewards } from '$lib/constants/levels';
  import { supabase } from '$lib/supabase';
  import { getUserProgress } from '$lib/utils/progress';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  let progress = 0;
  let xpInCurrentLevel = 0;
  let xpNeededForNextLevel = 0;
  let nextReward: ReturnType<typeof getNextReward> = null;
  let unlockedRewards: ReturnType<typeof getUnlockedRewards> = [];
  let showUnlockedRewards = false;

  $: if ($userProgress) {
    const currentLevelXP = getXPForCurrentLevel($userProgress.level);
    const nextLevelXP = getXPForNextLevel($userProgress.level);
    xpInCurrentLevel = $userProgress.xp - currentLevelXP;
    xpNeededForNextLevel = nextLevelXP - currentLevelXP;
    progress = getXPProgress($userProgress.xp, $userProgress.level);
    nextReward = getNextReward($userProgress.level);
    unlockedRewards = getUnlockedRewards($userProgress.level);
  }

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
</script>

{#if $userProgress}
  <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-4 space-y-2">
    <!-- Level display -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="bg-green-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">
          {$userProgress.level}
        </div>
        <div>
          <p class="text-white font-semibold text-sm">Level {$userProgress.level}</p>
          <p class="text-gray-400 text-xs">{$userProgress.total_balls_dropped} balls dropped</p>
        </div>
      </div>
      <div class="text-right">
        <p class="text-green-400 font-bold text-sm">{xpInCurrentLevel} XP</p>
        <p class="text-gray-500 text-xs">/ {xpNeededForNextLevel} XP</p>
      </div>
    </div>

    <!-- Progress bar -->
    <div class="relative w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
      <div
        class="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500 ease-out"
        style="width: {progress}%"
      >
        <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
      </div>
    </div>

    <!-- Next level info -->
    <p class="text-gray-400 text-xs text-center">
      {xpNeededForNextLevel - xpInCurrentLevel} XP to Level {$userProgress.level + 1}
    </p>

    <!-- Next reward preview -->
    {#if nextReward}
      <div class="mt-2 pt-2 border-t border-green-500/10">
        <p class="text-gray-500 text-xs mb-1">Next unlock:</p>
        <div class="flex items-center gap-2">
          <span class="text-lg">{nextReward.reward.emoji}</span>
          <div class="flex-1">
            <p class="text-white text-xs font-semibold">{nextReward.reward.name}</p>
            <p class="text-gray-400 text-xs">{nextReward.reward.description}</p>
          </div>
        </div>
      </div>
    {:else}
      <div class="mt-2 pt-2 border-t border-green-500/10">
        <p class="text-yellow-400 text-xs font-semibold text-center">🎖️ Max Level Reached!</p>
      </div>
    {/if}

    <!-- Unlocked perks toggle -->
    {#if unlockedRewards.length > 0}
      <div class="mt-2">
        <button
          on:click={() => showUnlockedRewards = !showUnlockedRewards}
          class="w-full text-xs text-green-400 hover:text-green-300 transition-colors text-center py-1"
        >
          {showUnlockedRewards ? '▼' : '▶'} View Unlocked Perks ({unlockedRewards.length})
        </button>

        {#if showUnlockedRewards}
          <div transition:slide={{ duration: 200 }} class="mt-2 space-y-1 max-h-48 overflow-y-auto">
            {#each unlockedRewards as { level, reward }}
              <div class="flex items-start gap-2 bg-zinc-800 rounded p-2">
                <span class="text-sm">{reward.emoji}</span>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <p class="text-white text-xs font-semibold">{reward.name}</p>
                    <span class="text-green-400 text-xs font-bold">Lv.{level}</span>
                  </div>
                  <p class="text-gray-400 text-xs">{reward.description}</p>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>
{/if}
