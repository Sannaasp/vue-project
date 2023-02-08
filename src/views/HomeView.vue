<!-- <template>
  <div class="home">
    <div class="product-cards-container"></div>
  </div>
</template>
<script>
  import products from '../products.js'
  import TestSummary from '../components.TestSummay.vue'

  export default {
    name: 'Home',
    components: { products, TestSummary},
    data() {
      return: {
        products: products
      }
    }
  }
</script>

<style>
  .products-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style> -->

<template>
  <TheProducts />
</template>

<script>
  import TheProducts from '../components/products/AllProducts.vue'

  export default {
    components: { TheProducts },
    data() {
      return {}
    }
  }
</script>
