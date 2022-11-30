<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'position',
    说明: '文字位置',
    类型: `'left' | 'right' | 'center' | 'normal'`,
    默认值: 'normal'
  },
  {
    rowIndex: 2,
    属性: 'leftDistance',
    说明: '文字距离左边的距离',
    类型: 'string',
    默认值: '100%'
  },
  {
    rowIndex: 3,
    属性: 'rightDistance',
    说明: '文字距离右边的距离',
    类型: 'string',
    默认值: '100%'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Divider', attrContent: attrContent1 }]
</script>
