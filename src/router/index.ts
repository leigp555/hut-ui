import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const Guide = () => import('@/views/Guide.vue')
const Components = () => import('@/views/Components.vue')
const NotFound = () => import('@/views/NotFound.vue')
const Button = () => import('@/eg/button/Index.vue')
const Typography = () => import('@/eg/typography/Index.vue')

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
    path: '/components',
    name: 'Components',
    component: Components,
    children: [
      {
        path: '',
        alias: 'button',
        name: 'button',
        component: Button
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
