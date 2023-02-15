<script>
  import { onMounted } from 'vue'
  import API from '../../../API.js'
  import TheProductView from './TheProductView.vue'

  export default {
    components: { TheProductView },
    props: { index: { required: true, type: String } },
    computed: {
      getProduct() {
        return this.$store.getters.getProduct(this.index)
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

  .container {
    margin-bottom: 10%;
    width: 500px;
  }
</style>

<template>
  <div class="flexContainer">
    <div class="container">
      <TheProductView
        :image="getProduct.image"
        :title="getProduct.title"
        :price="getProduct.price"
        :description="getProduct.description"
      />
    </div>
  </div>
</template>
