<script lang="ts">
  import DivisionLine from "./SideBarDivider.svelte"
  import AddSideBarItemBtn from "./SideBarAddItemBtn.svelte"
  import SideBarItem from "./SideBarItem.svelte"
  import SettingButton from "./SideBarSettingBtn.svelte"
</script>

<div class="sidebar-contents">
  <!--  <SideBarItem/>-->
  <SideBarItem/>
  <DivisionLine/>
  <!--  Adding SideBar Item-->
  <AddSideBarItemBtn/>

  <SettingButton/>
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