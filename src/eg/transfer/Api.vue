<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'source',
    说明: '数据源，其中的数据将会被渲染到左边一栏中',
    类型: 'TransferOptions[]',
    默认值: '[]'
  },
  {
    rowIndex: 2,
    属性: 'source',
    说明: '选中的项，其中的数据将会被渲染到右边一栏中',
    类型: 'TransferOptions[]',
    默认值: '[]'
  },
  {
    rowIndex: 3,
    属性: 'titles',
    说明: '标题集合，顺序从左至右标题集合，顺序从左至右',
    类型: 'string[]',
    默认值: '[]'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '选项在两栏之间转移时的回调函数',
    回调参数: 'Function(sourceArr: TransferOptions, targetArr: TransferOptions)'
  }
]

const attrContentArr = [{ componentName: 'Transfer', attrContent: attrContent1 }]
</script>
