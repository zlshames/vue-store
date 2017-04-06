<template>
  <div class="page">
    <el-nav />

    <div class="body-container" @click="$store.commit('SET_CART_VISIBLE', false)">
      <h3>Checkout</h3>
      <div class="cart-container">
        <div v-for="item in getCart">
          <div class="card">
            <header class="card-header">
              <div class="card-header-title name-row">
                <p>{{ item.name }}</p>
                <p class="quantity">Quantity: {{ item.quantity }}</p>
              </div>
            </header>
            <div class="card-content">
              <div class="content">
                {{ item.description }}
                <br>
                <small>{{ item.post_date }}</small>
              </div>
            </div>
            <footer class="card-footer">
              <a @click="$store.dispatch('removeFromCart', item.id)" class="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
        
        <a class="button is-primary is-medium">Checkout</a>
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
  },
  computed: {
    getCart() {
      return this.$store.getters.cart
    }
  }
}
</script>

<style scoped>
  .quantity {
    font-size: 14px;
    color: grey;
    font-weight: normal;
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
    padding-bottom: 1em;
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
    }
  }

  p {
    font-size: 16px;
  }
</style>
