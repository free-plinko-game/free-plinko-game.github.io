<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <!-- Preload critical CSS to start downloading immediately -->
  <link rel="preload" href="/_app/immutable/assets/0.6WsFQ-g0.css" as="style" />
  <link rel="preload" href="/_app/immutable/assets/3.BgpoJHDx.css" as="style" />
</svelte:head>

<slot />
