<script setup lang="ts">
import { withDefaults, defineProps, toRefs, inject, Ref } from 'vue'

import SvgIcon from '@/lib/common/SvgIcon.vue'

export interface TreeOptions {
  title: string
  value: string
  show?: boolean
  children?: TreeOptions[]
  parent?: string
}

const props = withDefaults(defineProps<{ options: TreeOptions[] }>(), {
  options: () => []
})
const { options } = toRefs(props)

// eslint-disable-next-line no-unused-vars
const position = inject<(pos: string) => void>('ui-tree-position')
const selectArr = inject<Ref<string[]>>('ui-tree-select-arr')
// eslint-disable-next-line no-unused-vars
const selectArrFn = inject<(posStr: string) => void>('ui-tree-select-arrFn')

const onSelect = (item: TreeOptions) => {
  item.show = !item.show
  position(item.parent)
  selectArrFn(item.parent)
}
const isSelect = (value: string): boolean => {
  return selectArr?.value.indexOf(value) >= 0
}
</script>

<template>
  <div class="ui-tree-wrap">
    <section class="ui-tree-section" v-for="item in options" :key="item.value">
      <div class="tree-section" @click="onSelect(item)">
        <span class="ui-tree-icon" :class="{ 'icon-rotate': item.show }">
          <SvgIcon
            v-if="item.children"
            name="sanjiao"
            width="10px"
            height="10px"
            fill="rgba(0,0,0,0.85)"
          />
        </span>
        <a
          class="ui-tree-title"
          v-if="item.href"
          :href="item.href"
          :style="{ color: item.color }"
          :class="{ 'ui-value-selected': isSelect(item.value) }"
          >{{ item.title }}</a
        >
        <span
          class="ui-tree-title"
          v-else
          :style="{ color: item.color }"
          :class="{ 'ui-value-selected': isSelect(item.value) }"
          >{{ item.title }}</span
        >
      </div>

      <div
        class="ui-tree-repeat"
        :class="{ open: item.show }"
        v-show="item.show"
        :style="{ paddingLeft: '21px' }"
      >
        <TreeNode :options="item.children" />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
$font_color: #000000d9;
$main_color: #1890ff;
$selected_color: #f5f5f5;

.ui-tree-wrap {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 14px;
  color: $font-color;
  line-height: 1.5em;
  > .ui-tree-section {
    > .tree-section {
      cursor: pointer;
      user-select: none;
      display: inline-flex;
      align-items: center;
      margin-bottom: 2px;
      > .ui-tree-title {
        padding: 0 4px;
        text-decoration: none;
        &:hover {
          background-color: $selected_color;
        }
        &.ui-value-selected {
          background-color: #bae7ff;
        }
      }
      > .ui-tree-icon {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(-90deg);
        transition: all 100ms;
        &.icon-rotate {
          transform: rotate(0deg);
        }
      }
    }
    > .ui-tree-repeat {
      margin-bottom: 2px;
      transition: all 50ms;
      opacity: 0;
      &.open {
        opacity: 1;
      }
    }
  }
}
</style>
