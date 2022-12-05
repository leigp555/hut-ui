<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'status',
    说明: '结果的状态,决定图标和颜色',
    类型: `'error' | 'info' | 'warning' | 'success'`,
    默认值: ''
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Result', attrContent: attrContent1 }]
</script>
