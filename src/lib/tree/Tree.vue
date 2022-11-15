<script setup lang="ts">
import { withDefaults, defineProps, toRefs, computed, provide } from 'vue'
import TreeNode from './TreeNode.vue'

export interface TreeOptions {
  title: string
  value: string
  show?: boolean
  color?: string
  href?: boolean
  children?: TreeOptions[]
  parent?: string
}

const emits = defineEmits(['select'])

const props = withDefaults(defineProps<{ options: TreeOptions[] }>(), {
  options: () => []
})
const { options } = toRefs(props)
// 改造options像option数据结构中添加parent属性
const addParentAttr = (list: TreeOptions[]) => {
  for (let i = 0; i < list.length; i++) {
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
// eslint-disable-next-line no-unused-vars
provide<(position: string) => void>('ui-tree-position', getPosition)
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
