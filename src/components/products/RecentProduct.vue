<script>
  export default {
    data() {
      return {}
    },
    //   // watch: {
    //   //   counter(sum),
    // },
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
  }
</style>

<template>
  <div class="flexContainer">
    <div class="image"></div>
    <h2>Tillagd i varukorg</h2>
    <img class="image" :src="image" />
    <h5>{{ title }}</h5>
    <p>{{ price }} kr</p>
  </div>
</template>
