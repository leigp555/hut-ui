<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'gap',
    说明: '子元素间距',
    类型: 'string',
    默认值: '0px'
  },
  {
    rowIndex: 2,
    属性: 'row',
    说明: '是否为垂直布局',
    类型: `boolean`,
    默认值: 'false'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Layout', attrContent: attrContent1 }]
</script>
