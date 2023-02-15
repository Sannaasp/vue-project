<script>
  import TheProductView from '../components/products/TheProductView.vue'
  export default {
    components: { TheProductView },
    data() {
      return {}
    },
    props: {
      index: {
        required: true,
        type: String
      }
    }
  }
</script>

<style></style>

<template>
  <div>
    <TheProductView :index="index" />
  </div>
</template>
