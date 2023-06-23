<script lang="ts">
  import TopBar from "./lib/components/TopBar/TopBar.svelte"
  import SideBar from "./lib/components/SideBar/SideBar.svelte"
  import ContextMenu from "./lib/components/ContextMenu/ContextMenu.svelte"
  import rukaIcon from "./static/Ruka.png"
  import { colorPlate as color } from "./lib/stores/ColorPlate";
</script>

<svelte:head>
  <title>Ruka File Explorer</title>
  <link rel="icon" type="image/png" href="{rukaIcon}"/>
</svelte:head>

<main class="app-container" style="--main-color: {color.main}">
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
    /*border remove top and else : border: var(--main-color) 1px solid; */
    border-left: var(--main-color) 1px solid;
    border-right: var(--main-color) 1px solid;
    border-bottom: var(--main-color) 1px solid;

    height: 92.4vh;
    width: 105px;
  }

  /*.logo.vite:hover {*/
  /*  filter: drop-shadow(0 0 2em #747bff);*/
  /*}*/

  /*.logo.svelte:hover {*/
  /*  filter: drop-shadow(0 0 2em #ff3e00);*/
  /*}*/
</style>
