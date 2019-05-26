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
    <div class="table-responsive">
      <table class="table">
        <thead>
        <tr>
          <th>Tên</th>
          <th>Giá</th>
          <th>Hành động</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products" v-bind:key="product.id">
          <td>
            {{ product.data().name }}
          </td>
          <td>
            {{ product.data().price }}
          </td>
          <td>
            <button @click="editProduct(product)" class="btn btn-warning">Sửa</button>
            <button @click="deleteProduct(product.id)" class="btn btn-danger">Xóa</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Sửa sản phẩm</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <input type="text" placeholder="product name" v-model="product.name" class="form-control">
            </div>
            <div class="form-group">
              <input type="text" placeholder="price" v-model="product.price" class="form-control">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
            <button @click="updateProduct()" type="button" class="btn btn-primary">Lưu</button>
          </div>
        </div>
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
      products: [],
      product: {
        name: null,
        price: null
      },
      activeItem: null
    }
  },
  methods: {
    watcher () {
      // phát hiện thay đổi dữ liệu khi update product
      db.collection('products').onSnapshot((querySnapshot) => {
        this.products = []
        querySnapshot.forEach((doc) => {
          this.products.push(doc)
        })
      })
    },
    updateProduct (doc) {
      db.collection('products').doc(this.activeItem).update(this.product)
        .then(() => {
          window.$('#edit').modal('hide')
          this.watcher()
          console.log('Cập nhập thành công')
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Có lỗi khi cập nhập', error)
        })
    },
    editProduct (product) {
      window.$('#edit').modal('show')
      this.product = product.data()
      this.activeItem = product.id
    },
    deleteProduct (doc) {
      if (confirm('Bạn có chắc chắn muốn xóa')) {
        db.collection('products').doc(doc).delete().then(function () {
          console.log('đã xóa')
        }).catch(function (error) {
          console.error('đã xảy ra lỗi khi xóa', error)
        })
      } else {
        console.log('đã hủy tác vụ')
      }
    },
    readData () {
      db.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // this.products.push(doc.data())
          this.products.push(doc)
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
