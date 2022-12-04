<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value(v-model)',
    说明: '展示日期',
    类型: 'dayjs',
    默认值: 'dayjs'
  },
  {
    rowIndex: 2,
    属性: 'size',
    说明: '日历大小',
    类型: `'small' | 'normal'`,
    默认值: 'normal'
  },
  {
    rowIndex: 3,
    属性: 'noBorder',
    说明: '没有边框',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '日期变化时的回调, 面板变化有可能导致日期变化',
    回调参数: 'function(date: dayjs | string）'
  }
]

const attrContentArr = [{ componentName: 'Calendar', attrContent: attrContent1 }]
</script>
