<script lang="ts">
  import DivisionLine from "./DivisionLine.svelte";
  import AddSideBarItemBtn from "./AddSideBarItemBtn.svelte";
</script>

<div class="sidebar-contents">
  <h4 class="category">🗀 Home</h4>
  <p class="goto">Downloads</p>
  <p class="goto">Desktop</p>
  <p class="goto">Musics</p>
  <p class="goto">Documents</p>
  <DivisionLine/>
  <p class="goto">Games</p>

  <!--  Adding SideBar Item-->
  <AddSideBarItemBtn/>
</div>

<style>
  .sidebar-contents {
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