<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value',
    说明: 'value(v-model)',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'options',
    说明: '提示信息',
    类型: ' MentionsOptions[]',
    默认值: '[]'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'select',
    说明: '选择选项时触发',
    回调参数: '(selectOption:string) => void'
  }
]

const attrContentArr = [{ componentName: 'Mentions', attrContent: attrContent1 }]
</script>
