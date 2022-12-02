<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value',
    说明: '输入框文字',
    类型: 'string',
    默认值: 'null'
  },
  {
    rowIndex: 2,
    属性: 'options',
    说明: '弹出框内容',
    类型: '{value:any}[]',
    默认值: '[]'
  },
  {
    rowIndex: 3,
    属性: 'placeholder',
    说明: '输入框提示内容',
    类型: 'string',
    默认值: 'null'
  },
  {
    rowIndex: 4,
    属性: 'custom',
    说明: '自定义弹出框',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'search',
    说明: '搜索补全项的时候调用',
    回调参数: '(value)=>({value:any}[])'
  },
  {
    rowIndex: 1,
    事件名称: 'select',
    说明: '被选中时调用，参数为选中项的 value 值',
    回调参数: '(value)=>void'
  }
]

const attrContentArr = [{ componentName: 'AutoComplete', attrContent: attrContent1 }]
</script>
