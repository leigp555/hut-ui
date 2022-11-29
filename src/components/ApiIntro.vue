<template>
  <div class="api-intro-wrap">
    <section v-if="attrContent[0]">
      <Title :level="5">属性</Title>
      <Table
        :headSource="attrTitle"
        :bodySource="attrContent"
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
    <section v-if="eventContent[0]">
      <Title :level="5">事件</Title>
      <Table
        :headSource="eventTitle"
        :bodySource="eventContent"
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
import { withDefaults } from 'vue'
import { Table, Title } from '@/lib'

const props = withDefaults(
  defineProps<{
    attrTitle: { label: string; key: string }[]
    attrContent: {
      rowIndex: number
      属性: string
      说明: string
      类型: string
      默认值: string
    }[]
    eventTitle?: { label: string; key: string }[]
    eventContent?: {
      rowIndex: number
      事件名称: string
      说明: string
      回调参数: string
    }[]
  }>(),
  {
    attrTitle: () => [],
    attrContent: () => [],
    eventContent: () => [],
    eventTitle: () => []
  }
)
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
