import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home'
import About from '../components/About'
import Admin from '../components/Admin'
import Products from '../sections/Products'

Vue.use(Router)

export default new Router({
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
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
