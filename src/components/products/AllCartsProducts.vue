<script>
  import CartProduct from './CartProduct.vue'
  export default {
    components: { CartProduct },
    data() {
      return {
        products: [],
        cart: []
      }
    },
    computed: {
      getCart() {
        return this.$store.getters.getCart
      },
      getTotal() {
        return this.$store.getters.getTotal
      }
    },
    methods: {
      removeProduct(index) {
        this.$store.dispatch('removeProduct', index)
      },
      cartTotal(price) {
        this.$store.dispatch('CartTotal', price)
      }

      // increase(id) {
      //   this.store.dispatch('increase', id)
      // },
      // decrease(id) {
      //   this.store.dispatch('decrease', id)
      // }
    }

    // props: {
    //   image: { required: true, type: String },
    //   title: { required: true, type: String },
    //   description: { required: true, type: String },
    //   price: { required: true, type: Number }
    // }
  }
</script>

<style scoped>
  .image {
    width: 10%;
    height: 10%;
  }

  .flexContainer {
  }
</style>

<template>
  <div class="" v-for="(product, index) in getCart" :key="product.name">
    <CartProduct
      :image="product.image"
      :title="product.title"
      :price="product.price"
      :description="product.description"
      @add-to-cart="addToCart"
    />
    <button class="btn btn-dark" @click="removeProduct(index)" type="button">
      Remove product
    </button>
  </div>
</template>
