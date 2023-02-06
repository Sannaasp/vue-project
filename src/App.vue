<script>
  import CitiesList from './components/CitiesList.vue'
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    components: {
      CitiesList,
      HelloWorld
    },
    data() {
      return {
        message: 'Kallekalas',
        jesus: 'hej',
        mattias: 'söt'
      }
    }
  }
</script>

<template>
  <HelloWorld msg="Hello World!" />
  <CitiesList />
  <h1 class="black">Hej sanna, jag är en H1:a</h1>
  <h2>{{ message }}</h2>
  <input type="button" @click="onClick" value="Hej" />
</template>

<style>
  .black {
    color: red;
  }
</style>
