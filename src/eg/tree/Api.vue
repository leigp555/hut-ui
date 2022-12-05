<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'options',
    说明: '源数据',
    类型: 'TreeOptions[]',
    默认值: '[]'
  },
  {
    rowIndex: 2,
    属性: 'selectedValues',
    说明: '选中的title',
    类型: 'string[]',
    默认值: '[]'
  },
  {
    rowIndex: 3,
    属性: 'checkable',
    说明: '允许勾选',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'select',
    说明: '点击树节点触发',
    回调参数: '(notes:string) => void'
  },
  {
    rowIndex: 2,
    事件名称: 'change',
    说明: '点击树节点触发',
    回调参数: '(noteArr:string[]) => void'
  }
]

const attrContentArr = [{ componentName: 'Tree', attrContent: attrContent1 }]
</script>
