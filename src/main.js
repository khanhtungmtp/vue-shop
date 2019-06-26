import Vue from 'vue'
import App from './App'
import router from './router'

import jQuery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import './assets/admin.scss'
import {fb} from './firebase'
import VueFirestore from 'vue-firestore'
import Swal from 'sweetalert2'
import VueCarousel from 'vue-carousel'
import Vue2Filters from 'vue2-filters'
import store from './store'
Vue.use(Vue2Filters)
Vue.use(VueCarousel)
Vue.use(VueFirestore, {
  key: 'id', // the name of the property. Default is '.key'.
  enumerable: true // whether it is enumerable or not. Default is true.
})

window.Swal = Swal
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

window.Toast = Toast

Vue.use(VueFirestore)

window.$ = window.jQuery = jQuery

Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.component('add-to-cart', require('./sections/AddToCart.vue').default)
Vue.component('mini-cart', require('./sections/MiniCart.vue').default)
Vue.component('checkout', require('./sections/Checkout.vue').default)
Vue.config.productionTip = false
let app = ''
fb.auth().onAuthStateChanged(function (user) {
  // đăng nhập rồi thì vào thẳng admin
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      store,
      router,
      render: h => h(App)
    })
  }
})
