<template>
  <div class="page">
    <el-nav />

    <div class="body-container" @click="$store.commit('SET_CART_VISIBLE', false)">
      <div class="content">
        <h3>Contact</h3>
        <p>
          <strong class="is-block">Point of Contact</strong>
          <span class="icon is-small"><i class="fa fa-envelope"></i></span> John Doe
          <br>
          <span class="icon is-small"><i class="fa fa-phone"></i></span> (555) 555-5555
          <br>
          <span class="icon is-small"><i class="fa fa-fax"></i></span> (555) 555-5556
        </p>
      </div>
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
    justify-content: center;
    align-items: center;
    margin: 20px;
    margin-bottom: 100px;
  }

  .content {
    margin-left: 4em;
    margin-right: 4em;
    margin-top: 1em;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .content {
      margin: 0.5em;
    }
  }

  p {
    font-size: 16px;
    margin-left: 20px;
  }
</style>
