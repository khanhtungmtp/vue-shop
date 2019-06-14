<template>
    <div class="mini-cart">
      <!-- Modal -->
      <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Giỏ hàng của bạn</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ul>
                <li v-for="(item, index) in this.$store.state.cart" v-bind:key="index">
                  <img :src="item.productImage" alt="" width="80px" class="align-self-center">
                  <div class="media-body">
                    <h5 class="mt-0">{{ item.productName }}</h5>
                    <p class="mt-0">{{ item.productPrice | currency }}</p>
                    <p class="mt-0">{{ item.productQuantity }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Tiếp tục mua hàng</button>
              <button type="button" class="btn btn-primary">Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MiniCart'
}
</script>

<style scoped>

</style>
