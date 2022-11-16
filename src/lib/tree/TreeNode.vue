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
  checked?: boolean
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

const onOpen = (item: TreeOptions) => {
  item.show = !item.show
}
const onSelect = (item: TreeOptions) => {
  if (!checkable?.value && position && selectArrFn) {
    position(item.parent!)
    selectArrFn(item.parent!)
  }
}
const isSelect = (value: string): boolean => {
  if (selectArr) {
    return selectArr?.value.indexOf(value) >= 0
  }
  return false
}

// 复选框模式下的逻辑
const checked = (check: boolean, item: TreeOptions) => {
  item.checked = check
  let newSelectArr: string[]
  try {
    newSelectArr = [...selectArr!.value]
  } catch (err: unknown) {
    newSelectArr = []
  }
  if (check) {
    // 将所有的儿子选中
    newSelectArr.push(item.value)
    const loop = (children: TreeOptions) => {
      if (!children.children) return
      children.children.forEach((child) => {
        newSelectArr.push(child.value)
        child.checked = true
        loop(child)
      })
    }
    loop(item)
  } else {
    // 将所有的儿子删除
    newSelectArr.splice(newSelectArr.indexOf(item.value), 1)
    const loop = (children: TreeOptions) => {
      if (!children.children) return
      children.children.forEach((child) => {
        const index = newSelectArr.indexOf(child.value)
        newSelectArr.splice(index, 1)
        child.checked = false
        loop(child)
      })
    }
    loop(item)
  }
  // 找到他的父亲判断父亲的儿子是否都选中了，如果都选中了自己页应当checked
  // 思路:获取需要检测的所有父节点fatherNodes=>反转得到的父节点数组=>遍历父节点数组，找到value===父节点的哪一项，
  // 判断子节点是否都被checked,如果是那么这个父节点也应该被checked
  // 反转父节点的checked应该置为false
  const parentArr = item.parent!.split('/')
  // 这里把数组反转reverse()很关键,应该先检测后面的父节点是否被checked这样前面的父节点才能根据后面的父节点checked而checked
  // 如果先检查前面的父节点checked那么后面的父节点checked变化时前面的父节点checked就没法改变了，因为已经检查过了
  const fatherNodes = parentArr.slice(0, parentArr.length - 1).reverse() || [item.value]
  const loopAll = (children: TreeOptions[] | undefined) => {
    if (!children) return
    for (let t = 0; t < fatherNodes.length; t++) {
      const fatherNode = fatherNodes[t]
      for (let j = 0; j < children.length; j++) {
        if (children[j].children && children[j].value === fatherNode) {
          let mid = true
          for (let i = 0; i < children[j].children!.length; i++) {
            if (children[j].children![i].checked === false) {
              mid = false
            }
          }
          children[j].checked = mid
          if (mid) {
            const index = newSelectArr.indexOf(children[j].value)
            if (index < 0) newSelectArr.push(children[j].value)
          } else {
            const index = newSelectArr.indexOf(children[j].value)
            if (index >= 0) newSelectArr.splice(index, 1)
          }
        }
        loopAll(children[j].children)
      }
    }
  }
  if (originSource) loopAll(originSource.value)

  const str = newSelectArr.join('/')
  if (selectArrFn) selectArrFn(str)
}
</script>

<template>
  <div class="ui-tree-wrap">
    <section class="ui-tree-section" v-for="item in options" :key="item.value">
      <div class="tree-section">
        <span
          class="ui-tree-icon"
          :class="{ 'icon-rotate': item.show }"
          @click="onOpen(item)"
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
          :style="{ color: item.color }"
          >{{ item.title }}</Checkbox
        >
        <a
          class="ui-tree-title"
          v-else-if="item.href"
          :href="item.href"
          :style="{ color: item.color }"
          :class="{ 'ui-value-selected': isSelect(item.value) }"
          @click="onSelect(item)"
          >{{ item.title }}</a
        >
        <span
          class="ui-tree-title"
          v-else
          :style="{ color: item.color }"
          :class="{ 'ui-value-selected': isSelect(item.value) }"
          @click="onSelect(item)"
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
