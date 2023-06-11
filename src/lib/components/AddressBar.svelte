<script>

</script>

<main class="address-container">
  <div class="icon-container">
    <div class="icon-box">
      <img src="./address-bar/home.svg" alt="Home"/>
    </div>
  </div>
  <input class="address-input">
</main>

<style>
  .address-input {
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 5px;
    background-color: rgba(230, 230, 230, 0.2);
    color: white;
    font-size: 16px;
    padding: 0 10px;
    outline: none;
  }

  .icon-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .icon-box:hover {
    transition: 0.13s;
    background-color: rgba(230, 230, 230, 0.2);
  }

  .address-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
