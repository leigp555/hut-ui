<script setup lang="ts">
import { withDefaults, defineProps, ref, toRefs } from 'vue'

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
const { options: xxx } = toRefs(props)

const selectItem = ref<TreeOptions>({ value: 'xx', title: 'xx', show: false })

const onSelect = (item: TreeOptions) => {
  item.show = !item.show
  console.log(xxx.value)
  selectItem.value = { ...item }
}
</script>

<template>
  <div class="ui-tree-wrap">
    <section class="ui-tree-section" v-for="item in xxx" :key="item.value">
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
      <div class="ui-tree-repeat" v-show="item.show" :style="{ paddingLeft: '21px' }">
        <Tree :options="item.children" v-if="item.children" />
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
        .icon-rotate {
          transform: rotate(-90deg);
        }
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
