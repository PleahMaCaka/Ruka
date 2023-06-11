<script lang="ts">
  import AddressBar from "./lib/components/AddressBar.svelte";
</script>

<main class="container">
  <AddressBar/>
</main>

<style>
  #title {
    color: #747bff;
    display: inline-block;
  }

  #title2 {
    display: inline-block;
  }

  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00);
  }
</style>