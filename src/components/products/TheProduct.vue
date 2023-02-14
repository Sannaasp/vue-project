<script>
  export default {
    methods: {
      addProduct(product) {
        this.$store.dispatch('addProduct', product)
        this.$emit('addToCart', product)
      }
    },
    props: {
      image: { required: true, type: String },
      id: { required: false, type: Number },
      title: { required: true, type: String },
      price: { required: true, type: Number },
      description: { required: true, type: String }
    }
  }
</script>

<style scoped>
  /* .image {
    height: 100px;
    width: 100px;
    background-color: black;
  } */
  .flexContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* border: 1px solid black;
    box-shadow: 0 0 0 1px; */
    flex-direction: row;
    padding: 5%;
    background-color: white;
  }
  .buyButton {
    justify-content: center;
  }
  .container {
    /* margin-bottom: 10%; */
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
    /* flex-wrap: wrap; */
    justify-content: column;
    flex-direction: row;
  }

  .image {
    width: 30%;
    height: 30%;
  }
</style>

<template>
  <div class="flexContainer container">
    <!-- <div class="image"></div> -->
    <h2>{{ id }}</h2>
    <img class="image" :src="image" />
    <h5>{{ title }}</h5>
    <p>{{ price }} €</p>
    <p>{{ description }}</p>
    <div class="buyButton">
      <button
        class="btn btn-dark"
        @click="addProduct({ title, price, image, description, id })"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>
