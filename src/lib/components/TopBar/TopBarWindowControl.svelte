<script lang="ts">
  import closeIcon from "../../../static/topbar/close.svg"
  import minimizeIcon from "../../../static/topbar/minimize.svg"
  import maximizeIcon from "../../../static/topbar/maximize.svg"
  import "../../../styles/highlight.css"
  import { appWindow } from "@tauri-apps/api/window"
  import { onMount } from "svelte"

  onMount(() => {
    document.getElementById("min-btn").addEventListener("click", () => appWindow.minimize())
    document.getElementById("max-btn").addEventListener("click", () => appWindow.toggleMaximize())
    document.getElementById("close-btn").addEventListener("click", () => appWindow.close())
  })
</script>

<div class="window-control">
  <button class="control-btn highlight">
    <img alt="Minimize" src={minimizeIcon} id="min-btn">
  </button>
  <button class="control-btn highlight">
    <img alt="Maximize" src={maximizeIcon} id="max-btn">
  </button>
  <button class="control-btn highlight">
    <img alt="Close" src={closeIcon} id="close-btn">
  </button>
</div>

<style>
  #min-btn {
    width: 18px;
    height: 18px;
  }

  #max-btn {
    width: 14px;
    height: 14px;
  }

  #close-btn {
    width: 20px;
    height: 20px;
  }

  .control-btn {
    width: 28px;
    height: 28px;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    margin: 0;
  }

  .window-control {
    width: 100px;
    height: 28px;
    display: flex;
    justify-content: flex-start;
    margin-right: 4px;
    margin-left: 32px;
  }
</style>