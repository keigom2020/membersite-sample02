<template>
  <div id="app">
    <SideNav
      v-if="$store.state.login_user"
    ></SideNav>

    <div
      class="fixed-area"
      v-if="$store.state.login_user"
    >
      <button 
        class="btn"
        @click="logout"
      >ログアウト</button>
    </div>

    <div class="router-wrapper">
      <router-view/>
    </div>

    <footer class="footer">
      <div class="inner">
        &copy;Copyright お金の先生 2021
      </div>
    </footer>
  </div>
</template>

<script>
import firebase from 'firebase'
import SideNav from '@/components/SideNav.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    SideNav,
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
        if (this.$router.currentRoute.name === 'home') this.$router.push({ name: 'video'})
      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'home' })
      }
    })
  },
  methods: {
    ...mapActions(['setLoginUser', 'logout', 'deleteLoginUser'])
    // ...mapActions(['setLoginUser'])
  }
}
</script>

<style lang="scss">
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// .router-wrapper {
//   margin-top: 58px;
// }

.fixed-area {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  .btn {
    margin: 0 0 0;
    border: #000;
    padding: 18px 10px
  }
}
</style>
