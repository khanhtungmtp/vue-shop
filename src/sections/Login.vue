<template>
  <div class="login">
    <!-- Modal -->
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">

          <div class="modal-body">
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Đăng nhập</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Đăng ký</a>
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">

                <h5 class="text-center">Đăng nhập</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                  <small class="form-text text-muted">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất cứ ai khác.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Mật khẩu</label>
                  <input type="password" @keyup.enter="login" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>

                <div class="form-group">
                  <button class="btn btn-primary" @click="login">Đăng nhập</button>
                </div>

              </div>
              <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">

                <h5 class="text-center">Tạo mới tài khoản</h5>

                <div class="form-group">
                  <label for="name">Họ tên</label>
                  <input type="text" v-model="name" class="form-control" id="name" placeholder="Your nice name">
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email"  v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="password">Mật khẩu</label>
                  <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                </div>

                <div class="form-group">
                  <button class="btn btn-primary" @click="register">Đăng ký</button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { fb } from '../firebase'
export default {
  name: 'Login',
  data () {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    register () {
      fb.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          window.$('#login').modal('hide')
          this.$router.replace('admin')
        })
        .catch(function (error) {
          var errorCode = error.code
          var errorMessage = error.message
          if (errorCode === 'auth/week-password') {
            alert('Mật khẩu quá yếu')
          } else {
            alert(errorMessage)
          }
          console.log(error)
        })
    },
    login () {
      fb.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          window.$('#login').modal('hide')
          this.$router.replace('admin')
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password')
          } else {
            alert(errorMessage)
          }
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
