<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'activeKey(v-model)',
    说明: '当前激活 tab 面板的 key',
    类型: 'string[]',
    默认值: '[]'
  },
  {
    rowIndex: 2,
    属性: 'accordion',
    说明: '手风琴模式',
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
    属性: 'header',
    说明: '面板头内容',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 3,
    属性: 'disabled',
    说明: '禁用',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = []

const attrContentArr = [
  { componentName: 'Collapse', attrContent: attrContent1 },
  { componentName: 'Panel', attrContent: attrContent2 }
]
</script>
