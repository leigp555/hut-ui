import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const Guide = () => import('@/views/Guide.vue')
const Components = () => import('@/views/Components.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/Components',
    name: 'Components',
    component: Components
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
