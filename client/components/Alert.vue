<template>
  <div :class="['notification', type]">
    <button class="delete" @click="$store.dispatch('removeAlert', id)"></button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    props: ['id', 'type', 'message'],
    mounted() {
      setTimeout(() => {
        this.$store.dispatch('removeAlert', this.id)
      }, 4000)
    }
  }
</script>

<style scoped>
  .notification > p {
    font-size: 16px;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .notification {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 40%;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: fadeIn;
    pointer-events: all;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .notification {
      width: 90%;
    }
  }
</style>
