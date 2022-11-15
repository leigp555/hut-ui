<script setup lang="ts">
import { withDefaults, defineProps, toRefs, computed } from 'vue'

import SvgIcon from '@/lib/common/SvgIcon.vue'

export interface TreeOptions {
  title: string
  value: string
  show?: boolean
  children?: TreeOptions[]
  parent?: string
}

const emits = defineEmits(['select'])
const props = withDefaults(defineProps<{ options: TreeOptions[] }>(), {
  options: () => []
})
const { options } = toRefs(props)

const onSelect = (item: TreeOptions) => {
  item.show = !item.show
  emits('select', item.parent)
}

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
</script>

<template>
  <div class="ui-tree-wrap">
    <section class="ui-tree-section" v-for="item in newOptions" :key="item.value">
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
        <span class="ui-tree-title">{{ item.title }}</span>
      </div>

      <div
        class="ui-tree-repeat"
        :class="{ open: item.show }"
        v-show="item.show"
        :style="{ paddingLeft: '21px' }"
      >
        <Tree :options="item.children" />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;

.ui-tree-wrap {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 14px;
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
