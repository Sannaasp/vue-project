<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<script>
  import TheHeader from './components/page/TheHeader.vue'

  import TheFooter from './components/page/TheFooter.vue'

  export default {
    components: {
      TheHeader,
      TheFooter
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  $background-color: #f0f2f5;

  body {
    background-color: $background-color;
  }
</style>
