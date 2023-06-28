<script lang="ts">
  import Divider from "./Settings/Frames/Divider.svelte"
  import PaletteWidth from "./Settings/Width/PaletteWidth.svelte";

  let configs = [
    PaletteWidth
  ]
</script>

<div class="setting-container">
  <h2 class="page-title">Settings</h2>

  {#each configs as config}
    <svelte:component this={config}/>
    <Divider/>
  {/each}
  <div id="dev-option-box">
    <h2 class="page-title" id="for-dev">For Developers</h2>
  </div>

</div>

<style>
  #dev-option-box {
    filter: blur(10px);
  }

  #dev-option-box:hover {
    filter: none;
    transition: 0.5s;
  }

  #for-dev {
    color: #82ffae;
  }
  .setting-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .page-title {
    margin: 0;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    letter-spacing: 0.3rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #8286ff;
    animation: fadeIn 0.3s ease-in-out;
  }
</style>
