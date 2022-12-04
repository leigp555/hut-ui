<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value(v-model)',
    说明: '当前值',
    类型: '当前值',
    默认值: '0'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'InputNumber', attrContent: attrContent1 }]
</script>
