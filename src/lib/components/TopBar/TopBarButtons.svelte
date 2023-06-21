<script lang="ts">
  import arrowLeft from "../../../static/address-bar/arrow-left.svg"
  import arrowRight from "../../../static/address-bar/arrow-right.svg"
  import home from "../../../static/address-bar/home.svg"
  import "../../../styles/highlight.css"
</script>

<div class="icon-container" data-tauri-drag-region>
  <img alt="Left" class="button-icon highlight" src={arrowLeft}/>
  <img alt="Right" class="button-icon highlight" src={arrowRight}/>
  <img alt="Home" class="button-icon highlight" src={home}/>
</div>

<style>
  .button-icon {
    margin-left: 8px;
    border-radius: 25%;

    /* prevent unexpected drag icon */
    -webkit-user-drag: none;
  }

  .icon-container {
    display: flex;
    justify-content: flex-start;
    margin-right: 24px;

    width: 90px;
    margin-left: 4px;
  }
</style>