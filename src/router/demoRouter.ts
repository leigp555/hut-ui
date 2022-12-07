import { RouteRecordRaw } from 'vue-router'

export const demoRouter: Array<RouteRecordRaw> = [
  {
    path: 'button',
    alias: '',
    name: 'button',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/button/Index.vue')
  },
  {
    path: 'typography',
    name: 'typography',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/typography/Index.vue')
  },
  {
    path: 'palette',
    name: 'palette',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/palette/Index.vue')
  },
  {
    path: 'divider',
    name: 'divider',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/divider/Index.vue')
  },
  {
    path: 'grid',
    name: 'grid',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/grid/Index.vue')
  },
  {
    path: 'layout',
    name: 'layout',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/layout/Index.vue')
  },
  {
    path: 'space',
    name: 'space',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/space/Index.vue')
  },
  {
    path: 'affix',
    name: 'affix',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/affix/Index.vue')
  },
  {
    path: 'anchor',
    name: 'anchor',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/anchor/Index.vue')
  },
  {
    path: 'breadcrumb',
    name: 'breadcrumb',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/breadcrumb/Index.vue')
  },
  {
    path: 'dropdown',
    name: 'dropdown',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/dropdown/Index.vue')
  },
  {
    path: 'menu',
    name: 'menu',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/menu/Index.vue')
  },
  {
    path: 'pageHeader',
    name: 'pageHeader',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/pageHeader/Index.vue')
  },
  {
    path: 'pagination',
    name: 'pagination',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/pagination/Index.vue')
  },
  {
    path: 'steps',
    name: 'steps',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/steps/Index.vue')
  },
  {
    path: 'autoComplete',
    name: 'autoComplete',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/autoComplete/Index.vue')
  },
  {
    path: 'cascader',
    name: 'cascader',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/cascader/Index.vue')
  },
  {
    path: 'checkbox',
    name: 'checkbox',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/checkbox/Index.vue')
  },
  {
    path: 'datePicker',
    name: 'datePicker',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/datePicker/Index.vue')
  },
  {
    path: 'form',
    name: 'form',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/form/Index.vue')
  },
  {
    path: 'input',
    name: 'input',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/input/Index.vue')
  },
  {
    path: 'inputNumber',
    name: 'inputNumber',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/inputNumber/Index.vue')
  },
  {
    path: 'mentions',
    name: 'mentions',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/mentions/Index.vue')
  },
  {
    path: 'radio',
    name: 'radio',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/radio/Index.vue')
  },
  {
    path: 'rate',
    name: 'rate',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/rate/Index.vue')
  },
  {
    path: 'select',
    name: 'select',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/select/Index.vue')
  },
  {
    path: 'slider',
    name: 'slider',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/slider/Index.vue')
  },
  {
    path: 'switch',
    name: 'switch',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/switch/Index.vue')
  },
  {
    path: 'timePicker',
    name: 'timePicker',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/timePicker/Index.vue')
  },
  {
    path: 'transfer',
    name: 'transfer',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/transfer/Index.vue')
  },
  {
    path: 'treeSelect',
    name: 'treeSelect',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/treeSelect/Index.vue')
  },
  {
    path: 'upload',
    name: 'upload',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/upload/Index.vue')
  },
  {
    path: 'avatar',
    name: 'avatar',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/avatar/Index.vue')
  },
  {
    path: 'badge',
    name: 'badge',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/badge/Index.vue')
  },
  {
    path: 'calendar',
    name: 'calendar',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/calendar/Index.vue')
  },
  {
    path: 'card',
    name: 'card',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/card/Index.vue')
  },
  {
    path: 'carousel',
    name: 'carousel',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/carousel/Index.vue')
  },
  {
    path: 'collapse',
    name: 'collapse',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/collapse/Index.vue')
  },
  {
    path: 'comment',
    name: 'comment',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/comment/Index.vue')
  },
  {
    path: 'descriptions',
    name: 'descriptions',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/descriptions/Index.vue')
  },
  {
    path: 'empty',
    name: 'empty',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/empty/Index.vue')
  },
  {
    path: 'image',
    name: 'image',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/image/Index.vue')
  },
  {
    path: 'list',
    name: 'list',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/list/Index.vue')
  },
  {
    path: 'popover',
    name: 'popover',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/popover/Index.vue')
  },
  {
    path: 'statistic',
    name: 'statistic',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/statistic/Index.vue')
  },
  {
    path: 'table',
    name: 'table',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/table/Index.vue')
  },
  {
    path: 'tabs',
    name: 'tabs',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/tabs/Index.vue')
  },
  {
    path: 'tag',
    name: 'tag',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/tag/Index.vue')
  },
  {
    path: 'timeline',
    name: 'timeline',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/timeline/Index.vue')
  },
  {
    path: 'tooltip',
    name: 'tooltip',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/tooltip/Index.vue')
  },
  {
    path: 'tree',
    name: 'tree',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/tree/Index.vue')
  },
  {
    path: 'alert',
    name: 'alert',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/alert/Index.vue')
  },
  {
    path: 'drawer',
    name: 'drawer',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/drawer/Index.vue')
  },
  {
    path: 'message',
    name: 'message',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/message/Index.vue')
  },
  {
    path: 'modal',
    name: 'modal',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/modal/Index.vue')
  },
  {
    path: 'notification',
    name: 'notification',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/notification/Index.vue')
  },
  {
    path: 'popconfirm',
    name: 'popconfirm',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/popconfirm/Index.vue')
  },
  {
    path: 'progress',
    name: 'progress',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/progress/Index.vue')
  },
  {
    path: 'result',
    name: 'result',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/result/Index.vue')
  },
  {
    path: 'skeleton',
    name: 'skeleton',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/skeleton/Index.vue')
  },
  {
    path: 'spin',
    name: 'spin',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/spin/Index.vue')
  },
  {
    path: 'backTop',
    name: 'backTop',
    meta: { loadingSkeleton: true },
    component: () => import('@/eg/backtop/Index.vue')
  }
]
