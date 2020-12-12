import Vue from 'vue'
import Vuex from 'vuex'

// Firebase読み込み
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
    // drawer: false,
  },
  mutations: {
    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    },
    // toggleSideMenu (state) {
    //   state.drawer = !state.drawer
    // },
  },
  actions: {
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user)
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser')
    },
    logout () {
      // firebase.auth().signOut()
      if(window.confirm('ログアウトしてよろしいですか？')) {
        firebase.auth().signOut()
      }
    },
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    
    // toggleSideMenu ({ commit }) {
    //   commit('toggleSideMenu')
    // },
  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',
    uid: state => state.login_user ? state.login_user.uid : null,
    getAddressById: state => id => state.addresses.find(address => address.id === id)
  }
})