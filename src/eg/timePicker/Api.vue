<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value',
    说明: 'value(v-model)',
    类型: 'dayjs(HH:mm:ss)',
    默认值: `dayjs().format('HH:mm:ss')`
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'level',
    说明: '标题等级',
    类型: 'string(1-6)|number(1-6)',
    默认值: '4'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '时间发生变化的回调',
    回调参数: 'function(time: dayjs ): void'
  }
]

const attrContentArr = [{ componentName: 'TimePicker', attrContent: attrContent1 }]
</script>
