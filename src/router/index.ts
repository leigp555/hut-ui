import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

// views
import { demoRouter } from '@/router/demoRouter'
import { docsRouter } from '@/router/docsRouter'
import Home from '@/views/Home.vue'

const Guide = () => import('@/views/Guide.vue')
const Components = () => import('@/views/Components.vue')
const NotFound = () => import('@/views/NotFound.vue')

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
    component: Guide,
    children: [...docsRouter]
  },
  {
    path: '/components',
    name: 'Components',
    component: Components,
    children: [...demoRouter]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
