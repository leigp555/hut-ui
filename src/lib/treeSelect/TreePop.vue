<script setup lang="ts">
import { withDefaults, defineProps, ref, inject } from 'vue'
import { TreeSelectOptions } from './type'
import SvgIcon from '../common/SvgIcon.vue'

withDefaults(defineProps<{ options: TreeSelectOptions[] }>(), {})

const clickLabelChild = ref<string>('')
const clickLabelSelf = ref<string>('')
const toggle = (item: TreeSelectOptions) => {
  if (item.children) {
    if (clickLabelChild.value !== item.children[0].value) {
      clickLabelChild.value = item.children[0].value
      clickLabelSelf.value = item.value
    } else {
      clickLabelChild.value = ''
      clickLabelSelf.value = ''
    }
  }
}

// provide('ui_treeSelect_value', value)
// eslint-disable-next-line no-unused-vars
const change = inject<(item: string) => void>('change_treeSelect_value')
const onSelect = (e: Event) => {
  const el = e.target as HTMLSpanElement
  if (change) change(el.innerText)
}
</script>

<template>
  <div class="ui-treePop-wrap">
    <section class="ui-treePop-section" v-for="item in options" :key="item.value">
      <div class="treePop-section">
        <span
          class="ui-treePop-icon"
          @click="toggle(item)"
          :class="{ isOpen: clickLabelSelf === item.value }"
        >
          <SvgIcon
            v-if="item.children"
            name="sanjiao"
            width="0.6em"
            height="0.6em"
            fill="rgba(0,0,0,0.85)"
          />
        </span>
        <span class="ui-treePop-title" @click="onSelect">{{ item.title }}</span>
      </div>
      <div
        class="ui-treePop-repeat"
        v-if="item.children"
        :class="{ 'treePop-repeat-open': clickLabelChild === item.children[0].value }"
      >
        <TreePop :options="item.children" />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;
.ui-treePop-wrap {
  > .ui-treePop-section {
    > .treePop-section {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      > .ui-treePop-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        width: 24px;
        height: 24px;
        cursor: pointer;
        transform: rotate(-90deg);
        transition: all 250ms;
        &.isOpen {
          transform: rotate(0);
        }
      }
      > .ui-treePop-title {
        padding: 0 4px;
        font-size: 14px;
        color: $font_color;
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
      }
    }
    > .ui-treePop-repeat {
      margin-left: 24px;
      margin-bottom: 4px;
      display: none;
      transition: all 250ms;
      &.treePop-repeat-open {
        display: block;
      }
    }
  }
}
</style>
