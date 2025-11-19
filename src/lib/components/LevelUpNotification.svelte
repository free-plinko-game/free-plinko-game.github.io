<script lang="ts">
  import { showLevelUpNotification, levelUpData } from '$lib/stores/userProgress';
  import { fade, fly } from 'svelte/transition';
</script>

{#if $showLevelUpNotification && $levelUpData}
  <div
    class="fixed top-20 left-1/2 -translate-x-1/2 z-50"
    transition:fly={{ y: -20, duration: 500 }}
  >
    <div class="bg-gradient-to-r from-yellow-500 to-yellow-600 border-4 border-yellow-300 rounded-2xl p-6 shadow-2xl shadow-yellow-500/50 min-w-[300px]">
      <div class="text-center">
        <div class="text-6xl mb-2">🎉</div>
        <h2 class="text-3xl font-bold text-black mb-2">LEVEL UP!</h2>
        <div class="flex items-center justify-center gap-3 mb-3">
          <div class="bg-black/20 rounded-full w-12 h-12 flex items-center justify-center">
            <span class="text-2xl font-bold text-white">{$levelUpData.oldLevel}</span>
          </div>
          <span class="text-2xl">→</span>
          <div class="bg-black/30 rounded-full w-14 h-14 flex items-center justify-center ring-4 ring-white">
            <span class="text-3xl font-bold text-white">{$levelUpData.newLevel}</span>
          </div>
        </div>
        <p class="text-black font-semibold">You reached Level {$levelUpData.newLevel}!</p>
        <p class="text-black/80 text-sm mt-1">Keep playing to unlock more features</p>
      </div>
    </div>
  </div>

  <!-- Backdrop -->
  <div
    class="fixed inset-0 bg-black/20 z-40"
    transition:fade={{ duration: 200 }}
    on:click={() => showLevelUpNotification.set(false)}
    on:keydown={(e) => e.key === 'Escape' && showLevelUpNotification.set(false)}
    role="button"
    tabindex="0"
    aria-label="Close notification"
  ></div>
{/if}
