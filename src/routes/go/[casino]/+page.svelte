<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { supabase } from '$lib/supabase';
  import type { AffiliateLink } from '$lib/supabase';

  // Fallback URLs (used if Supabase fetch fails)
  const fallbackUrls: Record<string, string> = {
    'mafia-casino': 'https://mafiacasino.com',
    'casinochan': 'https://www.casinochan.com',
    'joe-fortune': 'https://www.joefortune.com'
  };

  let status = 'Redirecting...';

  onMount(async () => {
    const casino = $page.params.casino;

    if (!casino || !fallbackUrls[casino]) {
      // Unknown casino, redirect to best-casinos page
      window.location.href = '/best-casinos';
      return;
    }

    try {
      // Fetch affiliate link from Supabase
      const { data, error } = await supabase
        .from('affiliate_links')
        .select('url, fallback_url')
        .eq('slug', casino)
        .single();

      if (error || !data) {
        // Use fallback if Supabase fetch fails
        console.debug('Using fallback URL for', casino);
        window.location.href = fallbackUrls[casino];
        return;
      }

      // Redirect to the tracking URL (or fallback if not set)
      window.location.href = data.url || data.fallback_url || fallbackUrls[casino];
    } catch (err) {
      // On any error, use fallback
      console.debug('Redirect error, using fallback:', err);
      window.location.href = fallbackUrls[casino];
    }
  });
</script>

<svelte:head>
  <title>Redirecting...</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-black flex items-center justify-center">
  <div class="text-center">
    <div class="animate-spin w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
    <p class="text-gray-400">{status}</p>
  </div>
</div>
