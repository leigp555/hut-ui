import { RouteRecordRaw } from 'vue-router'

// components
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
const Form = () => import('@/eg/form/Index.vue')
const Input = () => import('@/eg/input/Index.vue')
const InputNumber = () => import('@/eg/inputNumber/Index.vue')
const Mentions = () => import('@/eg/mentions/Index.vue')
const Radio = () => import('@/eg/radio/Index.vue')
const Rate = () => import('@/eg/rate/Index.vue')
const Select = () => import('@/eg/select/Index.vue')
const Slider = () => import('@/eg/slider/Index.vue')
const Switch = () => import('@/eg/switch/Index.vue')
const TimePicker = () => import('@/eg/timePicker/Index.vue')
const Transfer = () => import('@/eg/transfer/Index.vue')
const TreeSelect = () => import('@/eg/treeSelect/Index.vue')
const Upload = () => import('@/eg/upload/Index.vue')
const Avatar = () => import('@/eg/avatar/Index.vue')
const Badge = () => import('@/eg/badge/Index.vue')
const Calendar = () => import('@/eg/calendar/Index.vue')
const Card = () => import('@/eg/card/Index.vue')
const Carousel = () => import('@/eg/carousel/Index.vue')
const Collapse = () => import('@/eg/collapse/Index.vue')
const Comment = () => import('@/eg/comment/Index.vue')
const Descriptions = () => import('@/eg/descriptions/Index.vue')
const Empty = () => import('@/eg/empty/Index.vue')
const Image = () => import('@/eg/image/Index.vue')
const List = () => import('@/eg/list/Index.vue')
const Popover = () => import('@/eg/popover/Index.vue')
const Statistic = () => import('@/eg/statistic/Index.vue')
const Table = () => import('@/eg/table/Index.vue')
const Tabs = () => import('@/eg/tabs/Index.vue')
const Tag = () => import('@/eg/tag/Index.vue')
const Timeline = () => import('@/eg/timeline/Index.vue')
const Tooltip = () => import('@/eg/tooltip/Index.vue')
const Tree = () => import('@/eg/tree/Index.vue')
const Alert = () => import('@/eg/alert/Index.vue')
const Drawer = () => import('@/eg/drawer/Index.vue')
const Message = () => import('@/eg/message/Index.vue')
const Modal = () => import('@/eg/modal/Index.vue')
const Notification = () => import('@/eg/notification/Index.vue')
const Popconfirm = () => import('@/eg/popconfirm/Index.vue')
const Progress = () => import('@/eg/progress/Index.vue')
const Result = () => import('@/eg/result/Index.vue')
const Skeleton = () => import('@/eg/skeleton/Index.vue')
const Spin = () => import('@/eg/spin/Index.vue')
const BackTop = () => import('@/eg/backtop/Index.vue')

export const demoRouter: Array<RouteRecordRaw> = [
  {
    path: 'button',
    alias: '',
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
  },
  {
    path: 'form',
    name: 'form',
    component: Form
  },
  {
    path: 'input',
    name: 'input',
    component: Input
  },
  {
    path: 'inputNumber',
    name: 'inputNumber',
    component: InputNumber
  },
  {
    path: 'mentions',
    name: 'mentions',
    component: Mentions
  },
  {
    path: 'radio',
    name: 'radio',
    component: Radio
  },
  {
    path: 'rate',
    name: 'rate',
    component: Rate
  },
  {
    path: 'select',
    name: 'select',
    component: Select
  },
  {
    path: 'slider',
    name: 'slider',
    component: Slider
  },
  {
    path: 'switch',
    name: 'switch',
    component: Switch
  },
  {
    path: 'timePicker',
    name: 'timePicker',
    component: TimePicker
  },
  {
    path: 'transfer',
    name: 'transfer',
    component: Transfer
  },
  {
    path: 'treeSelect',
    name: 'treeSelect',
    component: TreeSelect
  },
  {
    path: 'upload',
    name: 'upload',
    component: Upload
  },
  {
    path: 'avatar',
    name: 'avatar',
    component: Avatar
  },
  {
    path: 'badge',
    name: 'badge',
    component: Badge
  },
  {
    path: 'calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: 'card',
    name: 'card',
    component: Card
  },
  {
    path: 'carousel',
    name: 'carousel',
    component: Carousel
  },
  {
    path: 'collapse',
    name: 'collapse',
    component: Collapse
  },
  {
    path: 'comment',
    name: 'comment',
    component: Comment
  },
  {
    path: 'descriptions',
    name: 'descriptions',
    component: Descriptions
  },
  {
    path: 'empty',
    name: 'empty',
    component: Empty
  },
  {
    path: 'image',
    name: 'image',
    component: Image
  },
  {
    path: 'list',
    name: 'list',
    component: List
  },
  {
    path: 'popover',
    name: 'popover',
    component: Popover
  },
  {
    path: 'statistic',
    name: 'statistic',
    component: Statistic
  },
  {
    path: 'table',
    name: 'table',
    component: Table
  },
  {
    path: 'tabs',
    name: 'tabs',
    component: Tabs
  },
  {
    path: 'tag',
    name: 'tag',
    component: Tag
  },
  {
    path: 'timeline',
    name: 'timeline',
    component: Timeline
  },
  {
    path: 'tooltip',
    name: 'tooltip',
    component: Tooltip
  },
  {
    path: 'tree',
    name: 'tree',
    component: Tree
  },
  {
    path: 'alert',
    name: 'alert',
    component: Alert
  },
  {
    path: 'drawer',
    name: 'drawer',
    component: Drawer
  },
  {
    path: 'message',
    name: 'message',
    component: Message
  },
  {
    path: 'modal',
    name: 'modal',
    component: Modal
  },
  {
    path: 'notification',
    name: 'notification',
    component: Notification
  },
  {
    path: 'popconfirm',
    name: 'popconfirm',
    component: Popconfirm
  },
  {
    path: 'progress',
    name: 'progress',
    component: Progress
  },
  {
    path: 'result',
    name: 'result',
    component: Result
  },
  {
    path: 'skeleton',
    name: 'skeleton',
    component: Skeleton
  },
  {
    path: 'spin',
    name: 'spin',
    component: Spin
  },
  {
    path: 'backTop',
    name: 'backTop',
    component: BackTop
  }
]
