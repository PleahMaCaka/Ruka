<script lang="ts">
  import DivisionLine from "./DivisionLine.svelte";
  import AddSideBarItemBtn from "./AddSideBarItemBtn.svelte";
  import SideBarItem from "./SideBarItem.svelte";
</script>

<div class="sidebar-contents">
  <!--  <SideBarItem/>-->
  <SideBarItem/>
  <DivisionLine/>
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
</style>