import Vue from 'vue'
import Vuex from 'vuex'
import Helpers from '../util/Helpers'

Vue.use(Vuex)

const state = {
  items: [],
  filteredItems: [],
  cart: [],
  cartVisible: false,
  currentPage: 'shop',
  alerts: []
}

const mutations = {
  SET_FILTERED_ITEMS (state, items) {
    state.filteredItems = items
  },
  SET_ITEMS (state, items) {
    state.items = items
    state.filteredItems = items
  },
  RESET_FILTER (state) {
    state.filteredItems = state.items;
  },
  SET_CART (state, cart) {
    state.cart = cart
  },
  SET_CART_VISIBLE (state, visible) {
    state.cartVisible = visible
  },
  SET_CURRENT_PAGE (state, page) {
    state.currentPage = page
  },
  SET_ALERTS (state, alerts) {
    state.alerts = alerts
  }
}

const actions = {
  loadCart ({ commit }) {
    let cart = []

    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'))
    } else {
      localStorage.setItem('cart', JSON.stringify(cart))
    }

    commit('SET_CART', cart)
  },
  addToCart (ctx, item) {
    const cart = state.cart
    const newItem = Helpers.transformObj(item, ['id', 'name', 'description', 'image', 'price'])

    // If item already in cart, don't add
    let found = false
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == newItem.id) {
        found = true
        break
      }
    }

    if (found) {
      ctx.dispatch('addAlert', {
        type: 'is-warning',
        message: 'This item is already in your cart!'
      })

      return
    }

    // Add item to cart
    cart.push(newItem)

    // Add to localStorage (async)
    setTimeout(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, 0)

    ctx.commit('SET_CART', cart)
  },
  removeFromCart ({ commit }, id) {
    const cart = state.cart

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart.splice(i, 1)
        break;
      }
    }

    // Add to localStorage (async)
    setTimeout(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, 0)

    commit('SET_CART', cart)
  },
  filterItems ({ commit }, filters) {
    let items = null

    // Filter by search term
    items = state.items.filter(item => item.name.indexOf(filters.searchTxt) > -1)

    // Filter by price
    if (filters.price !== 0) {
      items = items.filter(item => Number(item.price) <= filters.price)
    }

    // Filter by tags
    if (filters.tags.length > 0) {
      items = items.filter(item => {
        for (let i = 0; i < filters.tags.length; i++) {
          if (item.tags.indexOf(filters.tags[i]) === -1) {
            return false
          }
        }

        return true
      })
    }

    commit('SET_FILTERED_ITEMS', items)
  },
  addAlert ({ commit }, alert) {
    const alerts = state.alerts
    alerts.push({
      id: Math.floor((Math.random() * 1000) + 1),
      type: alert.type,
      message: alert.message
    })

    commit('SET_ALERTS', alerts)
  },
  removeAlert ({ commit }, id) {
    let alerts = state.alerts
    for (let i = 0; i < alerts.length; i++) {
      if (alerts[i].id === id) {
        alerts.splice(i, 1)
        break;
      }
    }

    commit('SET_ALERTS', alerts)
  }
}

const getters = {
  items(state) {
    return state.filteredItems
  },
  allItems(state) {
    return state.items
  },
  cart(state) {
    return state.cart
  },
  cartVisible(state) {
    return state.cartVisible
  },
  currentPage(state) {
    return state.currentPage
  },
  alerts(state) {
    return state.alerts
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store