<script>
  import TestSummary from '../components/notuse/TestSummary.vue'
  import CartProduct from '../components/products/CartProduct.vue'
  import AllCartsProducts from '../components/products/AllCartsProducts.vue'

  export default {
    components: { TestSummary, CartProduct, AllCartsProducts },
    data() {
      this.products
      return { value: '', message: null, recension: '' }
    }
  }
</script>

<template>
  <h3>Your cart:</h3>
  <AllCartsProducts />
  <h5>Write an review</h5>
  <form @submit="onSubmit">
    <input v-model="recension" />
    <input :disabled="recension.length === 0" type="submit" value="Send" />
  </form>
  <p>{{ message }}</p>
</template>

<style scoped>
  h5 {
    margin-top: 20px;
  }
  p {
    color: black;
  }
</style>
