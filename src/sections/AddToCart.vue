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
    Product_id: String
  },
  data () {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        productID: this.Product_id
      }
    }
  },
  methods: {
    addTocart () {
      window.$('#miniCart').modal('show')
      this.$store.commit('addToCart', this.item)
    }
  }
}
</script>

<style scoped>

</style>
