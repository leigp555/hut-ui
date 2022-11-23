<script setup lang="ts">
import { withDefaults, defineProps, computed, toRefs } from 'vue'
import Spin from '../spin/Spin.vue'

export type TableDataType = {
  key: string
  label: string
}

const props = withDefaults(
  defineProps<{
    headSource?: TableDataType[]
    bodySource?: TableDataType[]
    loading: boolean
  }>(),
  {
    headSource: () => [],
    bodySource: () => [],
    loading: false
  }
)
const { headSource } = toRefs(props)
const headArr = computed<string[]>(() => {
  return headSource.value.map((item) => {
    return item.key
  })
})
</script>

<template>
  <Spin :loading="loading" style="top: 30%">
    <div class="ui-table-wrap">
      <table class="ui-table-content">
        <thead class="ui-table-thead">
          <tr>
            <th v-for="item in headSource" :key="item.key">
              <slot name="tableHead" :data="item.label" :keyValue="item.key" />
            </th>
          </tr>
        </thead>
        <tbody class="ui-table-tbody">
          <tr v-for="item in bodySource" :key="item.key">
            <td v-for="data in headArr" :key="data">
              <slot name="tableBody" :data="item[data]" :keyValue="data" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="ui-table-pagination" v-if="$slots.pagination">
        <slot name="pagination" />
      </div>
    </div>
  </Spin>
</template>
<style lang="scss">
$font_color: #000000d9;
$background_color: #fafafa;
$border_color: #f0f0f0;
.ui-table-wrap {
  > .ui-table-pagination {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 12px;
  }
  > .ui-table-content {
    table-layout: auto;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    color: $font_color;
    line-height: 1.5715;
    font-size: 14px;
    background: #fff;
    border-radius: 2px;
    > .ui-table-thead {
      th {
        font-weight: 500;
        background: $background_color;
        border-bottom: 1px solid $border_color;
        transition: background 0.3s;
        padding: 16px;
        overflow-wrap: break-word;
      }
    }
    > .ui-table-tbody {
      vertical-align: middle;
      > tr {
        &:hover {
          background: $background_color;
          transition: background 0.3s;
        }
        td {
          border-bottom: 1px solid $border_color;
          padding: 16px;
          overflow-wrap: break-word;
        }
      }
    }
  }
}
</style>
