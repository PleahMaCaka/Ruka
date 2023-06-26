<script lang="ts">
  import Divider from "./Settings/Divider.svelte";
  import { rukaConfig } from "../../stores/ConfigStore";
  import resetIcon from "../../../static/page/settings/corner-down-left.svg"
  import type { CssSize } from "../../../typescript/types/StyleTypes";

  let inputWidth: number = 0

  function applyInputWidth() {
    const size: string = `${inputWidth}vw`
    $rukaConfig.ui.topbar.width = size as CssSize
  }
</script>

<div class="setting-container">
  <h2 id="main-title">Settings</h2>

  <h3 class="title">Command Palette</h3>

  <div class="setting-box"
       style="--main-color: {$rukaConfig.ui.color.main}"
  >
    <div class="setting-title-box">
      <h4 class="sub-title">Width</h4>
      <h5 class="description">Width of the command palette</h5>
    </div>
    <h5 class="current-value">{$rukaConfig.ui.topbar.width}</h5>
    <input class="range-option" type="range" min="50" max="70" step="1"
           bind:value={inputWidth}
           on:change={applyInputWidth}
    />

    <button class="option-reset">
      <img class="option-reset-icon" src={resetIcon} alt="Rest">
    </button>
  </div>
  <Divider/>
</div>

<style>
  .current-value {
    margin: 0 0 0 -35vw;
    padding: 0;
    font-size: 0.75rem;
    color: #bdbdbd;
    font-weight: normal;
  }

  .setting-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 4px;

    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .setting-title-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    border-left: 1px solid #ccc;
    padding-left: 10px;

    margin: 0 0 10px 0;
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
  }

  .title {
    margin: 0;
    padding: 10px 4px 4px 4px;
    font-size: 1rem;
    font-weight: bold;
    animation: fadeIn 0.3s ease-in-out;
  }

  .sub-title {
    margin: 0;
    font-size: 0.9rem;
    font-weight: normal;
  }

  .description {
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    color: #bdbdbd;
    font-weight: normal;
  }

  .setting-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  #main-title {
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