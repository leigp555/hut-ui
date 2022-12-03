<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value',
    说明: '指定选中项',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'options',
    说明: '数据源',
    类型: 'CascaderOptions[]',
    默认值: '[]'
  },
  {
    rowIndex: 3,
    属性: 'placeholder',
    说明: '输入框占位文本',
    类型: 'string',
    默认值: ''
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '选中内容改变时的回调',
    回调参数: '(value:string) => void'
  }
]

const attrContentArr = [{ componentName: 'Cascader', attrContent: attrContent1 }]
</script>
