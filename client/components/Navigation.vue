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
      <a class="nav-item is-tab" @click="toggleCart" ref="cartTab">
        <span class="icon">
          <i class="fa fa-shopping-cart"></i>
        </span>

        Cart
      </a>
      <Cart v-if="showCart" class="cart-popover" :offset="cartOffset" :style="cartPosition" />
    </div>

    <span class="nav-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div class="nav-right nav-menu" ref="menu">
      <router-link
        :class="['nav-item is-tab', (page === 'about') ? 'is-active' : '']"
        :to="{ name: 'about' }" @click.native="closeMenu">

        <span class="icon">
          <i class="fa fa-info"></i>
        </span>

        About
      </router-link>
      <router-link
      :class="['nav-item is-tab', (page === 'faq') ? 'is-active' : '']"
      :to="{ name: 'faq' }" @click.native="closeMenu">

        <span class="icon">
          <i class="fa fa-question"></i>
        </span>

        FAQ
      </router-link>
      <router-link
        :class="['nav-item is-tab', (page === 'contact') ? 'is-active' : '']"
        :to="{ name: 'contact' }" @click.native="closeMenu">

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
        page: 'shop',
        showCart: false,
        cartPosition: {
          top: 0,
          left: 0
        },
        cartOffset: '10px'
      }
    },
    watch: {
      '$route': function() {
        this.getPage()
      }
    },
    methods: {
      getPage() {
        if (this.$route.matched.length > 0) {
          this.page = this.$route.matched[0].name
        }
      },
      toggleMenu() {
        if (this.$refs.menu.className.indexOf('is-active') > -1) {
          this.closeMenu()
        } else {
          this.$refs.menu.className += ' is-active'
        }
      },
      closeMenu() {
        this.$refs.menu.className = this.$refs.menu.className.replace(' is-active', '')
      },
      toggleCart() {
        const rect = this.$refs.cartTab.getBoundingClientRect()

        this.cartPosition = {
          top: (rect.top + 55) + 'px',
          left: (window.innerWidth < 768) ? ((rect.left - 210) + 'px') : ((rect.left - 100) + 'px')
        }

        this.showCart = !this.showCart
      }
    }
  }
</script>

<style scoped>
  .nav-item {
    user-select: none;
  }

  .icon {
    margin-right: 5px;
  }

  .cart-popover {
    position: absolute;
    top: 50px;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .cart-popover {
      width: 90%;
    }
  }

  .nav-right.nav-menu.is-active {
    animation: slide-down-nav 250ms ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes slide-down-nav {
    0% {
      height: 0%;
    }
    100% {
      height: 100%;
    }
  }
</style>
