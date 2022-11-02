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

const emits = defineEmits([
  'update:current',
  'update:pageSize',
  'pageSizeChange',
  'change'
])
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
  current, // 当前第几页
  total, // 总共多少条数据
  pageSize, // 每页放多少条数据
  disabled // 书否可以点击
} = toRefs(props)

const totalPage = computed(() => {
  return Math.ceil(total.value / pageSize.value)
})

const startPage = computed(() => {
  if (totalPage.value <= 5) {
    return 0
  }
  if (current.value >= 3 && current.value + 2 <= totalPage.value) {
    return current.value - 3
  }
  if (current.value >= 3 && current.value + 1 === totalPage.value) {
    return current.value - 4
  }
  if (current.value >= 3 && current.value === totalPage.value) {
    return current.value - 5
  }
  return 0
})
onMounted(() => {
  // 检查初始页码是否合理 >1   <totalPage
  if (current.value <= 1) {
    emits('change', 1)
  } else if (current.value >= totalPage.value) {
    emits('change', totalPage.value)
  }
})

const pageSub = () => {
  if (current.value > 1) {
    emits('change', current.value - 1)
  }
}
const pageAdd = () => {
  if (current.value < totalPage.value) {
    emits('change', current.value + 1)
  }
}
const selectPage = (e: Event) => {
  const el = e.target as HTMLElement
  const spec = el.getAttribute('data-spec')
  if (el.tagName.toLowerCase() === 'li' && spec === 'pageNumber') {
    emits('change', parseInt(el.innerText, 10))
  }
}
</script>

<template>
  <div class="ui-pagination-wrap" :class="{ disabled }">
    <ol class="ui-pagination-ol" @click="selectPage" :class="{ disabled }">
      <li @click="pageSub">
        <SvgIcon name="back" width="1em" height="1em" />
      </li>
      <li
        v-for="item in totalPage <= 5 ? totalPage : 5"
        :key="item"
        :class="{
          'ui-pagination-currentPage': startPage + item === current ? true : false
        }"
        data-spec="pageNumber"
      >
        {{ startPage + item }}
      </li>
      <li :style="{ transform: 'rotate(180deg)' }" @click="pageAdd">
        <SvgIcon name="back" width="1em" height="1em" />
      </li>
    </ol>
  </div>
</template>

<style lang="scss">
.ui-pagination-wrap {
  display: inline-block;
  &.disabled {
    cursor: not-allowed;
  }
  .ui-pagination-ol {
    &.disabled {
      pointer-events: none;
    }
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
