<script lang="ts">
  import { onMount } from 'svelte'
  import TopBar from "./lib/components/topbar/TopBar.svelte"
  import SideBar from "./lib/components/sidebar/SideBar.svelte"
  import ContextMenu from "./lib/components/contextmenu/ContextMenu.svelte"

  let contextmenu
  onMount(() => {
    // disable default context menu and replace custom context menu
    document.addEventListener("contextmenu", event => {
      event.preventDefault()

      const {clientY, clientX} = event

      contextmenu.style.top = `${clientY}px`
      contextmenu.style.left = `${clientX}px`

      contextmenu.classList.add("visible")
    })
  })
</script>

<main class="app-container">
  <TopBar/>
  <div class="content-container">
    <div class="sidebar-container">
      <SideBar/>
    </div>
    <div class="filelist-container">
      <div>

      </div>
    </div>
    <ContextMenu bind:this={contextmenu}/>
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
