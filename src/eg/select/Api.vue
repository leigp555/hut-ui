<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'strong',
    说明: '加粗文字',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 2,
    属性: 'code',
    说明: '代码标记',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 3,
    属性: 'keyboard',
    说明: '键盘标记',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 4,
    属性: 'mark',
    说明: '文字标记',
    类型: 'boolean',
    默认值: 'false'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'level',
    说明: '标题等级',
    类型: 'string(1-6)|number(1-6)',
    默认值: '4'
  }
]

const eventContent = []

const attrContentArr = [
  { componentName: 'Text', attrContent: attrContent1 },
  { componentName: 'Title', attrContent: attrContent2 }
]
</script>
