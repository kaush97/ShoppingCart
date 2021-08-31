import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cart from '../views/cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/myOrders',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
