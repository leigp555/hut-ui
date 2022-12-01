<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'trigger',
    说明: '触发方式',
    类型: `'hover' | 'click' | 'contextmenu'`,
    默认值: 'hover'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Dropdown', attrContent: attrContent1 }]
</script>
