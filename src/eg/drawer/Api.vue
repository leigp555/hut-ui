<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'visible(v-model)',
    说明: 'Drawer 是否可见',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 2,
    属性: 'placement',
    说明: '抽屉的方向',
    类型: `'top' | 'right' | 'bottom' | 'left'`,
    默认值: 'left'
  },
  {
    rowIndex: 3,
    属性: 'classname',
    说明: '自定义类名',
    类型: 'string',
    默认值: 'ui-custom'
  },
  {
    rowIndex: 4,
    属性: 'maskClosable',
    说明: '点击蒙层是否允许关闭',
    类型: 'boolean',
    默认值: 'true'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'afterClose',
    说明: '切换抽屉时动画结束后的回调',
    回调参数: 'function(visible)'
  }
]

const attrContentArr = [{ componentName: 'Drawer', attrContent: attrContent1 }]
</script>
