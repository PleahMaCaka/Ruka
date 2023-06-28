<script lang="ts">
  import settingIcon from '../../../static/sidebar/setting.svg'
  import type { CssSize } from "../../../typescript/types/StyleTypes"
  import { pageStore } from "../../stores/PageStore"
  import { Page } from "../../../typescript/enums/Page"

  const btnSize: CssSize = "40px"

  function toggleSettingPage() {
    if ($pageStore.page === Page.Settings) $pageStore.page = Page.FileExplorer
    else $pageStore.page = Page.Settings
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ")
      toggleSettingPage()
  }
</script>

<!-- Key press is not necessary, but implemented to remove warning -->
<div class="setting-btn-container"
     style="--setting-btn-size: {btnSize}"
     on:click={toggleSettingPage}
     on:keypress={handleKeyPress}
>
  <div id="icon-bigger-anim" class="center-holder">
    <img
      alt="Settings"
      src={settingIcon}
      class="setting-icon center-holder"
    />
  </div>
</div>

<style>
  .center-holder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .setting-icon {
    width: var(--setting-btn-size);
    height: var(--setting-btn-size);
    opacity: 0.8;
  }

  .setting-icon:hover {
    transition: 0.13s;
    filter: drop-shadow(0 0 1em rgba(221, 187, 221, 0.5));

    animation: spin 2.5s linear infinite;
  }

  #icon-bigger-anim:hover {
    animation: bigger 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation-fill-mode: forwards;
  }

  /* when click -> size feedback */
  #icon-bigger-anim:active {
    animation: bigger-reverse 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation-fill-mode: forwards;
  }

  @keyframes bigger-reverse {
    0% {
      transform: translate(-50%, -50%) scale(1.4);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes bigger {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(1.4);
    }
  }

  .setting-btn-container {
    position: fixed;
    bottom: -3.4%;
    left: -1.9%;
    background-color: rgba(221, 187, 221, 0.25);
    width: var(--setting-btn-size);
    height: var(--setting-btn-size);
    border-radius: 50%;

    cursor: pointer;
  }
</style>