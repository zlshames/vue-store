<template>
  <div class="page">
    <el-nav />

    <div class="body-container" @click="$store.commit('SET_CART_VISIBLE', false)">
      <div class="content">
        <h3>FAQ</h3>
        <p>
          Here you will find some <strong>frequently asked questions</strong>.
          If your question is not answered here, please feel free to contact us directly to get an answer.
        </p>
        <p>
          <ul>
            <li>Are refunds given for unhappy results?</li>
            <blockquote>
              <strong>Yes</strong>, 100% refunds are given if you are unpleased with the product. This does not include shipping costs.
            </blockquote>
            <li>Is shipping included in prices?</li>
            <blockquote>
              <strong>No</strong>, shipping costs depend on your location
            </blockquote>
            <li>How durable are your products?</li>
            <blockquote>
              Our products have wont the <strong>... award</strong> for durability
            </blockquote>
            <li>How many customers do you server?</li>
            <blockquote>
              We have over <strong>100</strong> happy customers
            </blockquote>
          </ul>
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
    margin-bottom: 150px;
  }

  .content {
    margin-left: 4em;
    margin-right: 4em;
    margin-top: 1em;
  }

  .content > blockquote {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .content > p > ul > li {
    font-size: 18px;
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
