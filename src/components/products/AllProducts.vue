<script>
  import TheProduct from './TheProduct.vue'

  import API from '../../../API.js'
  import RecentProduct from './RecentProduct.vue'

  export default {
    components: { TheProduct, RecentProduct },
    data() {
      return {
        recentProduct: null,
        recentTimer: null,
        productView: null
      }
    },
    methods: {
      addToCart(addedObject) {
        this.recentProduct = addedObject
      },
      async api() {
        let products = await API.fetchData()
        this.$store.dispatch('setProducts', products)
        console.log(this.products)
      }
    },
    computed: {
      getProducts() {
        return this.$store.getters.getProducts
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
</style>

<template>
  <div class="flexContainer">
    <RecentProduct
      :image="recentProduct.image"
      :title="recentProduct.title"
      :price="recentProduct.price"
      v-if="recentProduct"
    />
    <template v-for="(product, index) in getProducts" :key="product.name">
      <TheProduct
        @add-to-cart="addToCart"
        :image="product.image"
        :title="product.title"
        :price="product.price"
        :index="index"
      />
    </template>
  </div>

  <p>{{ sum }}</p>
</template>
