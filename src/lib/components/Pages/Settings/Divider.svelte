<hr class="divider">
<style>
  .divider {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid rgba(204, 204, 204, 0.3);
  }

  .divider {
    position: relative;
    animation: divider 1s ease-in-out;
  }

  @keyframes divider {
    0% {
      width: 0;
      left: 50%;
    }
    100% {
      /* 99% to avoid overflow caused by the animation */
      width: 99%;
      left: 0;
    }
  }
</style>