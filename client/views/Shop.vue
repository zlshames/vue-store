<template>
  <div class="page">
    <el-nav />

    <div class="body-container">
      <div class="filter-container">
        <filter-panel />
      </div>

      <div class="list-container">
        <item-list :items="getItems" />
      </div>
    </div>

    <el-footer />
  </div>
</template>

<script>
import ElNav from 'components/Navigation'
import ElFooter from 'components/Footer'
import ItemList from 'components/ItemList'
import FilterPanel from 'components/FilterPanel'

export default {
  components: {
    ElNav,
    ElFooter,
    ItemList,
    FilterPanel
  },
  computed: {
    getItems() {
      return this.$store.getters.items
    }
  },
  created() {
    this.$store.commit('SET_ITEMS', [
      {
        id: 'XYZ',
        name: 'Item 1',
        description: 'Description of item 1',
        image: 'http://bulma.io/images/placeholders/1280x960.png',
        price: '40',
        post_date: 'April 4th, 2017'
      },
      {
        id: 'ABC',
        name: 'Item 2',
        description: 'Description of item 2',
        image: 'http://bulma.io/images/placeholders/1280x960.png',
        price: '10',
        post_date: 'April 4th, 2017'
      },
      {
        id: 'DEF',
        name: 'Item 3',
        description: 'Description of item 3',
        image: 'http://bulma.io/images/placeholders/1280x960.png',
        price: '50',
        post_date: 'April 4th, 2017'
      },
      {
        id: 'GHI',
        name: 'Item 4',
        description: 'Description of item 4',
        image: 'http://bulma.io/images/placeholders/1280x960.png',
        price: '80',
        post_date: 'April 4th, 2017'
      },
      {
        id: 'JKL',
        name: 'Item 5',
        description: 'Description of item 5',
        image: 'http://bulma.io/images/placeholders/1280x960.png',
        price: '25',
        post_date: 'April 4th, 2017'
      },
      {
        id: 'MNO',
        name: 'Item 6',
        description: 'Description of item 6',
        image: 'http://bulma.io/images/placeholders/1280x960.png',
        price: '5',
        post_date: 'April 4th, 2017'
      },
      {
        id: 'PQR',
        name: 'Item 7',
        description: 'Description of item 7',
        image: 'http://bulma.io/images/placeholders/1280x960.png',
        price: '75',
        post_date: 'April 4th, 2017'
      },
      {
        id: 'STU',
        name: 'Item 8',
        description: 'Description of item 8',
        image: 'http://bulma.io/images/placeholders/1280x960.png',
        price: '100',
        post_date: 'April 4th, 2017'
      },
    ])
  }
}
</script>

<style scoped>
  .list-container {
    width: 70%;
  }

  .filter-container {
    width: 30%;
    max-width: 300px;
  }

  .body-container {
    display: flex;
    flex-direction: row;
    margin: 20px;
    margin-bottom: 100px;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .filter-container {
      width: 90%;
      max-width: 365px;
      margin-bottom: 20px;
    }

    .list-container {
      width: 90%;
    }

    .body-container {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
</style>
