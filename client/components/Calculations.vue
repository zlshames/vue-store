<template>
  <div class="calculations-container">
    <div v-for="item in cart" class="cart-item">
      <div class="item-name">{{ item.name }}:</div>
      <div class="item-price">
        {{ item.quantity }} x {{ formatItemPrice(item) }} = {{ formatItemTotal(item) }}
      </div>
    </div>
    <hr />
    <div class="cart-item">
      <div class="item-name">Tax:</div>
      <div class="item-price">{{ formatTaxTotal() }}</div>
    </div>
    <div class="cart-item">
      <div class="item-name">Shipping:</div>
      <div class="item-price">{{ formatShippingCost() }}</div>
    </div>
    <hr/>
    <div class="cart-item">
      <div class="item-name">Total:</div>
      <div class="item-price">{{ formatTotalCost() }}</div>
    </div>
  </div>
</template>

<script>
  import formatter from 'currency-formatter'

  export default {
    props: ['cart', 'tax', 'shipping'],
    methods: {
      formatItemPrice(item) {
        return formatter.format(item.price, { code: 'USD' })
      },
      formatItemTotal(item) {
        return formatter.format(item.price * item.quantity, { code: 'USD' })
      },
      formatTaxTotal() {
        return formatter.format(this.getCartCost() * this.tax, { code: 'USD' })
      },
      formatShippingCost() {
        return formatter.format(this.shipping, { code: 'USD' })
      },
      formatTotalCost() {
        let cartCost = this.getCartCost()

        cartCost += cartCost * this.tax
        cartCost += this.shipping

        return formatter.format(cartCost, { code: 'USD' })
      },
      getCartCost() {
        let total = 0

        for (let i = 0; i < this.cart.length; i++) {
          total += (this.cart[i].price * this.cart[i].quantity)
        }

        return total
      }
    }
  }
</script>

<style scoped>
  hr {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
  }

  .calculations-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border: 1px solid #dbdbdb;
    padding: 0.4em 0.5em;
    margin-bottom: 0.4em;
  }

  .cart-item {
    width: 100%;
    font-size: 16px;
  }

  .item-name {
    float: left;
  }

  .item-price {
    float: right;
  }
</style>
