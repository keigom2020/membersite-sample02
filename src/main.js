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
// Vue.use(VueAxios, axios)

const firebaseConfig = {
  apiKey: "AIzaSyA2LvxgSi8MCQ-5luuTfGhLoM6kHpMSgws",
  authDomain: "member-site03.firebaseapp.com",
  databaseURL: "https://member-site03.firebaseio.com",
  projectId: "member-site03",
  storageBucket: "member-site03.appspot.com",
  messagingSenderId: "130743359196",
  appId: "1:130743359196:web:3c14c696957ac28e790619",
  measurementId: "G-XLZM28XB9Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
