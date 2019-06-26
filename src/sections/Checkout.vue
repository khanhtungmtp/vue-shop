<template>
    <div class="checkout">
      <navbar></navbar>
      <div class="container mt-5 pt-5">
        <div class="row">
          <div class="col-md-9">
            <h4>Thanh toán</h4>
            <ul>
              <li v-for="(item,index) in $store.state.cart" v-bind:key="index" class="media">
                <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                <div class="media-body">
                  <h5 class="mt-0">{{ item.productName }}</h5>
                  <p class="mt-0">{{ item.productPrice | currency }}</p>
                  <p class="mt-0">Số lượng {{ item.productQuantity}}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-md-3">Tổng giá</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Checkout.vue'
}
</script>

<style scoped>

</style>
