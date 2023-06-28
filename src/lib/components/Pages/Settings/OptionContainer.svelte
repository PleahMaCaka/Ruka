<script lang="ts">
  export const title = "Command Palette"
</script>

<div>
  <h3 class="option-title">{title}</h3>
  <slot/>
</div>

<style>
  .option-title {
    margin: 0;
    padding: 10px 4px 4px 4px;
    font-size: 1rem;
    font-weight: bold;
    animation: fadeIn 0.3s ease-in-out;
  }
</style>