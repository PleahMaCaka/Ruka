<script lang="ts">
  import AddressBar from "./lib/components/AddressBar.svelte";
  import SideBar from "./lib/components/SideBar.svelte";
</script>

<main class="app-container">
  <AddressBar/>
  <SideBar>

  </SideBar>
</main>

<style>
  .content-container {
    display: flex;
    justify-content: flex-start;
    justify-self: center;
    border: #0f0f0f 2px solid;

    margin-top: 6px;

    height: 90vh;
    width: 10vw;
  }

  /*.logo.vite:hover {*/
  /*  filter: drop-shadow(0 0 2em #747bff);*/
  /*}*/

  /*.logo.svelte:hover {*/
  /*  filter: drop-shadow(0 0 2em #ff3e00);*/
  /*}*/
</style>