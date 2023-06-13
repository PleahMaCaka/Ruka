<script>
  import arrowLeft from "../../../static/address-bar/arrow-left.svg";
  import arrowRight from "../../../static/address-bar/arrow-right.svg";
  import home from "../../../static/address-bar/home.svg";
</script>

<main>
  <div class="icon-container" data-tauri-drag-region>
    <img class="button-icon" alt="Left" src={arrowLeft}/>
    <img class="button-icon" alt="Right" src={arrowRight}/>
    <img class="button-icon" alt="Home" src={home}/>
  </div>
</main>

<style>
  .button-icon {
    margin-left: 6px;
  }

  .icon-container {
    display: flex;
    justify-content: flex-start;
    margin-right: 24px;

    width: 90px;
    margin-left: 8px;
  }
</style>