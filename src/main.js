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
Vue.config.productionTip = false
let app = ''
fb.auth().onAuthStateChanged(function (user) {
  // đăng nhập rồi thì vào thẳng admin
  if (!app) {
    new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
})
