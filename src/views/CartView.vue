<script>
  import AllCartsProducts from '../components/products/AllCartsProducts.vue'

  export default {
    components: { AllCartsProducts },
    data() {
      this.products
      return { value: '', message: null, recension: '' }
    },
    methods: {
      onSubmit() {
        this.message = this.recension
        this.recension = ''
      }
    }
  }
</script>

<template>
  <h3>Your cart:</h3>
  <AllCartsProducts />
  <h5>Write an review</h5>
  <button @click="onSubmit">
    <input v-model="recension" />
    <input :disabled="recension.length === 0" type="submit" value="Send" />
  </button>
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
