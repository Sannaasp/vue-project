<script>
  export default {
    methods: {
      addProduct(product) {
        this.$store.dispatch('addProduct', product)
        this.$emit('addToCart', product)
      }
    },

    computed: {
      getProduct() {
        return this.$store.getters.getProduct(this.index)
      }
    },
    props: {
      index: { required: true, type: String }
    }
  }
</script>

<style scoped>
  .flexContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    padding: 5%;
    background-color: white;
  }
  .buyButton {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
  }
  .container {
    max-width: 500px;
    margin: 5 5 5 5;
  }
  .products {
    align-items: row;
    padding: 0, 5rem 1rem;
    background-color: #ccc;
  }

  .bigContainer {
    display: flex;
    justify-content: column;
    flex-direction: row;
  }

  .image {
    width: 40%;
    height: 40%;
  }
</style>

<template>
  <div class="flexContainer container">
    <img class="image" :src="getProduct.image" />
    <h5>{{ getProduct.title }}</h5>
    <p>{{ getProduct.price }} €</p>
    <p>{{ getProduct.description }}</p>
  </div>
</template>
