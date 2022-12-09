<template>
  <section class="components-Menu scroll-container">
    <Menu v-model:selectedKeys="selectedKeys" mode="column" @change="onChange">
      <SubMenu keyValue="sub1" :collapsible="false">
        <template #title><span style="font-weight: 600">通用</span></template>
        <MenuItem
          v-for="item in sub1"
          :keyValue="item.keyValue"
          :key="item.keyValue"
          class="menuItem"
        >
          <router-link :to="`/components/${item.keyValue}`" class="router-link">
            {{ item.title }}
          </router-link>
        </MenuItem>
      </SubMenu>
      <SubMenu keyValue="sub2" :collapsible="false">
        <template #title><span style="font-weight: 600">布局</span></template>
        <MenuItem
          v-for="item in sub2"
          :keyValue="item.keyValue"
          :key="item.keyValue"
          class="menuItem"
        >
          <router-link :to="`/components/${item.keyValue}`" class="router-link">
            {{ item.title }}
          </router-link>
        </MenuItem>
      </SubMenu>
      <SubMenu keyValue="sub3" :collapsible="false">
        <template #title><span style="font-weight: 600">导航</span></template>
        <MenuItem
          v-for="item in sub3"
          :keyValue="item.keyValue"
          :key="item.keyValue"
          class="menuItem"
        >
          <router-link :to="`/components/${item.keyValue}`" class="router-link">
            {{ item.title }}
          </router-link>
        </MenuItem>
      </SubMenu>
      <SubMenu keyValue="sub4" :collapsible="false">
        <template #title><span style="font-weight: 600">数据录入</span></template>
        <MenuItem
          v-for="item in sub4"
          :keyValue="item.keyValue"
          :key="item.keyValue"
          class="menuItem"
        >
          <router-link :to="`/components/${item.keyValue}`" class="router-link">
            {{ item.title }}
          </router-link>
        </MenuItem>
      </SubMenu>
      <SubMenu keyValue="sub5" :collapsible="false">
        <template #title><span style="font-weight: 600">数据展示</span></template>
        <MenuItem
          v-for="item in sub5"
          :keyValue="item.keyValue"
          :key="item.keyValue"
          class="menuItem"
        >
          <router-link :to="`/components/${item.keyValue}`" class="router-link">
            {{ item.title }}
          </router-link>
        </MenuItem>
      </SubMenu>
      <SubMenu keyValue="sub6" :collapsible="false">
        <template #title><span style="font-weight: 600">反馈</span></template>
        <MenuItem
          v-for="item in sub6"
          :keyValue="item.keyValue"
          :key="item.keyValue"
          class="menuItem"
        >
          <router-link :to="`/components/${item.keyValue}`" class="router-link">
            {{ item.title }}
          </router-link>
        </MenuItem>
      </SubMenu>
      <SubMenu keyValue="sub7" :collapsible="false">
        <template #title><span style="font-weight: 600">其他</span></template>
        <MenuItem
          v-for="item in sub7"
          :keyValue="item.keyValue"
          :key="item.keyValue"
          class="menuItem"
          style="margin-bottom: 80px"
        >
          <router-link :to="`/components/${item.keyValue}`" class="router-link">
            {{ item.title }}
          </router-link>
        </MenuItem>
      </SubMenu>
    </Menu>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Menu from '@/lib/menu/Menu.vue'
import MenuItem from '@/lib/menu/MenuItem.vue'
import SubMenu from '@/lib/menu/SubMenu.vue'

const selectedKeys = ref<string[]>(['sub1', 'button'])
const route = useRoute()

