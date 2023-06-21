<script lang="ts">
  import settingIcon from '../../../static/sidebar/setting.svg'
</script>

<div class="setting-container">
  <div class="setting-btn">
    <img
      alt="Settings"
      src={settingIcon}
      class="setting-icon"
    />
  </div>
</div>

<style>
  .setting-icon {
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .setting-container {
    position: fixed;
    bottom: 4px;
    background-color: rgba(221, 187, 221, 0.71);
    width: 36px;
    height: 36px;
    border-radius: 25%;
  }
</style>