<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value(v-model)',
    说明: '当前数，受控值',
    类型: 'number',
    默认值: '1'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '选择时的回调',
    回调参数: 'Function(value: number)'
  }
]

const attrContentArr = [{ componentName: 'Rate', attrContent: attrContent1 }]
</script>
