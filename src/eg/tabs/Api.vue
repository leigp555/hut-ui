<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'activeKey',
    说明: '选中的title',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'centered',
    说明: '是否居中',
    类型: 'boolean',
    默认值: 'false'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'keyValue',
    说明: '对应 activeKey',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'tab',
    说明: '选项卡头显示文字',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'disabled',
    说明: '是否禁用',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '切换面板的回调',
    回调参数: 'Function(activeKey)'
  }
]

const attrContentArr = [
  { componentName: 'Tabs', attrContent: attrContent1 },
  { componentName: 'Tab', attrContent: attrContent2 }
]
</script>
