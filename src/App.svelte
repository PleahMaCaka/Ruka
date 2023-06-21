<script lang="ts">
  import TopBar from "./lib/components/TopBar/TopBar.svelte"
  import SideBar from "./lib/components/SideBar/SideBar.svelte"
  import ContextMenu from "./lib/components/ContextMenu/ContextMenu.svelte"
</script>

<main class="app-container">
  <TopBar/>
  <div class="content-container">
    <div class="sidebar-container">
      <SideBar/>
    </div>
    <div class="filelist-container">
      <div>
        Files
      </div>
    </div>
    <ContextMenu/>
  </div>
</main>

<style>
  .content-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .sidebar-container {
    display: flex;
    justify-content: center;
    justify-self: center;
    border: #0f0f0f 2px solid;

    margin-top: 6px;
    margin-left: 8px;

    height: 89vh;
    width: 105px;
  }

  /*.logo.vite:hover {*/
  /*  filter: drop-shadow(0 0 2em #747bff);*/
  /*}*/

  /*.logo.svelte:hover {*/
  /*  filter: drop-shadow(0 0 2em #ff3e00);*/
  /*}*/
</style>
