<template>
  <nav class="panel">
    <div class="panel-heading expantion-container">
      <p>Filters:</p><p class="found">(Items: {{ getFound }})</p>
      <p><a @click="togglePanel" class="button is-small">{{ (showPanel) ? 'hide' : 'show' }}</a></p>
    </div>
    <div v-if="showPanel">
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

      <a class="panel-block no-bottom-border">
        <span class="panel-icon">
          <i class="fa fa-tags"></i>
        </span>
        Tags: <small style="margin-left: 10px; margin-top: 2px;">(click to filter)</small>
      </a>
      <label class="panel-block">
        <div class="tag-container" ref="tagList">
          <span v-for="tag in getTags" class="tag" :name="tag" @click="toggleTag">
            {{ tag }}
          </span>
        </div>
      </label>

      <div class="panel-block">
        <button @click="resetFilter" class="button is-primary is-outlined is-fullwidth">
          Reset all filters
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
  import Slider from 'vue-bulma-slider'

  export default {
    components: { Slider },
    data() {
      return {
        showPanel: true,
        searchTxt: '',
        priceTxt: '0',
        priceValue: 0,
        activeTags: []
      }
    },
    created() {
      if (this.isMobile) {
        this.showPanel = false
      } else {
        this.showPanel = true
      }
    },
    computed: {
      isMobile() {
        return window.innerWidth < 768
      },
      getTags() {
        const items = this.$store.getters.allItems
        let tags = []

        for (let i = 0; i < items.length; i++) {
          for (let t = 0; t < items[i].tags.length; t++) {
            if (tags.indexOf(items[i].tags[t]) === -1) {
              tags.push(items[i].tags[t])
            }
          }
        }

        return tags
      },
      getFound() {
        return this.$store.getters.items.length
      }
    },
    watch: {
      searchTxt() {
        this.$store.dispatch('filterItems', {
          searchTxt: this.searchTxt,
          price: this.priceValue,
          tags: this.activeTags
        })
      },
      priceValue() {
        this.$store.dispatch('filterItems', {
          searchTxt: this.searchTxt,
          price: this.priceValue,
          tags: this.activeTags
        })
      },
      priceTxt() {
        if (isNaN(this.priceTxt)) return
        this.priceValue = Number(this.priceTxt)
      }
    },
    methods: {
      togglePanel() {
        this.showPanel = !this.showPanel
      },
      toggleTag(e) {
        const name = e.target.getAttribute("name")

        if (e.target.className.indexOf(' is-info') === -1) {
          e.target.className += ' is-info'
          this.activeTags.push(name)
        } else {
          e.target.className = e.target.className.replace(' is-info', '')
          this.activeTags.splice(this.activeTags.indexOf(name), 1)
        }

        this.$store.dispatch('filterItems', {
          searchTxt: this.searchTxt,
          price: this.priceValue,
          tags: this.activeTags
        })
      },
      resetFilter() {
        this.searchTxt = ''
        this.priceTxt = '0',
        this.priceValue = 0
        this.activeTags = []

        // Clear active tags
        const children = this.$refs.tagList.children
        for (let i = 0; i < children.length; i++) {
          if (children[i].className.indexOf(' is-info') > -1) {
            children[i].className = children[i].className.replace(' is-info', '')
          }
        }

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
  .found {
    font-size: 12px;
    color: grey;
    align-self: center;
    margin-left: -4em;
  }
  
  .control.has-icon .icon {
    z-index: 0;  
  }
  
  .expantion-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .tag-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .tag-container>.tag {
    margin: 2px;
    user-select: none;
  }

  .input.slider-text {
    width: 85px;
    margin-left: 5px;
    font-size: 14px;
    overflow: hidden;
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
  
  @media only screen and (max-width: 768px) {
    /* Mobile */
    .found {
      margin-left: -10em;
    }
  }
</style>
