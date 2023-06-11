<script>
  import arrowLeft from "../../static/address-bar/arrow-left.svg"
  import arrowRight from "../../static/address-bar/arrow-right.svg"
  import home from "../../static/address-bar/home.svg"
</script>

<main class="address-container">
  <div class="icon-container">
    <img class="button-icon" alt="Left" src={arrowLeft}/>
    <img class="button-icon" alt="Right" src={arrowRight}/>
    <img class="button-icon" alt="Home" src={home}/>
  </div>
  <input class="address-input">
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
  }

  .address-input {
    width: 72.3vw;
    height: 32px;
    border: none;
    border-radius: 5px;
    background-color: rgba(230, 230, 230, 0.05);
    color: white;
    font-size: 16px;
    padding: 0 10px;
    outline: none;
    margin-right: 12px;
  }

  .address-input:hover, .address-input:focus {
    transition: 0.2s;
    background-color: rgba(230, 230, 230, 0.1);
  }

  .address-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    align-items: center;
    width: 100%;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }
</style>
