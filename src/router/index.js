import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home'
import About from '../components/About'
import Admin from '../components/Admin'
import Products from '../sections/Products'
import Overview from '../components/Overview'
import bProducts from '../components/bProducts'
import Order from '../components/Order'
import {fb} from '../firebase'
import Profile from '../components/Profile'
import Checkout from '../sections/Checkout'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {requiresAuth: true},
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: Overview
        },
        {
          path: 'products',
          name: 'bProducts',
          component: bProducts
        },
        {
          path: 'order',
          name: 'order',
          component: Order
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser
  if (requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})
export default router
