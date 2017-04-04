<template>
  <div class="popover">

  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .popover {
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 10px;

    z-index: 10;
    -webkit-box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.75);
  }

  .popover:after, .popover:before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .popover:after {
    border-color: transparent;
    border-bottom-color: white; /* Background color of triangle */
    border-width: 15px;
    margin-left: -15px;
  }
  .popover:before {
    border-color: transparent;
    border-bottom-color: lightgrey; /* Border color of triangle */
    border-width: 16px;
    margin-left: -16px;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .popover {
      width: 90%;
    }

    .popover:after, .popover:before {
      left: 59%;
    }
  }
</style>