const emit = defineEmits(['change'])
const onChange = () => {
  emit('change')
}
const componentsTitle: { [key: string]: { [s: string]: boolean } } = {
  sub1: {
    button: true,
    typography: true,
    palette: true
  },
  sub2: {
    divider: true,
    grid: true,
    layout: true,
    space: true
  },
  sub3: {
    affix: true,
    anchor: true,
    breadcrumb: true,
    dropdown: true,
    menu: true,
    pageHeader: true,
    pagination: true,
    steps: true
  },
  sub4: {
    autoComplete: true,
    cascader: true,
    checkbox: true,
    datePicker: true,
    form: true,
    input: true,
    inputNumber: true,
    mentions: true,
    radio: true,
    rate: true,
    select: true,
    slider: true,
    switch: true,
    timePicker: true,
    transfer: true,
    treeSelect: true,
    upload: true
  },
  sub5: {
    avatar: true,
    badge: true,
    calendar: true,
    card: true,
    carousel: true,
    collapse: true,
    comment: true,
    descriptions: true,
    empty: true,
    image: true,
    list: true,
    popover: true,
    statistic: true,
    table: true,
    tabs: true,
    tag: true,
    timeline: true,
    tooltip: true,
    tree: true
  },
  sub6: {
    alert: true,
    drawer: true,
    message: true,
    modal: true,
    notification: true,
    popconfirm: true,
    progress: true,
    result: true,
    skeleton: true,
    spin: true
  },
  sub7: {
    backTop: true
  }
}

const init = () => {
  const navArr = route.path.split('/')
  const componentName = navArr[navArr.length - 1]
  const s = Object.keys(componentsTitle)
  for (let i = 0; i < s.length; i++) {
    const name = s[i]
    if (componentsTitle[name][componentName]) {
      selectedKeys.value = [name, componentName]
    }
  }
}
onMounted(() => {
  init()
})
watch(
  () => route.path,
  () => {
    init()
  }
)

const sub1 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'button',
    title: ' Button 按钮'
  },
  {
    keyValue: 'typography',
    title: ' Typography 排版'
  },
  {
    keyValue: 'palette',
    title: ' Palette 调色板'
  }
])
const sub2 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'divider',
    title: ' Divider 分割线'
  },
  {
    keyValue: 'grid',
    title: ' Grid 栅格'
  },
  {
    keyValue: 'layout',
    title: ' Layout 布局'
  },
  {
    keyValue: 'space',
    title: ' Space 间距'
  }
])
const sub3 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'affix',
    title: ' Affix 固钉'
  },
  {
    keyValue: 'anchor',
    title: ' Anchor 锚点'
  },
  {
    keyValue: 'breadcrumb',
    title: ' Breadcrumb 面包屑'
  },
  {
    keyValue: 'dropdown',
    title: ' Dropdown 下拉菜单'
  },
  {
    keyValue: 'menu',
    title: ' Menu 导航菜单'
  },
  {
    keyValue: 'pageHeader',
    title: ' PageHeader 页头'
  },
  {
    keyValue: 'pagination',
    title: ' Pagination 分页'
  },
  {
    keyValue: 'steps',
    title: ' Steps 步骤条'
  }
])

const sub4 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'autoComplete',
    title: ' AutoComplete 自动完成'
  },
  {
    keyValue: 'cascader',
    title: ' Cascader 级联选择'
  },
  {
    keyValue: 'checkbox',
    title: ' Checkbox 多选框'
  },
  {
    keyValue: 'datePicker',
    title: ' DatePicker 日期选择框'
  },
  {
    keyValue: 'form',
    title: ' Form 表单'
  },
  {
    keyValue: 'input',
    title: ' Input 输入框'
  },
  {
    keyValue: 'inputNumber',
    title: ' InputNumber 数字输入框'
  },
  {
    keyValue: 'mentions',
    title: ' Mentions 提及'
  },
  {
    keyValue: 'radio',
    title: ' Radio 单选框'
  },
  {
    keyValue: 'rate',
    title: ' Rate 评分'
  },
  {
    keyValue: 'select',
    title: ' Select 选择器'
  },
  {
    keyValue: 'slider',
    title: ' Slider 滑动输入条'
  },
  {
    keyValue: 'switch',
    title: ' Switch 开关'
  },
  {
    keyValue: 'timePicker',
    title: ' TimePicker 时间选择框'
  },
  {
    keyValue: 'transfer',
    title: ' Transfer 穿梭框'
  },
  {
    keyValue: 'treeSelect',
    title: ' TreeSelect 树选择'
  },
  {
    keyValue: 'upload',
    title: ' Upload 上传'
  }
])

