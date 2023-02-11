import { createStore } from 'vuex'

const mutations = {
    increment(state) {
      state.product += 1
    },
    addObject(state, object) {
      state.counter.push(object)
    }
  },
  getters = {},
  state = {
    counter: []
  }

export default createStore({ mutations, state, getters, strict: true })
