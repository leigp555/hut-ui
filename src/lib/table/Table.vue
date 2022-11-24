<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { withDefaults, defineProps, computed, toRefs } from 'vue'
import Spin from '../spin/Spin.vue'
import Skeleton from '../skeleton/Skeleton.vue'
import { TableDataType } from '@/lib/list/Type'

const props = withDefaults(
  defineProps<{
    headSource?: TableDataType[]
    bodySource?: TableDataType[]
    loading?: boolean
    styleMode?: 'auto' | 'fixed'
    bordered?: boolean
  }>(),
  {
    headSource: () => [],
    bodySource: () => [],
    loading: false,
    styleMode: 'auto',
    bordered: false
  }
)
const { bodySource } = toRefs(props)

const skeletonShow = computed<boolean>(() => {
  return !bodySource.value[0]
})

const getX = (
  customCellFn: (index: number) => { colspan?: number; rowspan?: number },
  rowIndex
): { colspan?: number; rowspan?: number } => {
  if (customCellFn) {
    return customCellFn(rowIndex)
  }
  return {}
}
</script>

<template>
  <Spin :loading="loading && !skeletonShow" style="top: 40%">
    <div class="ui-table-wrap">
      <div class="ui-table-head" v-if="$slots.head">
        <slot name="head" />
      </div>
      <table
        v-bind="$attrs"
        class="ui-table-content"
        :class="{
          'ui-table-fixed': styleMode === 'fixed',
          'ui-table-bordered': bordered
        }"
      >
        <thead class="ui-table-thead">
          <tr>
            <th
              v-for="item in headSource"
              :key="item.key"
              :title="item.label"
              class="ui-table-thead-cell"
              :colspan="item.colspan"
            >
              <slot name="tableHead" :data="item.label" :keyValue="item.key" />
            </th>
          </tr>
        </thead>
        <tbody class="ui-table-tbody">
          <tr v-for="item in bodySource" :key="item.key">
            <td
              v-for="data in headSource"
              :key="data"
              :title="item[data.key]"
              class="ui-table-tbody-cell"
              :colspan="getX(data.customCell, item.rowIndex).colspan"
              :rowspan="getX(data.customCell, item.rowIndex).rowspan"
            >
              <slot name="tableBody" :data="item[data.key]" :keyValue="data.key" />
            </td>
          </tr>
        </tbody>
      </table>

      <!--        pagination首次加载骨架图占位，之后spin组件做加载动画-->
      <div class="ui-list-skeleton" v-show="skeletonShow">
        <Skeleton
          active
          :paragraph="{ rows: 8 }"
          :loading="loading"
          :title-appear="false"
        />
      </div>
      <div class="ui-table-footer" v-if="$slots.footer">
        <slot name="footer" />
      </div>
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
  color: $font_color;
  line-height: 1.5715;
  font-size: 14px;
  > .ui-table-head {
    border: 1px solid $border_color;
    border-radius: 2px 2px 0 0;
    padding: 16px;
  }
  > .ui-table-footer {
    border: 1px solid $border_color;
    border-top: none;
    border-radius: 0 0 2px 2px;
    padding: 16px;
    background: $background_color;
  }
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
    border-collapse: separate;
    border-spacing: 0;
    color: $font_color;
    line-height: 1.5715;
    font-size: 14px;
    background: #fff;
    border-radius: 2px;
    &.ui-table-bordered {
      th,
      td {
        border-right: 1px solid $border_color;
        &:first-child {
          border-left: 1px solid $border_color;
        }
      }
    }
    &.ui-table-fixed {
      table-layout: fixed;
      td,
      th {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: keep-all;
      }
    }
    > .ui-table-thead {
      th {
        font-weight: 500;
        background: $background_color;
        border-bottom: 1px solid $border_color;
        transition: background 0.3s;
        padding: 16px;
        overflow-wrap: break-word;
        //[colspan='1']不为1的元素居中
        &:not([colspan='1']) {
          text-align: center;
        }
        &[colspan='0'] {
          display: none;
        }
        &[rowspan='0'] {
          display: none;
        }
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
          &[rowspan='0'] {
            display: none;
          }
          &[colspan='0'] {
            display: none;
          }
        }
      }
    }
  }
}
</style>
