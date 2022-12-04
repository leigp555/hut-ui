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
    属性: 'treeData',
    说明: 'treeNodes 数据',
    类型: 'TreeSelectOptions[]',
    默认值: '[]'
  },
  {
    rowIndex: 3,
    属性: 'placeholder',
    说明: '选择框默认文字',
    类型: `string`,
    默认值: '请选择'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '选中树节点时调用此函数',
    回调参数: 'function(value:string)'
  }
]

const attrContentArr = [{ componentName: 'TreeSelect', attrContent: attrContent1 }]
</script>
