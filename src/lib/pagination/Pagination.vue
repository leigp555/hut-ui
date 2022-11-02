<template>
  <div class="ui-pagination-wrap">
    <ol class="ui-pagination-ol">
      <li>
        <SvgIcon name="back" width="1em" height="1em" />
      </li>
      <li
        v-for="item in 5"
        :key="item"
        :class="{
          'ui-pagination-currentPage': startPage + item === current ? true : false
        }"
      >
        {{ startPage + item }}
      </li>
      <li :style="{ transform: 'rotate(180deg)' }">
        <SvgIcon name="back" width="1em" height="1em" />
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import {
  withDefaults,
  defineProps,
  defineEmits,
  computed,
  toRefs,
  onMounted
} from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

// v-model:current="current"
// :total="50"
// v-model:pageSize="pageSize"
// @pageSizeChange="pageSize = $event"
// disabled
//   :pageSizeOptions="pageSizeOptions"
// showQuickJumper
// showTotal
// @change="current = $event"

defineEmits(['update:current', 'update:pageSize', 'pageSizeChange', 'change'])
const props = withDefaults(
  defineProps<{
    current?: number
    total: number
    pageSize: number
    disabled: boolean
    showQuickJumper: boolean
    showTotal: boolean
    pageSizeOptions: []
  }>(),
  {
    current: 1,
    total: 0,
    pageSize: 10,
    disabled: false,
    showQuickJumper: false,
    showTotal: false,
    pageSizeOptions: () => ['10', '20', '30', '40', '50']
  }
)
const {
  current // 当前第几页
} = toRefs(props)
const startPage = computed(() => {
  if (current.value >= 3) {
    return current.value - 3
  }
  return 0
})
onMounted(() => {
  // 检查初始页码是否合理 >1
  if (current.value < 1) current.value = 1
})
</script>

<style lang="scss">
.ui-pagination-wrap {
  .ui-pagination-ol {
    list-style: none;
    display: flex;
    > li {
      background-color: #ffffff;
      font-weight: 500;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-width: 32px;
      height: 32px;
      line-height: 32px;
      padding: 1px;
      margin-right: 8px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      svg {
        fill: #000000;
      }
      &:hover {
        border: 1px solid #1890ff;
        color: #1890ff;
        svg {
          fill: #1890ff;
        }
      }
      &.ui-pagination-currentPage {
        border: 1px solid #1890ff;
        color: #1890ff;
      }
    }
  }
}
</style>
