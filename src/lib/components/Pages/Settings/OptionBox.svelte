<script lang="ts">
  export let name
  export let description = ""
</script>

<div class="option-box">
  <div class="option-intro-box">
    <h4 class="option-name">{name}</h4>
    <h5 class="option-desc">{description}</h5>
  </div>
  <slot/>
</div>

<style>
  .option-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 4px;
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .option-intro-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-left: 1px solid #ccc;
    padding-left: 10px;
    margin: 0 0 10px 0;
  }

  .option-name {
    margin: 0;
    font-size: 0.9rem;
    font-weight: normal;
  }

  .option-desc {
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    color: #bdbdbd;
    font-weight: normal;
  }
</style>