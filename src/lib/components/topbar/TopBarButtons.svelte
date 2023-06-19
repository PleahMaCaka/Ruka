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
    border-radius: 25%;

    /* prevent unexpected drag icon */
    -webkit-user-drag: none;
  }

  .button-icon:hover {
    transition: 0.07s ease-in-out;
    background-color: rgba(221, 187, 221, 0.45);
  }

  .button-icon:active {
    transition: 0.07s ease-in-out;
    background-color: rgba(221, 187, 221, 0.75);
  }

  .icon-container {
    display: flex;
    justify-content: flex-start;
    margin-right: 24px;

    width: 90px;
    margin-left: 4px;
  }
</style>