<script lang="ts">
  export let faqs: Array<{
    question: string;
    answer: string;
  }>;
  
  let openIndex: number | null = null;
  
  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<div class="bg-zinc-900 border border-green-500/20 rounded-lg p-8">
  <h2 class="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
  
  <div class="space-y-4">
    {#each faqs as faq, index}
      <div class="border border-green-500/20 rounded-lg overflow-hidden">
        <button
          on:click={() => toggle(index)}
          class="w-full text-left p-4 flex items-center justify-between hover:bg-zinc-800 transition-colors"
        >
          <span class="text-white font-semibold pr-4">{faq.question}</span>
          <span class="text-green-400 text-xl flex-shrink-0">
            {openIndex === index ? '−' : '+'}
          </span>
        </button>
        {#if openIndex === index}
          <div class="p-4 pt-0 text-gray-300 border-t border-green-500/20">
            {@html faq.answer}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
