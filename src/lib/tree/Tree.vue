<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

import SvgIcon from '@/lib/common/SvgIcon.vue'

export interface TreeOptions {
  title: string
  value: string
  children?: TreeOptions[]
}

withDefaults(defineProps<{ options: TreeOptions[] }>(), {
  options: () => []
})
</script>

<template>
  <div class="ui-tree-wrap">
    <section class="ui-tree-section" v-for="item in options" :key="item.value">
      <div class="tree-section">
        <span class="ui-tree-icon">
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
        v-show="item.children"
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
      }
    }
    > .ui-tree-repeat {
      margin-bottom: 2px;
    }
  }
}

//.xx-enter-active,
//.xx-leave-active {
//  transition: all 250ms linear;
//}
//
//.xx-enter-from,
//.xx-leave-to {
//  height: 0;
//}
</style>
