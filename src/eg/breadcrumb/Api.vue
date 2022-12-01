<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'separator',
    说明: '分隔符',
    类型: 'string',
    默认值: '/'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'href',
    说明: '跳转链接',
    类型: 'string',
    默认值: 'javascript:;'
  }
]

const eventContent = []

const attrContentArr = [
  { componentName: 'Text', attrContent: attrContent1 },
  { componentName: 'Title', attrContent: attrContent2 }
]
</script>
