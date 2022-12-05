<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'mode',
    说明: '位置',
    类型: `'left' | 'right' | 'alternate'`,
    默认值: 'left'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'color',
    说明: '圆圈颜色',
    类型: 'string',
    默认值: '#1890ff'
  }
]

const eventContent = []

const attrContentArr = [
  { componentName: 'Timeline', attrContent: attrContent1 },
  { componentName: 'TimelineItem', attrContent: attrContent2 }
]
</script>
