import Vue from 'vue'
import App from './App'
import router from './router'

import jQuery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'

window.$ = window.jQuery = jQuery
/* eslint-disable no-new */
Vue.component('Navbar', require('./components/Navbar.vue').default)
/* eslint-disable no-new */
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
