import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    component: () => import('./views/HomeView.vue')
  },
  {
    path: '/skills',
    component: () => import('./views/SkillsView.vue')
  },
  {
    path: '/contato',
    component: () => import('./views/ContatoView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
