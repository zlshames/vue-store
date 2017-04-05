<template>
  <div class="item-container">
    <div v-for="item in items" class="for-mobile">
      <item :item="item" :toggleModal="toggleModal" />
      <item-modal :item="item" :ref="`modal${ item.id }`" :toggleModal="toggleModal" />
    </div>
  </div>
</template>

<script>
  import Item from './Item'
  import ItemModal from './ItemModal'

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
  .item-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
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
