<template>
  <div class="add-to-cart">
    <button class="btn btn-primary" @click="addTocart">Thêm vào giỏ</button>
  </div>
</template>

<script>
export default {
  name: 'AddToCart',
  props: {
    name: String,
    price: String,
    image: String,
    productId: String
  },
  data () {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        productImage: this.image,
        productID: this.productId,
        productQuantity: 1
      }
    }
  },
  methods: {
    addTocart () {
      window.$('#miniCartCheckout').modal('show')
      this.$store.commit('addToCart', this.item)
    }
  }
}
</script>

<style scoped>

</style>
