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
  apiKey: "AIzaSyAPUlUwQ10TIrsDk0s2-jaiBUsCAUVNjWc",
    authDomain: "membersite-sample02.firebaseapp.com",
    projectId: "membersite-sample02",
    storageBucket: "membersite-sample02.appspot.com",
    messagingSenderId: "700501628693",
    appId: "1:700501628693:web:7d0904e3ce3dafd5cffb1c",
    measurementId: "G-E40G21G2R1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
