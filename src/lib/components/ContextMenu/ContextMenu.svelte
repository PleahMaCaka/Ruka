<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  let contextmenu: HTMLElement

  onMount(() => {
    contextmenu = document.getElementById('contextmenu')

    document.addEventListener('contextmenu', showContextMenu)
    document.addEventListener('click', hideContextMenu)
  })

  onDestroy(() => {
    document.removeEventListener('contextmenu', showContextMenu)
    document.removeEventListener('click', hideContextMenu)
  })

  function showContextMenu(event) {
    event.preventDefault()
    contextmenu.style.left = event.pageX + 'px'
    contextmenu.style.top = event.pageY + 'px'
    contextmenu.style.display = 'block'
  }

  function hideContextMenu() {
    setTimeout(() => {
      contextmenu.style.display = 'none'
    }, 0) // 130 = 0.13s
  }
</script>

<div id="contextmenu" class="contextmenu">
  Options here!
</div>

<style>
  #contextmenu {
    position: fixed;
    display: none;
    z-index: 100;

    width: 150px;
    height: 170px;

    background: rgba(177, 132, 255, 0.55);
    backdrop-filter: blur(3px);
    border-radius: 8px;

    border: 1px solid rgba(208, 204, 204, 0.68);

    /*TODO pretty animation*/
    /*animation: open-context 0.2s ease-in-out;*/

    transition: all 0.2s ease-in-out;
  }

  @keyframes open-context {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
