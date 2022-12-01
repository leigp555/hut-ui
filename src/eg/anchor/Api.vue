<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'customClass',
    说明: '自定义类',
    类型: 'string',
    默认值: 'custom-class'
  },
  {
    rowIndex: 2,
    属性: 'scrollContainer',
    说明: '指定滚动的容器',
    类型: '() => HTMLElement',
    默认值: '() => window'
  },
  {
    rowIndex: 3,
    属性: 'affix',
    说明: '固定模式',
    类型: 'boolean',
    默认值: 'true'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'title',
    说明: '锚点标题',
    类型: 'string',
    默认值: '""'
  },
  {
    rowIndex: 2,
    属性: 'href',
    说明: '锚点链接',
    类型: 'string',
    默认值: 'null'
  },
  {
    rowIndex: 3,
    属性: 'nested',
    说明: '是否内嵌',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'click',
    说明: '点击锚点并跳转',
    回调参数: '() => void'
  }
]

const attrContentArr = [
  { componentName: 'Anchor', attrContent: attrContent1 },
  { componentName: 'AnchorLink', attrContent: attrContent2 }
]
</script>
