<template>
  <div class="alerts-container">
    <div v-for="alert in getAlerts">
      <alert :id="alert.id" :type="alert.type" :message="alert.message" />
    </div>
  </div>

</template>

<script>
  import Alert from 'components/Alert'

  export default {
    components: {
      Alert
    },
    computed: {
      getAlerts() {
        return this.$store.getters.alerts
      }
    }
  }
</script>

<style scoped>
  .alerts-container {
    position: fixed;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 0.5em;
    z-index: 9999;
  }
</style>
