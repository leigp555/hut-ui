<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'gap',
    说明: '子元素间距',
    类型: 'string',
    默认值: '8px'
  },
  {
    rowIndex: 2,
    属性: 'justify',
    说明: '水平方向布局',
    类型: `'center' | 'start' | 'end' | 'space-between' | 'space-around'`,
    默认值: 'start'
  },
  {
    rowIndex: 3,
    属性: 'alignItems',
    说明: '垂直方向布局',
    类型: `'center' | 'start' | 'end'`,
    默认值: 'center'
  }
]

const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'span',
    说明: '元素宽度',
    类型: 'number',
    默认值: '100'
  },
  {
    rowIndex: 2,
    属性: 'offset',
    说明: '元素左边偏移量',
    类型: `number | 'auto'`,
    默认值: '0'
  }
]

const eventContent = []

const attrContentArr = [
  { componentName: 'Row', attrContent: attrContent1 },
  { componentName: 'Col', attrContent: attrContent2 }
]
</script>
