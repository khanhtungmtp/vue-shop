import Vue from 'vue'
import App from './App'
import router from './router'

import jQuery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'

window.$ = window.jQuery = jQuery
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
