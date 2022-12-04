<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'border',
    说明: '是否有border',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 2,
    属性: 'shadow',
    说明: '是否有shadow',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 3,
    属性: 'title',
    说明: 'card标题',
    类型: 'string',
    默认值: ''
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Card', attrContent: attrContent1 }]
</script>
