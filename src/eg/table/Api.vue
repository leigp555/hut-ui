<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'headSource',
    说明: '头部数据',
    类型: 'TableDataType[]',
    默认值: '[]'
  },
  {
    rowIndex: 2,
    属性: 'bodySource',
    说明: '代码标记',
    类型: '表身数据数组',
    默认值: '[]'
  },
  {
    rowIndex: 3,
    属性: 'loading',
    说明: '是否为加载中状态',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 4,
    属性: 'styleMode',
    说明: '表格样式',
    类型: `'auto' | 'fixed'`,
    默认值: 'auto'
  },
  {
    rowIndex: 5,
    属性: 'bordered',
    说明: '是否有边框',
    类型: 'boolean',
    默认值: 'true'
  },
  {
    rowIndex: 6,
    属性: 'customClass',
    说明: '自定义class',
    类型: `string`,
    默认值: 'custom-class-table'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Text', attrContent: attrContent1 }]
</script>
