<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'placement',
    说明: '弹出位置',
    类型: 'Position',
    默认值: 'topCenter'
  },
  {
    rowIndex: 2,
    属性: 'color',
    说明: '背景颜色',
    类型: 'string',
    默认值: '#ffffff'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Tooltip', attrContent: attrContent1 }]
</script>
