<script>

</script>

<main class="address-container">
  <div class="icon-container">
    <img class="button-icon" alt="Left" src="./address-bar/arrow-left.svg"/>
    <img class="button-icon" alt="Right" src="./address-bar/arrow-right.svg"/>
    <img class="button-icon" alt="Home" src="./address-bar/home.svg"/>
  </div>
  <input class="address-input">
</main>

<style>
  .button-icon {
    margin-left: 4px;
  }

  .icon-container {
    display: flex;
    justify-content: flex-start;
    margin-right: 8px
  }

  .address-input {
    width: 100%;
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
    justify-content: center;

    align-items: center;
    width: 100%;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }
</style>
