<template>
  <div class="page">
    <el-nav />

    <div class="body-container" @click="$store.commit('SET_CART_VISIBLE', false)">
      <div class="content">
        <h3>About</h3>
        <p>
          This web-store is brought to you by COMPANY NAME. We strive to bring you the best products we can.
          Not only are our products high quality, but they are cheap.
          We are a company, for the people. We do not give into the corporate culture of up-charging you by 500%.
          Instead, we sell things just 15% above market value.
        </p>
        <p>
          We are a family run business who would like nothing more than pleased customers.
          If you have any issues with our products, we encourage you to contact us and even challenge us.
          If our product does not satisfy you, you are eligible for a 100% refund, not including shipping costs.
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
    .body-container {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .content {
      margin: 0.5em;
    }
  }

  p {
    font-size: 16px;
  }
</style>
