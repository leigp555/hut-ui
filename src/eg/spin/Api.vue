<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'size',
    说明: '组件大小',
    类型: 'number',
    默认值: '20'
  },
  {
    rowIndex: 2,
    属性: 'loading',
    说明: '是否处于加载状态',
    类型: 'boolean',
    默认值: 'true'
  },
  {
    rowIndex: 3,
    属性: 'tip',
    说明: '当作为包裹元素时，可以自定义描述文案',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 4,
    属性: 'delay',
    说明: '延迟显示加载效果的时间（防止闪烁)',
    类型: 'number (毫秒)',
    默认值: '0'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Spin', attrContent: attrContent1 }]
</script>
