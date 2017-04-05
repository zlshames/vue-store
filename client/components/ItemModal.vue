<template>
  <div class="modal">
    <div @click="toggleModal(item.id)" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">More Details</p>
        <button @click="toggleModal(item.id)" class="delete"></button>
      </header>
      <section class="modal-card-body">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="item.image" alt="Image">
            </figure>
            <span class="tag is-success is-medium">$ {{ item.price }}</span>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ item.name }}</strong>
                <br>
                {{ item.description }}
              </p>
            </div>
          </div>
        </article>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-success"
          @click="$store.dispatch('addToCart', item); toggleModal(item.id)">
          Add to Cart
        </a>
        <a @click="toggleModal(item.id)" class="button">Close</a>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item', 'toggleModal']
  }
</script>

<style scoped>
  .modal-background {
    background-color: rgba(10,10,10,.65)
  }
  
  .content > p {
    font-size: 14px;
    margin-bottom: 0;
  }
</style>
