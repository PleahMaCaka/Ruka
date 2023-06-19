<script>
  import TopBarButtons from "./TopBarButtons.svelte";
  import TopBarInput from "./TopBarInput.svelte";
  import WindowControlButtons from "./TopBarWindowControl.svelte";
</script>

<main>
  <div class="top-bar input-drag-region" data-tauri-drag-region>
    <TopBarButtons/>
    <TopBarInput/>
    <WindowControlButtons/>
  </div>
</main>

<style>
  .top-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    justify-items: center;
    align-items: center;
    width: 100%;
  }

  .input-drag-region {
    width: 100%;
    height: 40px;
    background-color: #0f0f0f;
    box-shadow: 0 0 0 1px rgba(221, 187, 221, 0.45) inset;
  }
</style>