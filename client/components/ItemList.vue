<template>
  <div class="item-container">
    <div v-for="item in items" class="for-mobile">
      <item :item="item" :toggleModal="toggleModal" />
      <item-modal :item="item" :ref="`modal${ item.id }`" :toggleModal="toggleModal" />
    </div>
    <div v-if="items.length === 0" style="width: 100%;">
      <p class="no-items">No items found!</p>
    </div>
  </div>
</template>

<script>
  import Item from 'components/Item'
  import ItemModal from 'components/ItemModal'

  export default {
    props: ['items'],
    components: {
      Item, ItemModal
    },
    methods: {
      toggleModal(id) {
        const modal = this.$refs['modal' + id][0].$el

        if (modal.className.indexOf(' is-active') > -1) {
          modal.className = modal.className.replace(' is-active', '')
        } else {
          modal.className += ' is-active'
        }
      }
    }
  }
</script>

<style scoped>
  .no-items {
    text-align: center; 
    margin-top: 2em;
    color: grey;
  }
  
  .item-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .item-container {
      justify-content: center;
    }

    .for-mobile {
      width: 100%;
    }
  }
</style>
