<template>
  <div class="item-container">
    <div class="card" v-for="item in items">
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
              <span class="tag is-success is-medium">$ {{item.price}}</span>
            </div>
          </div>
        </div>

        <div class="content">
          <p>{{ item.description  }}</p>
          <small>{{ item.post_date }}</small>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">More Details</a>
        <a class="card-footer-item">Add to Cart</a>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items']
  }
</script>

<style scoped>
  .item-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
    width: 250px;
    margin-left: 20px;
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

  @media only screen and (max-width: 768px) {
    /* Mobile */
    .card {
      width: 90%;
    }

    .item-container {
      justify-content: center;
    }
  }

  .content > small {
    font-size: 12px;
  }

  .content > p {
    font-size: 14px;
  }

  .card-footer {
    font-size: 16px;
  }
</style>
