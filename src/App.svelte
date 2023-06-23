<script lang="ts">
  import TopBar from "./lib/components/TopBar/TopBar.svelte"
  import SideBar from "./lib/components/SideBar/SideBar.svelte"
  import ContextMenu from "./lib/components/ContextMenu/ContextMenu.svelte"
  import rukaIcon from "./static/Ruka.png"
  import { colorPlate as color } from "./lib/stores/ColorPlate";
  import { rukaConfig } from "./lib/stores/ConfigStore";
</script>

<svelte:head>
  <title>Ruka File Explorer</title>
  <link rel="icon" type="image/png" href="{rukaIcon}"/>
</svelte:head>

<main class="app-container" style="--main-color: {color.main};">
  <TopBar/>
  <div class="content-container">
    <div class="sidebar-container" style="--topbar-height: {$rukaConfig.ui.topbar.height};">
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border-left: var(--main-color) 1px solid;
    border-right: var(--main-color) 1px solid;
    border-bottom: var(--main-color) 1px solid;

    width: 105px;
    height: calc(100vh - var(--topbar-height) - 1px);
  }
</style>
