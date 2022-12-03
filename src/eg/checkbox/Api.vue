<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'checked',
    说明: '是否勾选',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 2,
    属性: 'disabled',
    说明: '是否禁用',
    类型: 'boolean',
    默认值: 'false'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'value',
    说明: '选中的选项',
    类型: ' CheckBoxOption[]',
    默认值: '[]'
  },
  {
    rowIndex: 2,
    属性: 'options',
    说明: '选项数据',
    类型: ' CheckBoxOption[]',
    默认值: '[]'
  },
  {
    rowIndex: 3,
    属性: 'direction',
    说明: '分布方式',
    类型: `'row' | 'column'`,
    默认值: 'row'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '选项状态改变时的回调',
    回调参数: '(checked:boolean) => void'
  }
]

const attrContentArr = [
  { componentName: 'Checkbox', attrContent: attrContent1 },
  { componentName: 'Title', attrContent: attrContent2 }
]
</script>
