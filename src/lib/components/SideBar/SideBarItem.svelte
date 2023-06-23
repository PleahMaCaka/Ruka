<script lang="ts">
  export let icon: string = "🗀"

  const defaultName = "Unnamed"
  export let name: string = defaultName

  const isUnnamed: boolean = name === "" || name === defaultName
</script>

<div>
  {#if isUnnamed}
    <div class="noname"></div>
  {/if}
  <p class="sidebar-item">
    {icon} {isUnnamed ? defaultName : name}
  </p>
</div>


<style>
  .sidebar-item {
    display: flex;
    flex-direction: column;

    margin: 0;
    font-size: 0.8rem;
    cursor: pointer;
  }

  .noname + .sidebar-item {
    color: gray;
  }
</style>