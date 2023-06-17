<main>
  <div id="contextmenu">
    Options here!
  </div>
</main>
<style>
  #contextmenu {
    position: fixed;
    z-index: 100;
    display: none;

    width: 150px;
    height: 170px;

    background: rgba(30, 144, 255, 0.75);
    backdrop-filter: blur(1px);
    border-radius: 8px;
  }

  #contextmenu.visible {
    display: block;
  }
</style>