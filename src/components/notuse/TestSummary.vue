<template>
  <div class="card">
    <h2>{{ product.name }}</h2>
    <h4 class="price">Price:${{ product.price }}</h4>
    <p class="description">Description: {{ description }}</p>
    <button class="view-product-button">View</button>
  </div>
</template>

<script>
  export default {
    props: ['product'],
    computed: {
      product_total() {
        return {}
      }
    }
  }
</script>

<style>
  .card {
    width: 80%;
    margin: 10%;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 0 5px grey;
  }
</style>
