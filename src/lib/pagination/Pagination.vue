<script setup lang="ts">
import {
  withDefaults,
  defineProps,
  defineEmits,
  computed,
  toRefs,
  onMounted,
  ref
} from 'vue'
import SvgIcon from '../common/SvgIcon.vue'

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
    pageSize?: number
    disabled?: boolean
    showQuickJumper?: boolean
    showTotal?: boolean
    showSizeChanger?: boolean
    pageSizeOptions?: string[]
  }>(),
  {
    current: 1,
    total: 0,
    pageSize: 10,
    disabled: false,
    showQuickJumper: false,
    showTotal: false,
    showSizeChanger: false,
    pageSizeOptions: () => ['10', '20', '30', '40', '50']
  }
)
const {
  current, // 当前第几页
  total, // 总共多少条数据
  pageSize, // 每页放多少条数据
  disabled, // 书否可以点击
  showSizeChanger, // 是否可以改变 pageSize
  showQuickJumper, // 是否显示页码输入框
  showTotal, // 是否展示数据总数
  pageSizeOptions // 每页放多少条数据选择框内容
} = toRefs(props)

const pageSizeList = ref<HTMLUListElement | null>(null)
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
const listShow = () => {
  pageSizeList.value!.classList.add('list-show')
}
const listHidden = () => {
  pageSizeList.value!.classList.remove('list-show')
}
const selectPageSize = (e: Event) => {
  const el = e.target as HTMLElement
  const newPageSize = el.getAttribute('data-pageSize')
  if (el.tagName.toLowerCase() === 'li' && newPageSize) {
    emits('pageSizeChange', parseInt(newPageSize, 10))
    pageSizeList.value!.classList.remove('list-show')
  }
}

const jump = (e: Event) => {
  const el = e.target as HTMLInputElement
  const value = el.value.trim()
  let jumpPage: number
  try {
    jumpPage = parseInt(value, 10)
    if (jumpPage) {
      if (jumpPage > totalPage.value) {
        emits('change', totalPage.value)
        el.value = ''
      } else if (jumpPage < 1) {
        emits('change', 1)
        el.value = ''
      } else {
        emits('change', jumpPage)
        el.value = ''
      }
    } else {
      el.value = ''
    }
  } catch (err: unknown) {
    el.value = ''
  }
}
</script>

<template>
  <div class="ui-pagination-wrap" :class="{ disabled }">
    <ol class="ui-pagination-ol" @click="selectPage" :class="{ disabled }">
      <li
        @click="pageSub"
        class="ui-pagination-subIcon ui-pagination-item"
        :class="{ subDisabled: current <= 1 }"
      >
        <SvgIcon name="back" width="1em" height="1em" />
      </li>
      <li
        v-for="item in totalPage <= 5 ? totalPage : 5"
        :key="item"
        class="ui-pagination-item"
        :class="{
          'ui-pagination-currentPage': startPage + item === current
        }"
        data-spec="pageNumber"
      >
        {{ startPage + item }}
      </li>
      <li
        @click="pageAdd"
        class="ui-pagination-addIcon ui-pagination-item"
        :class="{ addDisabled: current >= totalPage }"
      >
        <SvgIcon name="back" width="1em" height="1em" />
      </li>
    </ol>
    <!--    pageSizeList部分-->
    <div class="ui-pageSizeList-wrap" :class="{ disabled }">
      <div
        class="ui-pagination-pageSize ui-pagination-item"
        v-if="showSizeChanger"
        @click="listShow"
        @blur="listHidden"
        tabindex="-1"
      >
        <slot name="buildOptionText" :value="pageSize" />
        <span class="ui-pageSizeIcon">
          <SvgIcon name="back" width="1em" height="1em" />
        </span>
      </div>
      <ol class="pageSize-list" ref="pageSizeList" @mousedown="selectPageSize">
        <li
          v-for="item in pageSizeOptions"
          :key="item"
          :class="{ selected: item === pageSize.toString() }"
          :data-pageSize="item"
        >
          {{ item }}条/页
        </li>
      </ol>
    </div>
    <!--    showQuickJumper部分-->
    <div class="ui-quickJumper-wrap" v-if="showQuickJumper" :class="{ disabled }">
      <span>跳至</span>
      <input type="text" @change="jump" />
      <span>页</span>
    </div>
    <!--    showTotal部分-->
    <div class="ui-pageTotal-wrap" v-if="showTotal" :class="{ disabled }">
      <span>共</span>
      <span>{{ current }}/{{ totalPage }}</span>
      <span>页</span>
    </div>
  </div>
</template>

<style lang="scss">
.ui-pagination-wrap {
  display: inline-flex;
  align-items: center;
  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  > .disabled {
    pointer-events: none;
  }
  .ui-pagination-ol {
    list-style: none;
    display: flex;
    > li {
      &.ui-pagination-currentPage {
        border: 1px solid #1890ff;
        color: #1890ff;
      }
      &.ui-pagination-addIcon {
        transform: rotate(180deg);
        &.addDisabled {
          cursor: not-allowed;
        }
      }
      &.ui-pagination-subIcon {
        &.subDisabled {
          cursor: not-allowed;
        }
      }
    }
  }
  .ui-pageSizeList-wrap {
    position: relative;
    > .ui-pagination-pageSize {
      padding: 1px 8px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
      > .ui-pageSizeIcon {
        transform: rotate(-90deg);
      }
    }
    > .pageSize-list {
      list-style: none;
      position: absolute;
      padding: 5px 0;
      font-size: 14px;
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 2px));
      background-color: #fff;
      z-index: 10;
      box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
      opacity: 0;
      visibility: hidden;
      white-space: nowrap;
      &.list-show {
        opacity: 1;
        visibility: visible;
      }
      transition: opacity 250ms;
      > li {
        padding: 4px 10px;
        min-width: 90px;
        white-space: nowrap;
        color: rgba(0, 0, 0, 0.85);
        cursor: pointer;
        &:not(:last-child) {
          margin-bottom: 5px;
        }
        &.selected {
          color: #1890ff;
          background-color: #e6f7ff;
        }
        &:hover {
          color: #1890ff;
          background-color: #e6f7ff;
        }
      }
    }
  }
  .ui-quickJumper-wrap {
    display: inline-flex;
    align-items: center;
    margin-right: 8px;
    > span {
      white-space: nowrap;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
    }
    > input {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
      width: 3.5em;
      height: 32px;
      padding: 2px 5px;
      border-radius: 2px;
      margin-left: 8px;
      margin-right: 8px;
      text-align: center;
      border: 1px solid #d9d9d9;
      &:focus {
        border: 1px solid #1890ff;
        outline: none;
        box-shadow: 0 0 0 2px rgba(24, 114, 255, 0.2);
      }
    }
  }
  .ui-pageTotal-wrap {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    span {
      white-space: nowrap;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}

//公共样式
.ui-pagination-item {
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
}
</style>
