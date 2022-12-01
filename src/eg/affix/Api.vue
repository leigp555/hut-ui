<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'offsetTop',
    说明: '距离窗口顶部达到指定偏移量后触发',
    类型: 'number',
    默认值: '50'
  },
  {
    rowIndex: 2,
    属性: 'scrollContainer',
    说明: '设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
    类型: '() => HTMLElement',
    默认值: '() => window'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '固定状态改变时触发的回调函数',
    回调参数: '(affixed?: boolean) => void'
  }
]

const attrContentArr = [{ componentName: 'Affix', attrContent: attrContent1 }]
</script>
