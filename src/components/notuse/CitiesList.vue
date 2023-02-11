<!-- <script>
  export default {
    created() {
      fetch('https://fakestoreapi.com/products/')
        .then((response) => response.json())
        .then((product) => {
          this.product = product
        })
    },
    data() {
      return {
        product: null
      }
    }
  }
</script> -->

<template>
  <ul>
    <li :key="product.id" v-for="product in products">{{ product.title }}</li>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: null
      }
    },
    methods: {
      async fetchData() {
        try {
          const products = await axios.get('https://fakestoreapi.com/products/')
          this.product = products.data
        } catch (result) {
          console.log(result)
        }
      }
    }
  }
</script>
