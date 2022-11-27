<template>
  <div class="guide-wrap">
    <section class="guideHead">
      <Head />
    </section>
    <section class="guideBody">
      <section class="guideMenu scroll-container">
        <h4 class="guideMenu-title">组件概览</h4>
        <Menu v-model:selectedKeys="selectedKeys" style="width: 240px" mode="column">
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
      <section class="guideContent scroll-container">
        <p>xxx</p>
      </section>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import Menu from '@/lib/menu/Menu.vue'
import MenuItem from '@/lib/menu/MenuItem.vue'
import SubMenu from '@/lib/menu/SubMenu.vue'
import Head from '@/views/Head.vue'

const current = ref<string[]>(['sub1', 'button'])

const selectedKeys = ref<string[]>(['sub1', 'button'])

const sub1 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'button',
    title: ' Button按钮'
  },
  {
    keyValue: 'typography',
    title: ' Typography排版'
  },
  {
    keyValue: 'palette',
    title: ' Palette调色板'
  }
])
const sub2 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'divider',
    title: ' Divider分割线'
  },
  {
    keyValue: 'grid',
    title: ' Grid栅格'
  },
  {
    keyValue: 'layout',
    title: ' Layout布局'
  },
  {
    keyValue: 'space',
    title: ' Space间距'
  }
])
const sub3 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'affix',
    title: ' Affix固钉'
  },
  {
    keyValue: 'anchor',
    title: ' Anchor锚点'
  },
  {
    keyValue: 'breadcrumb',
    title: ' Breadcrumb面包屑'
  },
  {
    keyValue: 'dropdown',
    title: ' Dropdown下拉菜单'
  },
  {
    keyValue: 'menu',
    title: ' Menu导航菜单'
  },
  {
    keyValue: 'pageHeader',
    title: ' PageHeader页头'
  },
  {
    keyValue: 'pagination',
    title: ' Pagination分页'
  },
  {
    keyValue: 'steps',
    title: ' Steps步骤条'
  }
])

const sub4 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'autoComplete',
    title: ' AutoComplete自动完成'
  },
  {
    keyValue: 'cascader',
    title: ' Cascader级联选择'
  },
  {
    keyValue: 'checkbox',
    title: ' Checkbox多选框'
  },
  {
    keyValue: 'datePicker',
    title: ' DatePicker日期选择框'
  },
  {
    keyValue: 'form',
    title: ' Form表单'
  },
  {
    keyValue: 'input',
    title: ' Input输入框'
  },
  {
    keyValue: 'inputNumber',
    title: ' InputNumber数字输入框'
  },
  {
    keyValue: 'mentions',
    title: ' Mentions提及'
  },
  {
    keyValue: 'radio',
    title: ' Radio单选框'
  },
  {
    keyValue: 'rate',
    title: ' Rate评分'
  },
  {
    keyValue: 'select',
    title: ' Select选择器'
  },
  {
    keyValue: 'slider',
    title: ' Slider滑动输入条'
  },
  {
    keyValue: 'switch',
    title: ' Switch开关'
  },
  {
    keyValue: 'timePicker',
    title: ' TimePicker时间选择框'
  },
  {
    keyValue: 'transfer',
    title: ' Transfer穿梭框'
  },
  {
    keyValue: 'treeSelect',
    title: ' TreeSelect树选择'
  },
  {
    keyValue: 'upload',
    title: ' Upload上传'
  }
])

const sub5 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'avatar',
    title: ' Avatar头像'
  },
  {
    keyValue: 'badge',
    title: ' Badge徽标数'
  },
  {
    keyValue: 'calendar',
    title: ' Calendar日历'
  },
  {
    keyValue: 'card',
    title: ' Card卡片'
  },
  {
    keyValue: 'carousel',
    title: ' Carousel走马灯'
  },
  {
    keyValue: 'collapse',
    title: ' Collapse折叠面板'
  },
  {
    keyValue: 'comment',
    title: 'Comment评论'
  },
  {
    keyValue: 'descriptions',
    title: ' Descriptions描述列表'
  },
  {
    keyValue: 'empty',
    title: ' Empty空状态'
  },
  {
    keyValue: 'image',
    title: ' Image图片'
  },
  {
    keyValue: 'list',
    title: ' List列表'
  },
  {
    keyValue: 'popover',
    title: ' Popover气泡卡片'
  },
  {
    keyValue: 'statistic',
    title: ' Statistic统计数值'
  },
  {
    keyValue: 'table',
    title: ' Table表格'
  },
  {
    keyValue: 'tabs',
    title: ' Tabs标签页'
  },
  {
    keyValue: 'tag',
    title: ' Tag标签'
  },
  {
    keyValue: 'timeline',
    title: ' Timeline时间轴'
  },
  {
    keyValue: 'tooltip',
    title: ' Tooltip文字提示'
  },
  {
    keyValue: 'tree',
    title: ' Tree树形控件'
  }
])

const sub6 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'alert',
    title: ' Alert警告提示'
  },
  {
    keyValue: 'drawer',
    title: ' Drawer抽屉'
  },
  {
    keyValue: 'message',
    title: ' Message全局提示'
  },
  {
    keyValue: 'modal',
    title: ' Modal对话框'
  },
  {
    keyValue: 'notification',
    title: ' Notification通知提醒框'
  },
  {
    keyValue: 'popconfirm',
    title: ' Popconfirm气泡确认框'
  },
  {
    keyValue: 'progress',
    title: ' Progress进度条'
  },
  {
    keyValue: 'result',
    title: ' Result结果'
  },
  {
    keyValue: 'skeleton',
    title: ' Skeleton骨架屏'
  },
  {
    keyValue: 'spin',
    title: ' Spin加载中'
  }
])

const sub7 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'backTop',
    title: ' BackTop回到顶部'
  }
])
</script>

<style scoped lang="scss">
.guide-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  > .guideHead {
    height: 50px;
    flex-shrink: 0;
    background: #1890ff;
  }

  > .guideBody {
    flex-grow: 10;
    overflow-y: auto;
    display: flex;
    > .guideMenu {
      display: inline-flex;
      flex-direction: column;
      overflow-y: auto;
      scroll-behavior: smooth;
      .menuItem {
        padding: 0 !important;
      }
      .router-link {
        display: block;
        padding-left: 48px;
        height: 100%;
        width: 100%;
      }
      > .guideMenu-title {
        font-weight: 600;
        display: flex;
        justify-content: center;
        padding: 20px 0 20px 0;
        background: #fafafa;
      }
    }
    > .guideContent {
      background: #ffffff;
      flex-grow: 10;
      padding: 20px;
      overflow-y: auto;
      scroll-behavior: smooth;
    }
  }
}
</style>
