<script lang="ts">
  import Divider from "./Settings/Divider.svelte"
  import PaletteWidth from "./Settings/Width/PaletteWidth.svelte";
</script>

<div class="setting-container">
  <h2 id="page-title">Settings</h2>

  <PaletteWidth/>
  <Divider/>
</div>

<style>
  .setting-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  #page-title {
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
