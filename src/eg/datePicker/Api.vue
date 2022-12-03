<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value',
    说明: '日期设置',
    类型: 'string',
    默认值: `dayjs().format('YYYY-MM-DD')`
  },
  {
    rowIndex: 2,
    属性: 'placeholder',
    说明: 'input占位',
    类型: 'string',
    默认值: '请选择日期'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '日期改变时的回调',
    回调参数: '(newDate:string) => void'
  }
]

const attrContentArr = [{ componentName: 'DatePicker', attrContent: attrContent1 }]
</script>
