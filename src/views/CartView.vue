<template>
  <div>
    <input :disabled="value === 1" @click="decrease" type="button" value="+" />
    <input @click="increase" type="button" value="-" />
    <input @click="remove" type="button" value="Ta bort" />
    <p>{{ value }}</p>
  </div>
</template>

<script>
  import TestSummary from '../components/notuse/TestSummary.vue'

  export default {
    components: { TestSummary },
    data() {
      this.products
      return { value: 1 }
    },
    methods: {
      increase() {
        this.value++
      },
      decrease() {
        this.value--
      },
      remove() {
        this.value = ''
      }
    }
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    background-color: darkblue;
  }
  nav {
    height: 100%;
  }
  p {
    font-weight: normal;
    color: white;
  }
</style>
