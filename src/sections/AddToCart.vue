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
        ProductName: this.name,
        ProductPrice: this.price,
        ProductID: this.Product_id
      }
    }
  },
  methods: {
    addTocart () {
      this.$store.commit('addToCart', this.item)
    }
  }
}
</script>

<style scoped>

</style>
