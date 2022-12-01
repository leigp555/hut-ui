<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'title',
    说明: '标题名称',
    类型: 'string',
    默认值: 'Title'
  },
  {
    rowIndex: 2,
    属性: 'subtitle',
    说明: '副标题名称',
    类型: 'string',
    默认值: 'Subtitle'
  },
  {
    rowIndex: 3,
    属性: 'breadcrumb',
    说明: '面包屑数据',
    类型: '{path:string,breadcrumbName:string}[]',
    默认值: '[]'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'label',
    说明: '标签名',
    类型: 'string',
    默认值: 'Label'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'back',
    说明: '点击返回icon时的回调',
    回调参数: '() => void'
  }
]

const attrContentArr = [
  { componentName: 'PageHeader', attrContent: attrContent1 },
  { componentName: 'Description', attrContent: attrContent2 }
]
</script>
