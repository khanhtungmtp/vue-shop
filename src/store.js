import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    // giải pháp thêm sản phẩm vào mảng cart
    addToCart (state, item) {
      state.cart.push(item)
    }
  }
})
