<script>
  export default {
    data() {
      return {}
    },

    methods: {},
    props: {
      image: { required: true, type: String },
      title: { required: true, type: String },
      price: { required: true, type: Number }
    }
  }
</script>

<style scoped>
  .image {
    width: 30%;
    height: 30%;
  }

  .flexContainer {
    position: relative;

    background-color: white;
  }

  .container {
    width: 300px;
    height: 300px;
    position: relative;
  }
</style>

<template>
  <div class="flexContainer container">
    <div class="image"></div>
    <h2>Added to cart</h2>
    <img class="image" :src="image" />
    <h5>{{ title }}</h5>
    <p>{{ price }} €</p>
  </div>
</template>