const sub5 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'avatar',
    title: ' Avatar 头像'
  },
  {
    keyValue: 'badge',
    title: ' Badge 徽标数'
  },
  {
    keyValue: 'calendar',
    title: ' Calendar 日历'
  },
  {
    keyValue: 'card',
    title: ' Card 卡片'
  },
  {
    keyValue: 'carousel',
    title: ' Carousel 走马灯'
  },
  {
    keyValue: 'collapse',
    title: ' Collapse 折叠面板'
  },
  {
    keyValue: 'comment',
    title: 'Comment 评论'
  },
  {
    keyValue: 'descriptions',
    title: ' Descriptions 描述列表'
  },
  {
    keyValue: 'empty',
    title: ' Empty 空状态'
  },
  {
    keyValue: 'image',
    title: ' Image 图片'
  },
  {
    keyValue: 'list',
    title: ' List 列表'
  },
  {
    keyValue: 'popover',
    title: ' Popover 气泡卡片'
  },
  {
    keyValue: 'statistic',
    title: ' Statistic 统计数值'
  },
  {
    keyValue: 'table',
    title: ' Table 表格'
  },
  {
    keyValue: 'tabs',
    title: ' Tabs 标签页'
  },
  {
    keyValue: 'tag',
    title: ' Tag 标签'
  },
  {
    keyValue: 'timeline',
    title: ' Timeline 时间轴'
  },
  {
    keyValue: 'tooltip',
    title: ' Tooltip 文字提示'
  },
  {
    keyValue: 'tree',
    title: ' Tree 树形控件'
  }
])

const sub6 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'alert',
    title: ' Alert 警告提示'
  },
  {
    keyValue: 'drawer',
    title: ' Drawer 抽屉'
  },
  {
    keyValue: 'message',
    title: ' Message 全局提示'
  },
  {
    keyValue: 'modal',
    title: ' Modal 对话框'
  },
  {
    keyValue: 'notification',
    title: ' Notification 通知提醒框'
  },
  {
    keyValue: 'popconfirm',
    title: ' Popconfirm 气泡确认框'
  },
  {
    keyValue: 'progress',
    title: ' Progress 进度条'
  },
  {
    keyValue: 'result',
    title: ' Result 结果'
  },
  {
    keyValue: 'skeleton',
    title: ' Skeleton 骨架屏'
  },
  {
    keyValue: 'spin',
    title: ' Spin 加载中'
  }
])

const sub7 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'backTop',
    title: ' BackTop 回到顶部'
  }
])

// 获取路由
// const yyy = {}

// const xxx = [
//   { name: ' sub1', title: sub1 },
//   { name: ' sub2', title: sub2 },
//   { name: ' sub3', title: sub3 },
//   { name: ' sub4', title: sub4 },
//   { name: ' sub5', title: sub5 },
//   { name: ' sub6', title: sub6 },
//   { name: ' sub7', title: sub7 }
// ]
//
// for (let i = 0; i < xxx.length; i++) {
//   yyy[xxx[i].name] = {}
//   for (let j = 0; j < Object.keys(xxx[i].title).length; j++) {
//     const n = xxx[i].title[j].keyValue
//     yyy[xxx[i].name][n] = true
//   }
// }
// console.log(yyy)
//= ===========================================
// const yyy = []
//
// const xxx = [...sub1, ...sub2, ...sub3, ...sub4, ...sub5, ...sub6, ...sub7]
//
// for (let i = 0; i < xxx.length; i++) {
//   yyy.push({
//     componentName: xxx[i].title,
//     url: `#/components/${xxx[i].keyValue}`,
//     objectID: `myID${i + 1}`
//   })
// }
// console.log(yyy)
</script>

<style lang="scss" scoped>
.components-Menu {
  margin-top: 10px;
  display: inline-flex;
  flex-direction: column;
  width: 248px;
  .menuItem {
    padding: 0 !important;
  }
  .router-link {
    display: block;
    padding-left: 48px;
    height: 100%;
    width: 100%;
    padding-right: 40px;
    background-color: transparent;
    transition: all 250ms;
    &.router-link-exact-active {
      border-right: 3px solid #1890ff;
    }
  }
}
</style>
