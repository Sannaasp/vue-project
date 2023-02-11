<template>
  <div>
    <input :disabled="value === 1" @click="decrease" type="button" value="1" />
    <input @click="decrease" type="button" value="Remove" />
    <input @click="increase" type="button" value="Add" />
    <p>{{ value }}</p>
  </div>
  <h3>Totalt:</h3>
  <h5>Skriv en recension</h5>
  <form @submit="onSubmit">
    <input v-model="recension" />
    <input :disabled="recension.length === 0" type="submit" value="Skicka" />
  </form>
  <p>{{ message }}</p>
</template>

<script>
  import TestSummary from '../components/notuse/TestSummary.vue'
  // import { mapState } from 'vuex'
  // import store from '../store'

  export default {
    components: { TestSummary },
    data() {
      this.products
      return { value: '', message: null, recension: '' }
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
      },
      onSubmit() {
        this.message = this.recension
        event.preventDefault()
      }
      // computed: {
      //   ...mapState([addObject])
      // }
      // computed: {
      //   addObject() {
      //     this.$store.commit('addObject')
      //   }
      // }
    }
  }
</script>

<style scoped>
  nav {
    height: 100%;
  }
  p {
    font-weight: normal;
    color: white;
  }
</style>

<!-- import { mapState, mapGetters, mapActions } from 'vuex'; export default {
computed: { ...mapState(['count']), ...mapGetters(['count']) }, someValue() {
return this.$store.state.someValue } -->
