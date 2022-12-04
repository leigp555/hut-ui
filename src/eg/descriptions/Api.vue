<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'label',
    说明: '标签名',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'contentSpan',
    说明: 'content内容宽度同Col组件设置',
    类型: 'number',
    默认值: ''
  },
  {
    rowIndex: 3,
    属性: 'labelSpan',
    说明: 'content内容宽度同Col组件设置',
    类型: 'number',
    默认值: ''
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'DesItemColumn', attrContent: attrContent1 }]
</script>
