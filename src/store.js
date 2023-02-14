import Vuex from 'vuex'
export default new Vuex.Store({
  state: {
    cart: [],
    total: 0
  },

  mutations: {
    addProduct(state, product) {
      state.cart.push(product)
    },
    removeProduct(state, index) {
      state.cart.splice(index, 1)
    }
    // cartTotal(state, price) {
    //   state.total.(price)
    // }
  },

  actions: {
    addProduct({ commit }, product) {
      commit('addProduct', product)
    },
    removeProduct({ commit }, index) {
      commit('removeProduct', index)
    }
    // cartTotal({ commit }, price) {
    //   commit('cartTotal', price)
    // }
    // increase({ commit }, id) {
    //   commit('increase', id)
    // },
    // decrease({ commit }, id) {
    //   commit('decrease', id)
    // },
    // total({ commit }, price) {
    //   commit('total', price)
    // }
  },
  getters: {
    getCart: (state) => {
      return state.cart
    }
    // cartTotal(state) {
    //   return state.cartProducts.reduce(
    //     (total, product) => total + product.price * product.quantity,
    //     0
    //   )
    // }
    // getTotal: (state) => {
    //   let sum = 0
    //   state.sum.map(() => {
    //     sum += product.price
    //   })
    //   return total
    // }
  }
})

// export default createStore({ mutations, state, getters, actions, strict: true })
