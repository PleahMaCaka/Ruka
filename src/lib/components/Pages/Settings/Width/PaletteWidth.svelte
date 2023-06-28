<script lang="ts">
  import { rukaConfig } from "../../../../stores/ConfigStore"
  import type { CssSize } from "../../../../../typescript/types/StyleTypes"
  import { onMount } from "svelte"
  import OptionContainer from "../Frames/OptionContainer.svelte"
  import OptionBox from "../Frames/OptionBox.svelte"
  import resetIcon from "../../../../../static/page/settings/corner-down-left.svg"

  let inputWidth = $rukaConfig.ui.topbar.width.slice(0, -2)

  function applyInputWidth() {
    const size = `${inputWidth}vw`
    $rukaConfig.ui.topbar.width = size as CssSize
  }

  onMount(() => {
    (document.getElementsByClassName("range-option")[0] as HTMLInputElement).value
      = inputWidth
  })
</script>

<OptionContainer title="Command Palette">
  <OptionBox name="Width" description="Width of the command palette">
    <h5 class="option-value">{inputWidth}vw</h5>
    <input
      type="range" min="50" max="70" step="1"
      class="range-option"
      bind:value={inputWidth}
      on:change={applyInputWidth}
    />
    <button class="option-reset">
      <img class="option-reset-icon" src={resetIcon} alt="Reset"/>
    </button>
  </OptionBox>
</OptionContainer>

<style>
  .option-value {
    margin: 0 0 0 -35vw;
    padding: 0;
    font-size: 0.75rem;
    color: #bdbdbd;
    font-weight: normal;
  }

  .option-reset {
    width: 22px;
    height: 22px;
    border: 1px solid #ccc;
    border-radius: 25%;
    background-color: rgba(255, 255, 255, 0.23);
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;
    margin: 0 0 0 -39vw;
    padding: 3px;
  }

  .option-reset-icon {
    width: 100%;
    height: 100%;
    /*make center*/
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .range-option {
    width: 170px;
    margin: 0 0 0 -40vw;
    padding: 0;
    align-self: center;
    color: var(--main-color);

    -webkit-appearance: none;
    background-color: rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    transition: 0.2s;
    animation: fadeIn 0.3s ease-in-out;
  }
</style>