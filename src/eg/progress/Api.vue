<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'percent',
    说明: '百分比',
    类型: 'number',
    默认值: '0'
  },
  {
    rowIndex: 2,
    属性: 'status',
    说明: '状态',
    类型: `'active' | 'exception'`,
    默认值: ''
  },
  {
    rowIndex: 3,
    属性: 'showInfo',
    说明: '是否显示进度数值或状态图标',
    类型: 'boolean',
    默认值: 'true'
  },
  {
    rowIndex: 4,
    属性: 'size',
    说明: '大小',
    类型: `'small' | 'normal'`,
    默认值: 'normal'
  },
  {
    rowIndex: 5,
    属性: 'format',
    说明: '进度数值格式化',
    类型: `(percent: number) => string`,
    默认值: ''
  },
  {
    rowIndex: 6,
    属性: 'type',
    说明: '类型，可选 line circle step',
    类型: `(percent: number) => string`,
    默认值: 'line'
  },
  {
    rowIndex: 7,
    属性: 'steps',
    说明: '进度条总共步数',
    类型: `number`,
    默认值: ''
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Progress', attrContent: attrContent1 }]
</script>
