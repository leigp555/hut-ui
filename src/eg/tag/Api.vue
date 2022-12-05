<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'color',
    说明: '标签色',
    类型: 'string',
    默认值: '#ffffff'
  },
  {
    rowIndex: 2,
    属性: 'closable',
    说明: '标签是否可以关闭',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'close',
    说明: '关闭时的回调',
    回调参数: 'Function(el: HTMLSpanElement)'
  }
]

const attrContentArr = [{ componentName: 'Tag', attrContent: attrContent1 }]
</script>
