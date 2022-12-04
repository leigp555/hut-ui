<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'checked',
    说明: '开关状态',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 2,
    属性: 'disabled',
    说明: '禁用',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '变化时回调函数',
    回调参数: 'Function(checked: boolean)'
  }
]

const attrContentArr = [{ componentName: 'Switch', attrContent: attrContent1 }]
</script>
