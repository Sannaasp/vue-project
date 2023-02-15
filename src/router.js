import { createRouter, createWebHistory } from 'vue-router'
import CartView from './views/CartView.vue'
import HomeView from './views/HomeView.vue'
import ProductView from './views/ProductView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/cart', component: CartView },
    { path: '/product-view/:index', component: ProductView, props: true }
  ]
})
