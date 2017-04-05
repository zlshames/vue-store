<template>
  <div id="app">
    <alert-list />
    <router-view></router-view>
  </div>
</template>

<script>
  import AlertList from 'components/AlertList'
  export default {
    components: {
      AlertList
    },
    created() {
      this.$store.dispatch('loadCart')
      this.setPage()
    },
    watch: {
      '$route': function() {
        this.setPage()
        this.$store.commit('SET_CART_VISIBLE', false)
      }
    },
    methods: {
      setPage() {
        if (this.$route.matched.length > 0) {
          this.$store.commit('SET_CURRENT_PAGE', this.$route.matched[0].name)
        }
      }
    }
  }
</script>

<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
</style>
