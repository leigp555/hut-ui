<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'title',
    说明: '步骤标题',
    类型: 'string',
    默认值: 'title'
  },
  {
    rowIndex: 2,
    属性: 'order',
    说明: '步骤序号（提供为一值）',
    类型: 'number',
    默认值: 'null'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'current',
    说明: '当前步骤',
    类型: 'number',
    默认值: '1'
  },
  {
    rowIndex: 1,
    属性: 'totalStep',
    说明: '步骤总数',
    类型: 'number',
    默认值: 'null'
  }
]

const eventContent = []

const attrContentArr = [
  { componentName: 'Step', attrContent: attrContent1 },
  { componentName: 'Steps', attrContent: attrContent2 }
]
</script>
