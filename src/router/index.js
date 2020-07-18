import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: About
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/Hello.vue')
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import(/* webpackChunkName: "about" */ '../views/Skill.vue')
  },
  {
    path: '/socmed',
    name: 'socmed',
    component: () => import(/* webpackChunkName: "about" */ '../views/Socmed.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
