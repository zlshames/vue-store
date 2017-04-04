<template>
  <nav class="panel">
    <p class="panel-heading">
      Filters
    </p>
    <div class="panel-block">
      <p class="control has-icon">
        <input v-model="searchTxt" class="input is-small" type="text" placeholder="Search">
        <span class="icon is-small">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>
    <a class="panel-block no-bottom-border">
      <span class="panel-icon">
        <i class="fa fa-sort-numeric-asc"></i>
      </span>
      Max Price:
    </a>
    <label class="panel-block">
      <slider type="success" size="medium" :value="priceValue" :max="100" :step="1" is-fullwidth @change="updateMaxPrice"></slider>
      <label>$</label>
      <input class="input slider-text" type="number" v-model="priceTxt" min="0" max="100" number />
    </label>
    <div class="panel-block">
      <button @click="resetFilter" class="button is-primary is-outlined is-fullwidth">
        Reset all filters
      </button>
    </div>
  </nav>
</template>

<script>
  import Slider from 'vue-bulma-slider'

  export default {
    components: { Slider },
    data() {
      return {
        searchTxt: '',
        priceTxt: '0',
        priceValue: 0
      }
    },
    watch: {
      searchTxt() {
        this.$store.dispatch('filterItems', {
          searchTxt: this.searchTxt,
          price: this.priceValue
        })
      },
      priceValue() {
        this.$store.dispatch('filterItems', {
          searchTxt: this.searchTxt,
          price: this.priceValue
        })
      },
      priceTxt() {
        if (isNaN(this.priceTxt)) return
        this.priceValue = Number(this.priceTxt)
      }
    },
    methods: {
      resetFilter() {
        this.searchTxt = ''
        this.priceTxt = '0',
        this.priceValue = 0

        this.$store.commit('RESET_FILTER')
      },
      updateMaxPrice(value) {
        this.priceTxt = value
        this.priceValue = Number(value)
      }
    }
  }
</script>

<style scoped>
  .input.slider-text {
    width: 60px;
    margin-left: 5px;
  }

  .control.has-icon {
    z-index: -1;
  }

  .panel-block > label {
    margin-left: 10px;
  }

  .no-bottom-border {
    border-bottom: none;
    margin-bottom: -10px;
  }

  a.panel-block:hover, label.panel-block:hover {
    background-color: inherit;
  }
</style>
