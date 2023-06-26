<script lang="ts">
  import TopBarButtons from "./TopBarButtons.svelte"
  import TopBarInput from "./TopBarInput.svelte"
  import WindowControlButtons from "./TopBarWindowControl.svelte"
  import { rukaConfig } from "../../stores/ConfigStore"
</script>

<div
  data-tauri-drag-region
  class="top-bar input-drag-region"
  style="--topbar-size: {$rukaConfig.ui.topbar.marginHeight}"
>
  <TopBarButtons/>
  <TopBarInput/>
  <WindowControlButtons/>
</div>

<style>
  .top-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
  }

  .input-drag-region {
    width: 100%;
    height: var(--topbar-size);
    background-color: #0f0f0f;
    box-shadow: 0 0 0 1px rgba(221, 187, 221, 0.45) inset;
  }
</style>