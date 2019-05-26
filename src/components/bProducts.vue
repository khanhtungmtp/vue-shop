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
    <h3 class="d-inline-block">Products list</h3>
    <button @click="addNew" class="btn btn-primary float-right">Thêm mới</button>
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
            {{ product.name }}
          </td>
          <td>
            {{ product.price }}
          </td>
          <td>
            <button @click="editProduct(product)" class="btn btn-warning">Sửa</button>
            <button @click="deleteProduct(product)" class="btn btn-danger">Xóa</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div class="row">
              <!-- main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
                </div>

                <div class="form-group">
                  <vue-editor v-model="product.description"></vue-editor>
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr>

                <div class="form-group">
                  <input type="text" placeholder="Product price" v-model="product.price" class="form-control">
                </div>

                <div class="form-group">
                  <input type="text" @keyup.188="addTag" placeholder="Product tags" v-model="tag" class="form-control">

                  <div class="d-flex">
                    <p v-for="tag in product.tags">
                      <span class="p-1">{{tag}}</span>
                    </p>

                  </div>
                </div>
                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input type="file" @change="uploadImage" class="form-control">
                </div>

                <div class="form-group d-flex">
                  <div class="p-1" v-for="(image, index) in product.images">
                    <div class="img-wrapp">
                      <img :src="image" alt="" width="80px">
                      <span class="delete-img" @click="deleteImage(image,index)">X</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="addProduct()" type="button" class="btn btn-primary" v-if="modal == 'new'">Save changes
            </button>
            <button @click="updateProduct()" type="button" class="btn btn-primary" v-if="modal == 'edit'">Apply
              changes
            </button>
          </div>
        </div>
      </div>
    </div>/
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
        description: null,
        price: null,
        tags: [],
        images: []
      },
      activeItem: null,
      modal: null,
      tag: null
    }
  },
  firestore () {
    return {
      products: db.collection('products')
    }
  },
  methods: {
    addNew () {
      window.$('#product').modal('show')
    },
    addProduct () {
      // thêm các trường sản phẩm vào mảng products
      this.$firestore.products.add(this.product)
      window.$('#product').modal('hide')
    },
    deleteProduct (doc) {
      window.Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa?',
        text: 'Dữ liệu không thể khôi phục!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Có, tôi muốn xóa!'
      }).then((result) => {
        if (result.value) {
          this.$firestore.products.doc(doc['.key']).delete()
          window.Toast.fire({
            type: 'success',
            title: 'Xóa thành công'
          })
        }
      })
    }
  },
  created () {
    // mới đầu vô là lấy all data products về
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
