<script setup lang="ts">
import { withDefaults, defineProps, toRefs } from 'vue'

import SvgIcon from '@/lib/common/SvgIcon.vue'

export interface TreeOptions {
  title: string
  value: string
  show?: boolean
  children?: TreeOptions[]
}

const props = withDefaults(defineProps<{ options: TreeOptions[] }>(), {
  options: () => []
})
const { options } = toRefs(props)

const onSelect = (item: TreeOptions) => {
  item.show = !item.show
}
</script>

<template>
  <div class="ui-tree-wrap">
    <section class="ui-tree-section" v-for="item in options" :key="item.value">
      <div class="tree-section" @click="onSelect(item)">
        <span class="ui-tree-icon">
          <SvgIcon
            v-if="item.children"
            name="sanjiao"
            width="10px"
            height="10px"
            fill="rgba(0,0,0,0.85)"
            :class="{ 'icon-rotate': !item.show }"
          />
        </span>
        <span class="ui-tree-title">{{ item.title }}</span>
      </div>
      <Transition name="tree">
        <div
          class="ui-tree-repeat"
          :class="{ open: item.show }"
          v-show="item.show"
          :style="{ paddingLeft: '21px' }"
        >
          <Tree :options="item.children" />
        </div>
      </Transition>
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
        .icon-rotate {
          transform: rotate(-90deg);
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

//.tree-enter-active,
//.tree-leave-active {
//  transition: height 2s linear;
//}
//
//.tree-enter-from,
//.tree-leave-to {
//  opacity: 0;
//}
</style>
