import Vuex from 'vuex'
export default new Vuex.Store({
  state: {
    cart: [],
    products: []
  },

  mutations: {
    addProduct(state, product) {
      state.cart.push(product)
    },
    removeProduct(state, index) {
      state.cart.splice(index, 1)
    },
    setProducts(state, products) {
      state.products = products
    }
  },

  actions: {
    addProduct({ commit }, product) {
      commit('addProduct', product)
    },
    removeProduct({ commit }, index) {
      commit('removeProduct', index)
    },
    setProducts({ commit }, products) {
      commit('setProducts', products)
    }
  },
  getters: {
    getCart: (state) => {
      return state.cart
    },
    getTotal: (state) => {
      let total = 0
      for (let i = 0; i < state.cart.length; i++) {
        const product = state.cart[i]
        total += product.price
      }
      return total
    },
    getProducts: (state) => {
      return state.products
    },
    getProduct: (state) => (index) => {
      return state.products[index]
    }
  }
})
