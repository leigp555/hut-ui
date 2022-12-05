<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'placement',
    说明: '位置',
    类型: 'Placement',
    默认值: 'topCenter'
  },
  {
    rowIndex: 2,
    属性: 'okText',
    说明: '确认按钮的文字',
    类型: 'string',
    默认值: 'confirm'
  },
  {
    rowIndex: 3,
    属性: 'cancelText',
    说明: '取消按钮的文字',
    类型: 'string',
    默认值: 'cancel'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'confirm',
    说明: '点击确认按钮时的回调',
    回调参数: '() => void'
  },
  {
    rowIndex: 1,
    事件名称: 'cancel',
    说明: '点击取消按钮时的回调',
    回调参数: '() => void'
  }
]

const attrContentArr = [{ componentName: 'Popconfirm', attrContent: attrContent1 }]
</script>
