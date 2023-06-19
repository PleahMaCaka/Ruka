<script>

  import DivisionLine from "./DivisionLine.svelte";
  import AddSideBarItem from "./AddSideBarItem.svelte";
</script>

<main class="sidebar-container">
  <h4 class="category">🗀 Home</h4>
  <p class="goto">Downloads</p>
  <p class="goto">Desktop</p>
  <p class="goto">Musics</p>
  <p class="goto">Documents</p>
  <DivisionLine/>
  <p class="goto">Games</p>

  <!--  Adding SideBar Item-->
  <AddSideBarItem/>
</main>

<style>
  .sidebar-container {
    display: flex;
    flex-direction: column;
    justify-self: center;
    justify-items: center;
    align-items: center;
  }

  .goto {
    font-size: 13px;
    cursor: pointer;
  }

  .category {
    font-size: 14px;
    font-weight: normal;
    width: 78px;
  }

  h4, p {
    margin: 0;
  }
</style>