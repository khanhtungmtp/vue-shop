<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a href="#" id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">pro sidebar</a>
            <div id="close-sidabar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img class="img-responsive img-rounded" src="../../public/img/user.png" alt="User picture">
            </div>
            <div class="user-info">
                        <span class="user-name"> {{ name }}
                            <strong>{{ email }}</strong>
                        </span>
              <span class="user-role">Administrator</span>
              <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search...">
                <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class=" sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>
              <li>
                <router-link to="/admin/overview">
                  <i class="fa fa-chart-line"></i>
                  <span class="menu-text">Overview</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/products">
                  <i class="fab fa-amazon"></i>
                  <span class="menu-text">Products</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/order">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Order</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/profile">
                  <i class="fa fa-user"></i>
                  <span class="menu-text">Profile</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout()">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Đăng xuất</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2">
        <router-view/>
      </main>
      <!-- page-content" -->
    </div>
  </div>
</template>
<!-- page-wrapper -->
<script>
import Hero from './Hero'
import {fb} from '../firebase'
export default {
  name: 'Admin',
  data () {
    return {
      name: null,
      email: null
    }
  },
  components: {
    Hero
  },
  methods: {
    closeMenu () {
      window.$('.page-wrapper').toggleClass('togged')
    },
    logout () {
      fb.auth().signOut()
        .then(() => {
          this.$router.replace('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    let user = fb.auth().currentUser
    this.email = user.email
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
