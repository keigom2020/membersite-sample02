import Vue from 'vue'
import Vuex from 'vuex'

// Firebase読み込み
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
  },
  mutations: {
    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    },
  },
  actions: {
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user)
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser')
    },
    logout () {
      if(window.confirm('ログアウトしてよろしいですか？')) {
        firebase.auth().signOut()
      }
    },
    login () {
      // GoogleアカウントでのログインかID/PWでのログインかを判定する
      // クリックされたボタンのクラスで判別する？ .googleBtn, .mailBtnのような、、、
      // if () {

      // } else {

      // }
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    
    // mailLogin() {
    //   console.log(this.email);
    //   console.log(this.password);
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(this.email, this.password)
    //     .then(function(res) {
    //       console.log(res)
    //       alert("ログインできました");
    //     })
    //     .catch(function (error) {
    //       alert("ログインできません（" + error.message + "）");
    //     });
    // },

  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',
    uid: state => state.login_user ? state.login_user.uid : null,
    getAddressById: state => id => state.addresses.find(address => address.id === id)
  }
})