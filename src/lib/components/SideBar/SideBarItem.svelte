<script lang="ts">
  import { rukaConfig } from "../../stores/RukaConfig";

  export let icon: string = "🗀"

  const defaultName = "Unnamed"
  export let name: string = defaultName

  const isUnnamed: boolean = name === "" || name === defaultName
</script>

<div class="item-holder"
     on:click={() => $rukaConfig}
>
  {#if isUnnamed}
    <div class="noname"></div>
  {/if}
  <p class="sidebar-item">
    {icon} {isUnnamed ? defaultName : name}
  </p>
</div>


<style>
  .item-holder {
    height: 100%;
    width: 100%;
  }

  .item-holder:hover {
    background-color: rgba(224, 224, 224, 0.07);

    border-radius: 5px;

    transition: background-color 0.13s ease-in-out;
  }

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