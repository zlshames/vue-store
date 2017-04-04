import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  items: [],
  filteredItems: []
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
  }
}

const actions = {
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
  }
}

const getters = {
  items(state) {
    return state.filteredItems
  },
  allItems(state) {
    return state.items
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
