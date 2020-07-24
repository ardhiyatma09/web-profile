import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Hello
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import('../views/Skill.vue')
  },
  {
    path: '/socmed',
    name: 'socmed',
    component: () => import('../views/Socmed.vue')
  },
  {
    path: '/certificate',
    name: 'certificate',
    component: () => import('../views/Certificate.vue')
  },
  {
    path: '/portofolio',
    name: 'portofolio',
    component: () => import('../views/Portofolio.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
