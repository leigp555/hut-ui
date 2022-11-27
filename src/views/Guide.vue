<template>
  <div class="guide-wrap">
    <section class="guideHead">
      <Head />
    </section>
    <section class="guideBody">
      <section class="guideMenu scroll-container">
        <h4 class="guideMenu-title">组件概览</h4>
        <Menu v-model:selectedKeys="selectedKeys" style="width: 250px" mode="column">
          <SubMenu keyValue="sub1" :collapsible="false">
            <template #title>通用</template>
            <MenuItem keyValue="button">Button按钮 </MenuItem>
            <MenuItem keyValue="typography">Typography排版</MenuItem>
            <MenuItem keyValue="palette">Palette 调色板</MenuItem>
          </SubMenu>
          <SubMenu keyValue="sub2" :collapsible="false">
            <template #title>布局</template>
            <MenuItem keyValue="divider">Divider分割线</MenuItem>
            <MenuItem keyValue="grid">Grid栅格</MenuItem>
            <MenuItem keyValue="layout">Layout布局</MenuItem>
            <MenuItem keyValue="space">Space间距</MenuItem>
          </SubMenu>
          <SubMenu keyValue="sub3" :collapsible="false">
            <template #title>导航</template>
            <MenuItem keyValue="affix">Affix 固钉 </MenuItem>
            <MenuItem keyValue="anchor">Anchor锚点 </MenuItem>
            <MenuItem keyValue="breadcrumb">Breadcrumb面包屑 </MenuItem>
            <MenuItem keyValue="dropdown">Dropdown下拉菜单 </MenuItem>
            <MenuItem keyValue="menu">Menu导航菜单 </MenuItem>
            <MenuItem keyValue="pageHeader">PageHeader 页头 </MenuItem>
            <MenuItem keyValue="pagination">Pagination分页 </MenuItem>
            <MenuItem keyValue="steps">Steps步骤条 </MenuItem>
          </SubMenu>
          <SubMenu keyValue="sub4" :collapsible="false">
            <template #title>数据录入</template>
            <MenuItem keyValue="autoComplete">AutoComplete自动完成 </MenuItem>
            <MenuItem keyValue="cascader">Cascader级联选择 </MenuItem>
            <MenuItem keyValue="checkbox">Checkbox多选框 </MenuItem>
            <MenuItem keyValue="datePicker">DatePicker日期选择框 </MenuItem>
            <MenuItem keyValue="form">Form表单 </MenuItem>
            <MenuItem keyValue="input">Input输入框 </MenuItem>
            <MenuItem keyValue="inputNumber">InputNumber数字输入框 </MenuItem>
            <MenuItem keyValue="mentions">Mentions提及 </MenuItem>
            <MenuItem keyValue="radio">Radio单选框 </MenuItem>
            <MenuItem keyValue="rate">Rate评分 </MenuItem>
            <MenuItem keyValue="select">Select选择器 </MenuItem>
            <MenuItem keyValue="slider">Slider滑动输入条 </MenuItem>
            <MenuItem keyValue="switch">Switch开关 </MenuItem>
            <MenuItem keyValue="timePicker">TimePicker时间选择框 </MenuItem>
            <MenuItem keyValue="transfer">Transfer穿梭框 </MenuItem>
            <MenuItem keyValue="treeSelect">TreeSelect树选择 </MenuItem>
            <MenuItem keyValue="upload">Upload上传 </MenuItem>
          </SubMenu>
          <SubMenu keyValue="sub5" :collapsible="false">
            <template #title>数据展示</template>
            <MenuItem keyValue="avatar">Avatar头像 </MenuItem>
            <MenuItem keyValue="badge">Badge徽标数 </MenuItem>
            <MenuItem keyValue="calendar">Calendar日历 </MenuItem>
            <MenuItem keyValue="card">Card卡片 </MenuItem>
            <MenuItem keyValue="carousel">Carousel走马灯 </MenuItem>
            <MenuItem keyValue="collapse">Collapse折叠面板 </MenuItem>
            <MenuItem keyValue="comment">Comment 评论 </MenuItem>
            <MenuItem keyValue="descriptions">Descriptions描述列表 </MenuItem>
            <MenuItem keyValue="empty">Empty空状态 </MenuItem>
            <MenuItem keyValue="image">Image图片 </MenuItem>
            <MenuItem keyValue="list">List列表 </MenuItem>
            <MenuItem keyValue="popover">Popover气泡卡片 </MenuItem>
            <MenuItem keyValue="statistic">Statistic 统计数值 </MenuItem>
            <MenuItem keyValue="table">Table 表格 </MenuItem>
            <MenuItem keyValue="tabs">Tabs 标签页 </MenuItem>
            <MenuItem keyValue="tag">Tag 标签 </MenuItem>
            <MenuItem keyValue="timeline">Timeline 时间轴 </MenuItem>
            <MenuItem keyValue="tooltip">Tooltip 文字提示 </MenuItem>
            <MenuItem keyValue="tree">Tree 树形控件 </MenuItem>
          </SubMenu>
          <SubMenu keyValue="sub6" :collapsible="false">
            <template #title>反馈</template>
            <MenuItem keyValue="alert">Alert 警告提示 </MenuItem>
            <MenuItem keyValue="drawer">Drawer 抽屉 </MenuItem>
            <MenuItem keyValue="message">Message 全局提示 </MenuItem>
            <MenuItem keyValue="modal">Modal 对话框 </MenuItem>
            <MenuItem keyValue="notification">Notification 通知提醒框 </MenuItem>
            <MenuItem keyValue="popconfirm">Popconfirm 气泡确认框 </MenuItem>
            <MenuItem keyValue="progress">Progress 进度条 </MenuItem>
            <MenuItem keyValue="result">Result 结果 </MenuItem>
            <MenuItem keyValue="skeleton">Skeleton 骨架屏 </MenuItem>
            <MenuItem keyValue="spin">Spin 加载中 </MenuItem>
          </SubMenu>
          <SubMenu keyValue="sub7" :collapsible="false">
            <template #title>其他</template>
            <MenuItem keyValue="backTop" style="margin-bottom: 50px"
              >BackTop 回到顶部
            </MenuItem>
          </SubMenu>
        </Menu>
      </section>
      <section class="guideContent scroll-container">xxx</section>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Menu from '@/lib/menu/Menu.vue'
import MenuItem from '@/lib/menu/MenuItem.vue'
import SubMenu from '@/lib/menu/SubMenu.vue'
import Head from '@/views/Head.vue'

const current = ref<string[]>(['mail'])

const selectedKeys = ref<string[]>(['sub1', '1'])
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
    overflow: hidden;
    display: flex;
    > .guideMenu {
      display: inline-flex;
      flex-direction: column;
      overflow-y: auto;
      > .guideMenu-title {
        font-weight: 600;
        display: flex;
        justify-content: center;
        padding: 20px 0 40px 0;
        background: #fafafa;
      }
    }
    > .guideContent {
      background: #ffffff;
      flex-grow: 10;
      overflow-y: auto;
    }
  }
}
</style>
