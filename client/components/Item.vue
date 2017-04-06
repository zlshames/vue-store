<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="item.image" alt="Image">
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <div class="item-header">
            <p class="title">{{ item.name }}</p>
            <span class="tag is-success is-medium">$ {{ item.price }}</span>
          </div>
        </div>
      </div>

      <div class="content">
        <p>
          {{
            (item.description.length > 70) ?
            item.description.substring(0, 70) + '...' :
            item.description
          }}
        </p>
        <small>{{ item.post_date }}</small>

        <div class="tag-container">
          <span v-for="tag in item.tags" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <footer class="card-footer">
      <a class="card-footer-item" @click="toggleModal(item.id)">More Details</a>
      <a class="card-footer-item" @click="$store.dispatch('addToCart', item)">Add to Cart</a>
    </footer>
  </div>
</template>

<script>
  export default {
    props: ['item', 'toggleModal']
  }
</script>

<style scoped>
  .tag-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: -5px;
  }

  .tag-container>.tag {
    margin: 3px;
    user-select: none;
  }

  .item-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .item-header > .tag {
    margin-top: 3px;
  }

  .card {
    min-width: 250px;
    max-width: 250px;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 3px;
  }

  .card-content {
    padding: 0.5em;
    padding-bottom: 0.2em;
  }

  .card-content > .media {
    margin-bottom: 0;
  }

  img {
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }

  .content > small {
    font-size: 12px;
  }

  .content > p {
    font-size: 14px;
    margin-bottom: 0;
  }

  .card-footer {
    font-size: 16px;
  }

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .card {
      width: 100%;
      max-width: 100%;
    }
  }
</style>
