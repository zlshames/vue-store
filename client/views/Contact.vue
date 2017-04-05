<template>
  <div class="page">
    <el-nav />

    <div class="body-container" @click="$store.commit('SET_CART_VISIBLE', false)">

    </div>

    <el-footer />
  </div>
</template>

<script>
import ElNav from 'components/Navigation'
import ElFooter from 'components/Footer'

export default {
  components: {
    ElNav,
    ElFooter
  }
}
</script>

<style scoped>
  .body-container {
    display: flex;
    flex-direction: row;
    margin: 20px;
    margin-bottom: 100px;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .body-container {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
</style>
