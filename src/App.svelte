<script lang="ts">
  import TopBar from "./lib/components/TopBar/TopBar.svelte"
  import SideBar from "./lib/components/SideBar/SideBar.svelte"
  import rukaIcon from "./static/Ruka.png"
  import { rukaConfig } from "./lib/stores/RukaConfig"
  import { RukaPage } from "./typescript/enums/RukaPage"
  import FileExplorer from "./lib/components/Pages/FileExplorer.svelte"
  import Settings from "./lib/components/Pages/Settings.svelte"
  import PageError from "./lib/components/Pages/PageError.svelte"
  import ContextMenu from "./lib/components/ContextMenu/ContextMenu.svelte"
  import { rukaState } from "./lib/stores/RukaState"
</script>

<svelte:head>
  <title>Ruka File Explorer</title>
  <link rel="icon" type="image/png" href="{rukaIcon}"/>
</svelte:head>

<main
  class="app-container"
  style="--main-color: {$rukaConfig.ui.color.main};"
>
  <ContextMenu/>
  <TopBar/>
  <div class="content-container">
    <div
      class="sidebar-container"
      style="--topbar-height: {$rukaConfig.ui.topbar.marginHeight};"
    >
      <SideBar/>
    </div>
    {#if $rukaState.page === RukaPage.FileExplorer}
      <FileExplorer/>
    {:else if $rukaState.page === RukaPage.Settings}
      <Settings/>
    {:else}
      <PageError/>
    {/if}
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
