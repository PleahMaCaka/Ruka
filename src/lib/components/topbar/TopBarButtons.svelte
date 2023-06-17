<script>
  import arrowLeft from "../../../static/address-bar/arrow-left.svg";
  import arrowRight from "../../../static/address-bar/arrow-right.svg";
  import home from "../../../static/address-bar/home.svg";
</script>

<main>
  <div class="icon-container" data-tauri-drag-region>
    <img alt="Left" class="button-icon" src={arrowLeft}/>
    <img alt="Right" class="button-icon" src={arrowRight}/>
    <img alt="Home" class="button-icon" src={home}/>
  </div>
</main>

<style>
  .button-icon {
    margin-left: 8px;
  }

  .icon-container {
    display: flex;
    justify-content: flex-start;
    margin-right: 24px;

    width: 90px;
    margin-left: 4px;
  }
</style>