import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

require('@/assets/scss/main.scss')

// firebase-ui
// var firebase = require("firebase");
// var firebaseui = require("firebaseui-ja");
require("firebaseui-ja/dist/firebaseui.css");

Vue.config.productionTip = false

const firebaseConfig = {
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
