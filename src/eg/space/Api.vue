<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'direction',
    说明: '分布方式',
    类型: `'row' | 'column'`,
    默认值: 'row'
  },
  {
    rowIndex: 2,
    属性: 'size',
    说明: '间距大小',
    类型: 'string|number',
    默认值: 'false'
  },
  {
    rowIndex: 3,
    属性: 'alignItems',
    说明: '垂直分布',
    类型: `'start' | 'center' | 'end' | 'baseline'`,
    默认值: 'start'
  },
  {
    rowIndex: 4,
    属性: 'justifyContent',
    说明: '水平分布',
    类型: `'start' | 'center' | 'end'`,
    默认值: 'start'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Space', attrContent: attrContent1 }]
</script>
