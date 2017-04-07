<template>
  <div class="page">
    <el-nav />

    <div class="body-container" @click="$store.commit('SET_CART_VISIBLE', false)">
      <h3>Checkout</h3>
      <div class="cart-container">
        <div v-if="getCart.length > 0">
          <div v-for="item in getCart">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title name-row">
                  <p>{{ item.name }}</p>
                  <div class="quantity-label">Qty: <input class="input quantity-input" type="number" @change="(e) => quantityChange(e, item)" :value="item.quantity" min="1" max="99" number /></div>
                </div>
              </header>
              <div class="card-content">
                <div class="content">
                  <figure class="image">
                    <img :src="item.image" alt="Image">
                  </figure>
                  <p>{{ item.description }}</p>
                </div>
              </div>
              <footer class="card-footer">
                <a @click="$store.dispatch('removeFromCart', item.id)" class="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>

          <calculations :cart="getCart" :tax="0.05" :shipping="5" />

          <a class="button is-primary is-medium">Checkout</a>
        </div>
        <div v-if="getCart.length === 0" class="no-items">
          You must have items in your cart to checkout
        </div>
      </div>
    </div>

    <el-footer />
  </div>
</template>

<script>
import ElNav from 'components/Navigation'
import ElFooter from 'components/Footer'
import Calculations from 'components/Calculations'

export default {
  components: {
    ElNav,
    ElFooter,
    Calculations
  },
  computed: {
    getCart() {
      return this.$store.getters.cart
    }
  },
  methods: {
    quantityChange(e, item) {
      const quantity = Number(e.target.value)

      if (quantity === 0) return

      const updated = item

      updated.quantity = quantity
      this.$store.dispatch('updateCartItem', updated)
    }
  }
}
</script>

<style scoped>
  .quantity-input {
    height: 25px;
    width: 50px;
    font-size: 12px;
  }

  .quantity-label {
    font-size: 12px;
    line-height: 23px;
    color: grey;
    font-weight: normal;
  }

  .button {
    float: right;
  }

  .content > figure {
    min-width: 64px;
  }

  .content > figure > img {
    width: 64px;
    height: 48px;
    border-radius: 2px;
  }

  .content > p {
    margin-left: 0.5em;
  }

  h3 {
    text-align: center;
    margin-bottom: 1em;
  }

  .name-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .body-container {
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-bottom: 150px;
  }

  .content {
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }

  footer > a {
    font-size: 16px;
  }

  .cart-container {
    width: 60%;
    max-width: 800px;
    margin: 0 auto;
    background-color: #f5f5f5;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.5em;
    padding-top: 1em;
    border-radius: 5px;
  }

  .cart-container > a {
    float: right;
  }

  .card-header-title {
    padding: 0.5rem;
  }

  .card-content {
    padding: 0.75rem;
  }

  .card-footer-item {
    padding: 0.4rem;
  }

  .card {
    margin-bottom: 0.75em;
  }

  .no-items {
    font-size: 20px;
    text-align: center;
    margin-top: -15px;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .body-container {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 0;
      margin-top: 20px;
    }

    .cart-container {
      width: 90%;
      padding-left: 0.5em;
      padding-right: 0.5em;
      margin-bottom: 125px;
    }
  }

  p {
    font-size: 16px;
  }
</style>
