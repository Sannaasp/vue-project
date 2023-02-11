<script>
  export default {
    data() {
      return {
        sum: 0
      }
    },
    //   // watch: {
    //   //   counter(sum),
    // },
    methods: {
      addToCart(product) {
        this.sum += product.price(Math.round)
        this.$emit(`add-to-cart ${product}`)
      }
    },
    props: {
      image: { required: true, type: String },
      id: { required: true, type: Number },
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
    /* justify-content: center; */
    border-style: solid;
    border-color: black;
    flex-direction: row;
    padding: 5%;
  }
  .buyButton {
    justify-content: center;
  }
  .container {
    /* justify-content: space-around; */
    margin-bottom: 10%;
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
  <div class="flexContainer">
    <div class="image"></div>
    <h2>{{ id }}</h2>
    <img class="image" :src="image" />
    <h5>{{ title }}</h5>
    <p>{{ price }} kr</p>
    <p>{{ description }}</p>
    <div class="buyButton">
      <button @click="this.$emit('addToCart', { title, price, image })">
        Add to cart
      </button>
    </div>
  </div>
</template>
