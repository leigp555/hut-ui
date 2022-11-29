<template>
  <div class="api-intro-wrap">
    <section>
      <Title :level="5">属性</Title>
      <Table
        :headSource="titleData"
        :bodySource="dataBody"
        style-mode="auto"
        custom-class="table-display"
      >
        <template #tableHead="item">
          <span>{{ item.dataValue }}</span>
        </template>
        <template #tableBody="item">
          <span v-if="item.keyValue === '类型'" style="color: #c41d7f">{{
            item.dataValue
          }}</span>
          <span
            v-else-if="item.keyValue === '属性'"
            style="color: #595959; font-weight: 600; white-space: nowrap"
            >{{ item.dataValue }}</span
          >
          <span
            v-else-if="item.keyValue === '默认值'"
            style="
              padding: 0.2em 0.4em;
              background-color: #f2f4f5;
              border-radius: 3px;
              border: 1px solid #f0f0f0;
            "
            >{{ item.dataValue }}</span
          >
          <span v-else>{{ item.dataValue }}</span>
        </template>
      </Table>
    </section>
    <section>
      <Title :level="5">事件</Title>
      <Table
        :headSource="titleData2"
        :bodySource="dataBody2"
        style-mode="auto"
        custom-class="table-display"
      >
        <template #tableHead="item">
          <span>{{ item.dataValue }}</span>
        </template>
        <template #tableBody="item">
          <span v-if="item.keyValue === '回调参数'" style="color: #c41d7f">{{
            item.dataValue
          }}</span>
          <span
            v-else-if="item.keyValue === '事件名称'"
            style="color: #595959; font-weight: 600; white-space: nowrap"
            >{{ item.dataValue }}</span
          >
          <span v-else>{{ item.dataValue }}</span>
        </template>
      </Table>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Table, Title } from '@/lib'

const dataBody = [
  {
    rowIndex: 1,
    属性: 'radius',
    说明: '圆形按钮',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 2,
    属性: 'disabled',
    说明: '禁用按钮',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 3,
    属性: 'size',
    说明: '按钮大小',
    类型: `'big' | 'normal' | 'small'`,
    默认值: 'normal'
  },
  {
    rowIndex: 4,
    属性: 'type',
    说明: '按钮类型',
    类型: `'primary' | 'text' | 'link' | 'dashed' | 'default'`,
    默认值: 'primary'
  },
  {
    rowIndex: 5,
    属性: 'loading',
    说明: '加载中状态',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 6,
    属性: 'danger',
    说明: '危险按钮',
    类型: 'boolean',
    默认值: 'false'
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

const titleData2 = [
  {
    label: '事件名称',
    key: '事件名称'
  },
  {
    label: '说明',
    key: '说明'
  },
  {
    label: '回调参数',
    key: '回调参数'
  }
]
const dataBody2 = [
  {
    rowIndex: 1,
    事件名称: 'click',
    说明: '点击按钮时的回调',
    回调参数: '(event) => void'
  }
]
</script>

<style lang="scss">
.api-intro-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
  .table-display {
    border: 1px solid #f0f0f0;
    border-bottom: none;
    border-radius: 2px;
    font-size: 13px;
    td {
      text-align: center;
    }
  }
}
</style>
