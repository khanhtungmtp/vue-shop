<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-5">Our Products List</h1>
      <div class="row">

        <div class="col-md-4" v-for="(product, index) in products" :key="index">
          <div class="card product-item">

            <carousel :perPage="1">
              <slide v-for="(image, index) in product.images" :key="index">
                <img :src="image" class="card-img-top" alt="..." width="250px">
              </slide>
            </carousel>

            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name }}</h5>
                <h5 class="card-priceS">{{ product.price | currency }}</h5>
              </div>
        <!-- :product-image, :product-id, :price, :name là props của componets AddToCart -->
              <add-to-cart
                :product-id="product.id"
                :price="product.price"
                :name="product.name"
                :image="getImage(product.images)">
              </add-to-cart>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {db} from '../firebase'

export default {
  name: 'Products-list',
  data () {
    return {
      products: []
    }
  },
  methods: {
    getImage (images) {
      // console.log(images)
      // do sản phẩm có nhiều hình, nên chọn 1 hình thứ 1 đại diện thôi
      return images[0]
    }
  },
  firestore () {
    return {
      products: db.collection('products')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .products {
    margin-top: 7rem;
    background: #f2f2f2;
    padding-bottom: 3rem;
  }
</style>
