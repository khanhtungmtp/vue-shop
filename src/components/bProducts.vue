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
        <input type="text" placeholder="product name" v-model="product.name" class="form-control">
      </div>
      <div class="form-group">
        <input type="text" placeholder="price" v-model="product.price" class="form-control">
      </div>
      <div class="form-group">
        <button @click="saveData" class="btn btn-primary">Lưu</button>
      </div>
    </div>
    <hr>
    <h3>Products list</h3>
    <table>
      <thead>
      <tr>
        <th>Tên</th>
        <th>Giá</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="product in products">
          <td>
              {{ product.name }}
          </td>
          <td>
            {{ product.price }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {db, fb} from '../firebase'
export default {
  name: 'Products',
  data () {
    return {
      products: [],
      product: {
        name: null,
        price: null
      }
    }
  },
  methods: {
    readData () {
      db.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.products.push(doc.data())
        })
      })
    },
    saveData () {
      // Add a new document with a generated id.
      db.collection('products').add(this.product)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          this.readData() // realtime data
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    resetData () {
      // reset data khi submit form
      // Object.assign(this.$data, this.$options.data.apply(this))
    }
  },
  created () {
    // mới đầu vô là lấy all data products về
    this.readData()
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
