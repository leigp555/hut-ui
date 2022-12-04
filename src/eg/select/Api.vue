<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value(v-model)',
    说明: '指定当前选中的条目',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'options',
    说明: 'options 数据',
    类型: 'SelectOption[]',
    默认值: '[]'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '选中时的回调',
    回调参数: '(content: string) => void'
  }
]

const attrContentArr = [{ componentName: 'Select', attrContent: attrContent1 }]
</script>
