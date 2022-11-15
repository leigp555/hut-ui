<script setup lang="ts">
import { withDefaults, defineProps, toRefs, inject, Ref } from 'vue'

import SvgIcon from '../common/SvgIcon.vue'
import Checkbox from '../checkbox/Checkbox.vue'

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
const checkable = inject<Ref<boolean>>('ui-tree-select-checkable')
const originSource = inject<Ref<TreeOptions[]>>('ui-tree-origin-source')

const onSelect = (item: TreeOptions) => {
  item.show = !item.show
  if (!checkable?.value) {
    position(item.parent)
    selectArrFn(item.parent)
  }
}
const isSelect = (value: string): boolean => {
  return selectArr?.value.indexOf(value) >= 0
}

// 复选框模式下的逻辑
const checked = (check: boolean, item: TreeOptions) => {
  item.checked = check
  const newArr: string[] = [...selectArr!.value]
  if (check) {
    // 将所有的儿子选中
    newArr.push(item.value)
    const loop = (xx: TreeOptions) => {
      if (!xx.children) return
      xx.children.forEach((x) => {
        newArr.push(x.value)
        x.checked = true
        loop(x)
      })
    }
    loop(item)
    const str = newArr.join('/')
    selectArrFn(str)
    // 找到他的父亲判断父亲的儿子是否都选中了，如果都选中了自己页应当checked
    const yy = item.parent?.split('/')
    const fatherNode = yy[yy.length - 2] || yy[yy.length - 1]
    const loopAll = (xx: TreeOptions[]) => {
      for (let j = 0; j < xx.length; j++) {
        if (!xx[j].children) return
        if (xx[j].value === fatherNode) {
          let mid = false
          for (let i = 0; i < xx[j].children.length; i++) {
            if (xx[j].children[i].checked && xx[j].children[i].checked !== false) {
              mid = true
            } else {
              mid = false
            }
          }
          xx[j].checked = mid
          return
        }
        loopAll(xx[j].children)
      }
    }
    loopAll(originSource?.value)
  } else {
    // 将所有的儿子删除
    newArr.splice(newArr.indexOf(item.value), 1)
    const loop = (xx: TreeOptions) => {
      if (!xx.children) return
      xx.children.forEach((x) => {
        const index = newArr.indexOf(x.value)
        newArr.splice(index, 1)
        x.checked = false
        loop(x)
      })
    }
    loop(item)
    const str = newArr.join('/')
    selectArrFn(str)
  }
}
</script>

<template>
  <div class="ui-tree-wrap">
    <section class="ui-tree-section" v-for="item in options" :key="item.value">
      <div class="tree-section">
        <span
          class="ui-tree-icon"
          :class="{ 'icon-rotate': item.show }"
          @click="onSelect(item)"
        >
          <SvgIcon
            v-if="item.children"
            name="sanjiao"
            width="10px"
            height="10px"
            fill="rgba(0,0,0,0.85)"
          />
        </span>
        <Checkbox
          v-if="checkable"
          @update:checked="checked($event, item)"
          :checked="item.checked"
          >{{ item.title }}</Checkbox
        >
        <a
          class="ui-tree-title"
          v-else-if="item.href"
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
        v-show="item.show && item.children"
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
