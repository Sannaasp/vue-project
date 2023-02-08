<script>
  export default {
    data() {
      return {}
    },
    props: {
      name: { required: true, type: String },
      price: { required: true, type: Number },
      description: { required: true, type: String }
    }
  }
</script>

<style scoped>
  .image {
    height: 100px;
    width: 100px;
    background-color: black;
  }
  .flexContainer {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    border-style: solid;
    border-color: black;
    flex-direction: column;
  }
  .buyButton {
    justify-content: center;
  }
  .container {
    justify-content: space-around;
    margin-bottom: 10%;
  }
  .products {
    align-items: row;
    padding: 0, 5rem 1rem;
    background-color: #ccc;
  }

  .bigContainer {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<template>
  <div class="flexContainer">
    <div class="image"></div>
    <h5>{{ name }}</h5>
    <p>{{ price }} kr</p>
    <p>{{ description }}</p>
    <div class="buyButton">
      <button @click="addToCart(product)">Add do cart</button>
    </div>
  </div>
</template>
