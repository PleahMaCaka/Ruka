<script lang="ts">
  import { rukaState } from "../../stores/RukaState"
  import { rukaConfig } from "../../stores/RukaConfig"
</script>

<div class="address-container" data-tauri-drag-region>
  <input
    style="--input-width: {$rukaConfig.ui.topbar.width}"
    class="address-input"
    bind:value={$rukaState.currentInput}
    on:submit={$rukaState.submittedInput}
  />
</div>

<style>
  .address-input {
    width: var(--input-width);
    height: 24px;
    border: rgba(169, 169, 169, 0.1) 1px solid;
    border-radius: 5px;
    background-color: rgba(230, 230, 230, 0.05);

    color: white;
    font-size: 14px;
    outline: none;
    padding: 0 12px;

    transition: 0.2s;
    animation: 0.2s ease-in-out;
  }

  .address-input:hover, .address-input:focus {
    transition: 0.2s;
    background-color: rgba(230, 230, 230, 0.1);
  }

  .address-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    align-items: center;
    height: 32px;
    border-radius: 50%;
  }
</style>
