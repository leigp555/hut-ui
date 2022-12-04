<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'checked',
    说明: '选中状态',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 2,
    属性: 'disabled',
    说明: '禁用选项',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 3,
    属性: 'value',
    说明: '根据 value 进行比较，判断是否选中',
    类型: 'any',
    默认值: ''
  },
  {
    rowIndex: 4,
    属性: 'name',
    说明: 'input[type="radio"] 的 name 属性',
    类型: 'string',
    默认值: ''
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'value',
    说明: '用于设置当前选中的值',
    类型: 'any',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'name',
    说明: 'RadioGroup 下所有 input[type="radio"] 的 name 属性',
    类型: 'string',
    默认值: ''
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '选项变化时的回调函数',
    回调参数: 'Function(checked:boolean)'
  }
]

const attrContentArr = [
  { componentName: 'Radio', attrContent: attrContent1 },
  { componentName: 'RadioGroup', attrContent: attrContent2 }
]
</script>
