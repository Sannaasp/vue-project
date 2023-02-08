<script>
  import products from '../../../products.js'
  import TheProduct from './TheProduct.vue'
  export default {
    components: { TheProduct },
    data() {
      return {
        products,
        sum: 0
      }
    },
    methods: {
      addToCart(product) {
        this.sum += product.price
      }
    }
  }
</script>

<style scoped>
  .flexContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 10%;

    /* justify-content: center; */
    /* border-style: solid;
    border-color: black; */
  }

  .container {
    /* justify-content: space-around; */
    margin-bottom: 10%;
    width: 500px;
  }

  /* .bigContainer {
    display: flex;
    flex-wrap: wrap;
  } */
</style>

<template>
  <div class="container flexContainer">
    <div class="" v-for="product in products" :key="product.name">
      <TheProduct
        :name="product.name"
        :price="product.price"
        :description="product.description"
      />
    </div>
  </div>

  {{ sum }}
  {{ total }}
</template>
