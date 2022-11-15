<script setup lang="ts">
import { withDefaults, defineProps, toRefs, computed, provide, Ref } from 'vue'
import TreeNode from './TreeNode.vue'

export interface TreeOptions {
  title: string
  value: string
  show?: boolean
  color?: string
  href?: boolean
  children?: TreeOptions[]
  parent?: string
  checked?: boolean
}

const emits = defineEmits(['select', 'update:selectedValues'])

const props = withDefaults(
  defineProps<{
    options: TreeOptions[]
    selectedValues?: string[]
    checkable: boolean
  }>(),
  {
    options: () => [],
    selectedValues: () => [],
    checkable: false
  }
)
const { options, selectedValues, checkable } = toRefs(props)
// 改造options像option数据结构中添加parent属性
const addParentAttr = (list: TreeOptions[]) => {
  for (let i = 0; i < list.length; i++) {
    list[i].checked = false
    if (!list[i].parent) {
      list[i].parent = list[i].value
    }
    if (list[i].children) {
      for (let j = 0; j < list[i].children!.length; j++) {
        if (list[i].parent) {
          list[i].children![j].parent = `${list[i].parent}/${
            list[i].children![j].value
          }`
        } else {
          list[i].children![j].parent = `${list[i].value}/${list[i].children![j].value}`
        }
      }
      addParentAttr(list[i].children!)
    }
  }

  return list
}

const newOptions = computed(() => {
  return addParentAttr(options.value)
})

const getPosition = (position: string) => {
  emits('select', position)
}
const selectValueFn = (position: string) => {
  const selectedArr = position.split('/')
  emits('update:selectedValues', selectedArr)
}
// 提供给子组件修改层级用的函数
// eslint-disable-next-line no-unused-vars
provide<(position: string) => void>('ui-tree-position', getPosition)

// 提供给子组件判断是否被选择的字符串数组,以及修改他的函数
provide<Ref<string[]>>('ui-tree-select-arr', selectedValues)
// eslint-disable-next-line no-unused-vars
provide<(position: string) => void>('ui-tree-select-arrFn', selectValueFn)

// 提供给子组件是否要多选框
provide<Ref<boolean>>('ui-tree-select-checkable', checkable)

// 提供给子组件源数据
provide<Ref<TreeOptions[]>>('ui-tree-origin-source', newOptions)
</script>

<template>
  <div class="ui-tree-wrap">
    <TreeNode :options="newOptions" />
  </div>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;
.ui-tree-wrap {
}
</style>
