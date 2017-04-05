<template>
  <div class="popover">
    <div class="cart-container">
      <article v-for="item in getCart" class="media cart-item">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="item.image" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <div class="name-row">
              <p>
                <strong>{{ item.name }}</strong>
              </p>
              <span class="tag is-success is-small">${{ item.price }}</span>
            </div>

            <a @click="$store.dispatch('removeFromCart', item.id)" class="button is-danger is-small is-outlined">Remove</a>
          </div>
        </div>
      </article>
      <div v-if="getCart.length === 0" class="no-items">
        <p>No items in your cart</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      getCart() {
        return this.$store.getters.cart
      }
    }
  }
</script>

<style scoped>
  .tag {
    align-self: flex-start;
    user-select: none;
  }

  .cart-container {
    width: 100%;
    height: 90%;
  }

  .no-items {
    height: 100%;
    width: 100%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .name-row > p {
    font-size: 14px;
    word-wrap: break-word;
    margin-bottom: 7px;
  }

  .content > a {
    height: 20px;
  }

  .cart-item {
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: -30px;
  }

  .popover {
    width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 10px;

    z-index: 10;
    -webkit-box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.75);
    overflow-y: auto;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .popover {
      width: 90%;
    }
  }
</style>
