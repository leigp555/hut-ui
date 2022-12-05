<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'type',
    说明: '打开类型',
    类型: `'info'|'success'|'error'|'warning'|'custom'|'open'`,
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'option',
    说明: 'option的类型',
    类型: `{
  message: VNode | string,
  description: VNode | string,
  icon?: VNode,
  onOk?: () => void,
  onClose?: () => void,
  onClick?: () => void,
  okText?: string,
  width?: number,
  duration?: number | 'infinite',
}`,
    默认值: ''
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Text', attrContent: attrContent1 }]
</script>
