import axios from 'axios'

export default {
  async fetchData() {
    try {
      const product = await axios.get('https://fakestoreapi.com/products/')
      return (this.product = product.data)
    } catch (result) {
      console.log(result)
    }
  }
}
