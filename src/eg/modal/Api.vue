<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'visible(v-model)',
    说明: '对话框是否可见',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 2,
    属性: 'classname',
    说明: '自定义类名',
    类型: 'string',
    默认值: 'ui-custom'
  },
  {
    rowIndex: 3,
    属性: 'maskClosable',
    说明: '点击蒙层是否允许关闭',
    类型: 'boolean',
    默认值: 'true'
  },
  {
    rowIndex: 4,
    属性: 'width',
    说明: '弹出框宽度',
    类型: 'number',
    默认值: '300'
  },
  {
    rowIndex: 5,
    属性: 'top',
    说明: '弹出框距离顶部的距离',
    类型: 'number',
    默认值: '100'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'type',
    说明: '提示类型',
    类型: `'info'|'success'|'error'|'warning'|'custom'`,
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'option',
    说明: 'modal配置',
    类型: `{
  title: VNode | string,
  content: VNode | string,
  icon?: VNode,
  onOk?: () => void,
  onCancel?: () => void,
  cancelText?: string,
  okText?: string,
  width?: number,
  top?: number,
  maskClosable?: boolean
}`,
    默认值: ''
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '弹窗关闭后的回调',
    回调参数: '(visible:boolean) => void'
  }
]
const attrContentArr = [
  { componentName: 'Model', attrContent: attrContent1 },
  { componentName: 'model', attrContent: attrContent2 }
]
</script>
