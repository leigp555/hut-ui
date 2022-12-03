import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const Guide = () => import('@/views/Guide.vue')
const Components = () => import('@/views/Components.vue')
const NotFound = () => import('@/views/NotFound.vue')
const Button = () => import('@/eg/button/Index.vue')
const Typography = () => import('@/eg/typography/Index.vue')
const Palette = () => import('@/eg/palette/Index.vue')
const Divider = () => import('@/eg/divider/Index.vue')
const Grid = () => import('@/eg/grid/Index.vue')
const Layout = () => import('@/eg/layout/Index.vue')
const Space = () => import('@/eg/space/Index.vue')
const Affix = () => import('@/eg/affix/Index.vue')
const Anchor = () => import('@/eg/anchor/Index.vue')
const Breadcrumb = () => import('@/eg/breadcrumb/Index.vue')
const Dropdown = () => import('@/eg/dropdown/Index.vue')
const Menu = () => import('@/eg/menu/Index.vue')
const PageHeader = () => import('@/eg/pageHeader/Index.vue')
const Pagination = () => import('@/eg/pagination/Index.vue')
const Steps = () => import('@/eg/steps/Index.vue')
const AutoComplete = () => import('@/eg/autoComplete/Index.vue')
const Cascader = () => import('@/eg/cascader/Index.vue')
const Checkbox = () => import('@/eg/checkbox/Index.vue')
const DatePicker = () => import('@/eg/datePicker/Index.vue')

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
      },
      {
        path: 'palette',
        name: 'palette',
        component: Palette
      },
      {
        path: 'divider',
        name: 'divider',
        component: Divider
      },
      {
        path: 'grid',
        name: 'grid',
        component: Grid
      },
      {
        path: 'layout',
        name: 'layout',
        component: Layout
      },
      {
        path: 'space',
        name: 'space',
        component: Space
      },
      {
        path: 'affix',
        name: 'affix',
        component: Affix
      },
      {
        path: 'anchor',
        name: 'anchor',
        component: Anchor
      },
      {
        path: 'breadcrumb',
        name: 'breadcrumb',
        component: Breadcrumb
      },
      {
        path: 'dropdown',
        name: 'dropdown',
        component: Dropdown
      },
      {
        path: 'menu',
        name: 'menu',
        component: Menu
      },
      {
        path: 'pageHeader',
        name: 'pageHeader',
        component: PageHeader
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: Pagination
      },
      {
        path: 'steps',
        name: 'steps',
        component: Steps
      },
      {
        path: 'autoComplete',
        name: 'autoComplete',
        component: AutoComplete
      },
      {
        path: 'cascader',
        name: 'cascader',
        component: Cascader
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: Checkbox
      },
      {
        path: 'datePicker',
        name: 'datePicker',
        component: DatePicker
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
