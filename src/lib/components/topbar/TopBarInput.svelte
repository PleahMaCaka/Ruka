<script>
  let currentPath = ""
</script>

<main class="address-container">
  <input class="address-input" bind:value={currentPath} on:input={() => console.log(currentPath)}>
</main>

<style>
  .address-input {
    width: 72.3vw;
    height: 24px;
    border: rgba(169, 169, 169, 0.1) 1px solid;
    border-radius: 5px;
    background-color: rgba(230, 230, 230, 0.05);

    color: white;
    font-size: 14px;
    outline: none;
    padding: 0 12px;
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
    height: 32px;
    border-radius: 50%;
  }
</style>
