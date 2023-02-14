<script>
  // import products from '../../../products.js'
  import TheProduct from './TheProduct.vue'
  // import store from '../../store.js'
  import API from '../../../API.js'
  import RecentProduct from './RecentProduct.vue'

  export default {
    components: { TheProduct, RecentProduct },
    data() {
      return {
        products: [],
        recentProduct: null,
        recentTimer: null
      }
    },
    methods: {
      addToCart(addedObject) {
        this.recentProduct = addedObject
      },
      async api() {
        this.products = await API.fetchData()
        console.log(this.products)
      }
    },
    mounted() {
      this.api()
    },
    watch: {
      recentProduct() {
        if (this.recentTimer) {
          clearTimeout(this.recentTimer)
        }
        this.recentTimer = setTimeout(() => {
          this.recentProduct = null
          this.recentTimer = null
        }, 3000)
      }
    }
  }
</script>

<style scoped>
  .flexContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10%;
  }

  /* .container {
    margin-bottom: 10%;
    width: 500px;
  } */
</style>

<template>
  <div class="flexContainer">
    <!-- <div class="container"> -->
    <RecentProduct
      :image="recentProduct.image"
      :title="recentProduct.title"
      :price="recentProduct.price"
      v-if="recentProduct"
    />
    <template v-for="product in products" :key="product.name">
      <TheProduct
        :image="product.image"
        :title="product.title"
        :price="product.price"
        :description="product.description"
        @add-to-cart="addToCart"
      />
    </template>
  </div>

  <p>{{ sum }}</p>
</template>
