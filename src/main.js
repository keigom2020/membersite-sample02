import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import firebase from 'firebase'

require('@/assets/scss/main.scss')

// firebase-ui
// var firebase = require("firebase");
// var firebaseui = require("firebaseui-ja");
require("firebaseui-ja/dist/firebaseui.css");

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCE3dVZUeSa6NStcVGE5PROlFw5vPXB2UY",
  authDomain: "membersite-sample02-27020.firebaseapp.com",
  projectId: "membersite-sample02-27020",
  storageBucket: "membersite-sample02-27020.appspot.com",
  messagingSenderId: "743011557983",
  appId: "1:743011557983:web:a221241c2a71a1ad9471ea",
  measurementId: "G-KTE96GBB8W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
