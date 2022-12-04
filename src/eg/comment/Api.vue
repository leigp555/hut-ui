<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'data',
    说明: '数据',
    类型: 'CommentData[]',
    默认值: '[]'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Comment', attrContent: attrContent1 }]
</script>
