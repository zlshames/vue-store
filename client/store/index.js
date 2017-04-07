import Vue from 'vue'
import Vuex from 'vuex'
import Helpers from 'util/Helpers'
import shortid from 'shortid'

Vue.use(Vuex)

const cartFields = ['id', 'name', 'description', 'image', 'price', 'quantity']

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

    // Set cart in localStorage
    setTimeout(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, 0)
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
    const newItem = Helpers.transformObj(item, cartFields)

    // If item already in cart, don't add
    let found = false
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == newItem.id) {
        found = true
        cart[i].quantity = cart[i].quantity + 1
      }
    }

    if (found) {
      ctx.dispatch('addAlert', {
        type: 'is-warning',
        message: 'This item is already in your cart! Added 1 to quantity.'
      })
    } else {
      newItem.quantity = 1
      cart.push(newItem)
    }

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

    commit('SET_CART', cart)
  },
  updateCartItem ({ commit }, updatedItem) {
    const cart = state.cart
    const item = Helpers.transformObj(updatedItem, cartFields)

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === item.id) {
        cart[i] = item
        break
      }
    }

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

    let found = false
    for (let i = 0; i < alerts.length; i++) {
      if (alerts[i].message === alert.message) {
        found = true
        break;
      }
    }

    if (found) return

    const id = shortid.generate()

    alerts.push({
      id: id,
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
