<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'title',
    说明: '数值的标题',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'value',
    说明: '数值内容',
    类型: `string | number | Dayjs`,
    默认值: ''
  },
  {
    rowIndex: 3,
    属性: 'precision',
    说明: '数值精度',
    类型: 'number',
    默认值: '0'
  },
  {
    rowIndex: 4,
    属性: 'suffix',
    说明: '设置数值的后缀',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 5,
    属性: 'valueStyle',
    说明: 'value样式',
    类型: 'Partial<CSSStyleDeclaration>',
    默认值: ''
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Statistic', attrContent: attrContent1 }]
</script>
