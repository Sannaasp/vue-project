<script>
  export default {
    emits: ['addToCart'],
    methods: {
      addProduct(product) {
        this.$store.dispatch('addProduct', product)
        this.$emit('addToCart', product)
      }
    },
    props: {
      image: { required: true, type: String },
      index: { required: true, type: Number },
      title: { required: true, type: String },
      price: { required: true, type: Number },
      description: { required: true, type: String }
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
    margin-bottom: 5px;
  }
  .container {
    max-width: 500px;
    margin: 5 5 5 5;
    display: flex;
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
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
</style>

<template>
  <div class="flexContainer container">
    <img class="image" :src="image" />
    <h5>{{ title }}</h5>
    <p>{{ price }} €</p>
    <div class="buttonContainer">
      <div class="buyButton">
        <RouterLink :to="`/product-view/${index}`">
          <button class="btn btn-dark">View more</button>
        </RouterLink>

        <button
          class="btn btn-dark"
          @click="addProduct({ title, price, image, description, id })"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
