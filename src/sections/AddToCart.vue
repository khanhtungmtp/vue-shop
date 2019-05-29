<template>
  <div class="add-to-cart">
    <button class="btn btn-primary">Thêm vào giỏ {{ ProductName }}</button>
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
      ProductName: this.name,
      ProductPrice: this.price,
      ProductID: this.Product_id
    }
  }
}
</script>

<style scoped>

</style>
