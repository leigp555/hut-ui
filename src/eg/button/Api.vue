<template>
  <ApiIntro
    :attr-title="attrTitle"
    :attr-content="attrContent"
    :event-title="eventTitle"
    :event-content="eventContent"
  />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrTitle = [
  {
    label: '属性',
    key: '属性'
  },
  {
    label: '说明',
    key: '说明'
  },
  {
    label: '类型',
    key: '类型'
  },
  {
    label: '默认值',
    key: '默认值'
  }
]
const attrContent = [
  {
    rowIndex: 1,
    属性: 'radius',
    说明: '圆形按钮',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 2,
    属性: 'disabled',
    说明: '禁用按钮',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 3,
    属性: 'size',
    说明: '按钮大小',
    类型: `'big' | 'normal' | 'small'`,
    默认值: 'normal'
  },
  {
    rowIndex: 4,
    属性: 'type',
    说明: '按钮类型',
    类型: `'primary' | 'text' | 'link' | 'dashed' | 'default'`,
    默认值: 'primary'
  },
  {
    rowIndex: 5,
    属性: 'loading',
    说明: '加载中状态',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 6,
    属性: 'danger',
    说明: '危险按钮',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventTitle = [
  {
    label: '事件名称',
    key: '事件名称'
  },
  {
    label: '说明',
    key: '说明'
  },
  {
    label: '回调参数',
    key: '回调参数'
  }
]
const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'click',
    说明: '点击按钮时的回调',
    回调参数: '(event) => void'
  }
]
</script>
