<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'dataSource',
    说明: 'list数据',
    类型: 'ListData[]',
    默认值: '[]'
  },
  {
    rowIndex: 2,
    属性: 'loading',
    说明: '是否处于加载中状态',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 3,
    属性: 'mode',
    说明: '加载模式',
    类型: `'loadMore' | 'normal' | 'pagination'`,
    默认值: 'normal'
  },
  {
    rowIndex: 4,
    属性: 'skeletonAvatar',
    说明: '是否需要头像骨架图',
    类型: 'boolean',
    默认值: 'true'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'List', attrContent: attrContent1 }]
</script>
