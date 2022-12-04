<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'src',
    说明: '图片链接',
    类型: 'string',
    默认值: ''
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Image', attrContent: attrContent1 }]
</script>
