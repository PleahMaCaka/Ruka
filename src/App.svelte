<script lang="ts">
  import TopBar from "./lib/components/topbar/TopBar.svelte";
</script>

<main class="app-container">
  <TopBar/>
  <div class="content-container">
    <!--    <SideBar/>-->
  </div>
</main>

<style>
  .content-container {
    display: flex;
    justify-content: center;
    justify-self: center;
    border: #0f0f0f 2px solid;

    margin-top: 6px;
    margin-left: 8px;

    height: 86vh;
    width: 10vw;
  }

  /*.logo.vite:hover {*/
  /*  filter: drop-shadow(0 0 2em #747bff);*/
  /*}*/

  /*.logo.svelte:hover {*/
  /*  filter: drop-shadow(0 0 2em #ff3e00);*/
  /*}*/
</style>