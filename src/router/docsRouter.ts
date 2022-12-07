import { RouteRecordRaw } from 'vue-router'

export const docsRouter: Array<RouteRecordRaw> = [
  {
    path: 'intro',
    alias: '',
    name: 'intro',
    component: () => import('@/docs/Intro.vue')
  },
  {
    path: 'install',
    name: 'install',
    component: () => import('@/docs/Install.vue')
  },
  {
    path: 'usage',
    name: 'Usage',
    component: () => import('@/docs/Usage.vue')
  }
]
