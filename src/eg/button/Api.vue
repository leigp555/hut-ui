<template>
  <Table :headSource="titleData" :bodySource="dataBody" style-mode="auto">
    <template #tableHead="item">
      <span>{{ item.dataValue }}</span>
    </template>
    <template #tableBody="item">
      <span style="color: #1890ff">{{ item.dataValue }}</span>
    </template>
  </Table>
</template>

<script lang="ts" setup>
import { Table } from '@/lib'

const dataBody = [
  {
    rowIndex: 1,
    属性: 'offsetTop',
    说明: '距离顶部多少时开始固钉',
    类型: 'HTMLElement',
    默认值: 'document.body'
  },
  {
    rowIndex: 2,
    属性: 'container',
    说明: '滑动的容器',
    类型: 'number',
    默认值: '0'
  },
  {
    rowIndex: 3,
    属性: 'rowPosition',
    说明: '水平位置',
    类型: `'start' | 'center' | 'end'`,
    默认值: 'start'
  }
]
const titleData = [
  {
    label: '属性',
    key: '属性'
  },
  {
    label: '说明',
    key: '说明'
  },
  {
    label: '类型',
    key: '类型'
  },
  {
    label: '默认值',
    key: '默认值'
  }
]
</script>
