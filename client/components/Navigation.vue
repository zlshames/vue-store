<template>
  <nav class="nav has-shadow">
    <div class="nav-left">
      <a class="nav-item">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
      </a>
      <router-link
        :class="['nav-item is-tab', (page === 'shop') ? 'is-active' : '']"
        :to="{ name: 'shop' }">

        <span class="icon">
          <i class="fa fa-usd"></i>
        </span>

        Shop
      </router-link>
      <a v-if="!isMobile" class="nav-item is-tab" @click="toggleCart" ref="cartTab">
        <span class="icon">
          <i class="fa fa-shopping-cart"></i>
        </span>

        Cart
        <span
          v-if="$store.getters.cart.length > 0"
          class="tag is-danger is-small cart-count">{{ $store.getters.cart.length }}</span>
      </a>
      <Cart
        v-if="$store.getters.cartVisible"
        class="cart-popover"
        :style="cartPosition"
        :toggleCart="toggleCart"
      />
    </div>

    <span class="nav-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div class="nav-right nav-menu" ref="menu" @click="closeMenu">
      <a v-if="isMobile" class="nav-item is-tab" @click="toggleCart" ref="cartTab">
        <span class="icon">
          <i class="fa fa-shopping-cart"></i>
        </span>

        Cart
        <span
          v-if="$store.getters.cart.length > 0"
          class="tag is-danger is-small cart-count">{{ $store.getters.cart.length }}</span>
      </a>
      <router-link
        :class="['nav-item is-tab', (page === 'checkout') ? 'is-active' : '']"
        :to="{ name: 'checkout' }" >

        <span class="icon">
          <i class="fa fa-sign-out"></i>
        </span>

        Checkout
      </router-link>
      <router-link
        :class="['nav-item is-tab', (page === 'about') ? 'is-active' : '']"
        :to="{ name: 'about' }" >

        <span class="icon">
          <i class="fa fa-info"></i>
        </span>

        About
      </router-link>
      <router-link
      :class="['nav-item is-tab', (page === 'faq') ? 'is-active' : '']"
      :to="{ name: 'faq' }">

        <span class="icon">
          <i class="fa fa-question"></i>
        </span>

        FAQ
      </router-link>
      <router-link
        :class="['nav-item is-tab', (page === 'contact') ? 'is-active' : '']"
        :to="{ name: 'contact' }">

        <span class="icon">
          <i class="fa fa-envelope"></i>
        </span>

        Contact
      </router-link>
    </div>
  </nav>
</template>

<script>
  import Cart from 'components/CartPopover'

  export default {
    components: {
      Cart
    },
    data() {
      return {
        cartPosition: {
          top: 0,
          left: 0
        }
      }
    },
    computed: {
      isMobile() {
        return window.innerWidth < 768
      },
      page() {
        return this.$store.getters.currentPage
      }
    },
    methods: {
      toggleMenu() {
        if (this.$refs.menu.className.indexOf('is-active') > -1) {
          this.closeMenu()
        } else {
          this.$refs.menu.className += ' is-active'
        }
      },
      closeMenu() {
        if (this.$refs.menu) {
          this.$refs.menu.className = this.$refs.menu.className.replace(' is-active', '')
        }
      },
      toggleCart() {
        const rect = this.$refs.cartTab.getBoundingClientRect()

        if (!this.isMobile) {
          this.cartPosition = {
            top: (rect.top + 55) + 'px',
            left: (window.innerWidth < 768) ? ((rect.left - 210) + 'px') : ((rect.left - 100) + 'px')
          }
        } else {
          this.cartPosition = {
            top: '60px',
            left: '20px'
          }
        }

        this.$store.commit('SET_CART_VISIBLE', !this.$store.getters.cartVisible)
      }
    }
  }
</script>

<style scoped>
  .cart-count {
    margin-top: -15px;
    margin-left: 5px !important;
    height: 18px;
  }

  .nav-item {
    user-select: none;
  }

  .icon {
    margin-right: 5px;
  }

  .cart-popover {
    position: fixed;
    top: 50px;
  }

  .nav-right.nav-menu.is-active {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: fadeIn;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .cart-popover {
      width: 90%;
    }
  }
</style>
