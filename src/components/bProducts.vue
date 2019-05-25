<template>
  <div class="products" id="products">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products page</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, saepe!
            </p>
          </div>
          <div class="col-md-6">
            <img src="../../public/img/svg/product.svg" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    <hr>
    <h3>Basic CRUD (create/read/update/delete)</h3>
    <div class="product-test">
      <div class="form-group">
        <input type="text" placeholder="product name" v-model="products.name" class="form-control">
      </div>
      <div class="form-group">
        <input type="text" placeholder="price" v-model="products.price" class="form-control">
      </div>
      <div class="form-group">
        <button @click="saveData" class="btn btn-primary">Lưu</button>
      </div>
    </div>
  </div>
</template>

<script>
import {db, fb} from '../firebase'
export default {
  name: 'Products',
  data () {
    return {
      products: {
        name: null,
        price: null
      }
    }
  },
  methods: {
    saveData () {
      // Add a new document with a generated id.
      db.collection('products').add(this.products)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          this.resetData()
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    resetData () {
      // reset data khi submit form
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .img-wrapp{
    position: relative;
  }
  .img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
  }
  .img-wrapp span.delete-img:hover{
    cursor: pointer;
  }
</style>
