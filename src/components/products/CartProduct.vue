<script>
  import { useStore } from 'vuex'
  export default {
    data() {
      return {}
    },
    methods: {
      removeProduct(id) {
        this.store.dispatch('removeProduct', id)
      },
      increase(id) {
        this.store.dispatch('increase', id)
      },
      decrease(id) {
        this.store.dispatch('decrease', id)
      }
    },

    props: {
      image: { required: true, type: String },
      title: { required: true, type: String },
      description: { required: true, type: String },
      price: { required: true, type: Number }
    }
  }
</script>

<style scoped>
  .image {
    width: 10%;
    height: 10%;
  }

  .flexContainer {
    padding: 5%;

    width: 50%;
    background-color: white;
  }
</style>

<template>
  <div class="flexContainer">
    <div class="image"></div>
    <img class="image" :src="image" />
    <h5>{{ title }}</h5>
    <p>{{ description }}</p>
    <p>{{ price }} €</p>
  </div>
</template>
