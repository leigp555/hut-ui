<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'current',
    说明: '当前页页码',
    类型: 'number',
    默认值: '1'
  },
  {
    rowIndex: 2,
    属性: 'total',
    说明: '总页数',
    类型: 'number',
    默认值: '0'
  },
  {
    rowIndex: 3,
    属性: 'pageSize',
    说明: '每页数据条数',
    类型: 'number',
    默认值: '10'
  },
  {
    rowIndex: 4,
    属性: 'disabled',
    说明: '禁用',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 5,
    属性: 'showQuickJumper',
    说明: '显示快速跳转',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 6,
    属性: 'showTotal',
    说明: '显示总页数',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 7,
    属性: 'showSizeChanger',
    说明: '显示改变页面大小的选项',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 8,
    属性: 'pageSizeOptions',
    说明: '改变页面大小的选项',
    类型: 'string[]',
    默认值: `['10', '20', '30', '40', '50']`
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '改变当前页',
    回调参数: '(newPage:number) => void'
  },
  {
    rowIndex: 2,
    事件名称: 'pageSizeChange',
    说明: '改变页面大小',
    回调参数: '(newSize:number) => void'
  }
]

const attrContentArr = [{ componentName: 'Pagination', attrContent: attrContent1 }]
</script>
