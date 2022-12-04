<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value(v-model)',
    说明: '设置当前取值',
    类型: 'number',
    默认值: '0'
  },
  {
    rowIndex: 2,
    属性: 'disabled',
    说明: '禁用',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入',
    回调参数: 'Function(value)'
  },
  {
    rowIndex: 1,
    事件名称: 'afterChange',
    说明: '与 mouseup 触发时机一致，把当前值作为参数传入。',
    回调参数: 'Function(value)'
  }
]

const attrContentArr = [{ componentName: 'Slider', attrContent: attrContent1 }]
</script>
