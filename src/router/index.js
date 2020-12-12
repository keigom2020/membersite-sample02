import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ConfigPage from '../views/ConfigPage.vue'
import Policy from '../views/Policy.vue'
import Top from '../views/Top.vue'
import Video from '../views/Video.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/top',
    name: 'top',
    component: Top
  },
  {
    path: '/configpage',
    name: 'configpage',
    component: ConfigPage
  },
  {
    path: '/policy',
    name: 'policy',
    component: Policy
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
