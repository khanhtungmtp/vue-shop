import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let cart = window.localStorage.getItem('cart')
export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : []
  },
  mutations: {
    /** giải pháp thêm sản phẩm vào mảng cart
     * nếu chưa có sản phẩm thì thêm vào mảng, có rồi thì tăng số lượng
     * productID là data(), ko phải là props
     * */
    addToCart (state, item) {
      // tìm trong mảng cart, nếu id trong mảng trùng với id sản phảm vừa thêm
      let found = state.cart.find(product => product.productID === item.productID)
      if (found) {
        found.productQuantity++
      } else {
        state.cart.push(item)
      }
      this.commit('saveData')
    },
    saveData (store) {
      window.localStorage.setItem('cart', JSON.stringify(store.cart))
    }
  }
})
