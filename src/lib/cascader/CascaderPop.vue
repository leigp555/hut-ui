<script setup lang="ts">
import { withDefaults, defineProps, ref, inject, Ref, computed } from 'vue'
import { CascaderOptions } from './type'
import SvgIcon from '@/lib/common/SvgIcon.vue'

withDefaults(defineProps<{ options: CascaderOptions[] | null }>(), {
  options: null
})
const popVisibility = inject<Ref<boolean>>('popVisibility')

// eslint-disable-next-line no-unused-vars
const changeValue = inject<(newValue: string) => void>('changeValue')
const clickLabelChild = ref<string>('')
const initValue = inject<Ref<string>>('initValue')
const toggle = (item: CascaderOptions) => {
  // 这一步是控制显示或者隐藏的关键，获取点击的item的children中第一个对象的value来判断是否显示
  if (item.children) clickLabelChild.value = item.children[0].value
  if (!item.children && popVisibility) {
    popVisibility.value = false
  }
  if (item.parent && changeValue) {
    changeValue(item.parent)
  }
}
const selectedArr = computed(() => {
  return initValue?.value.split('/')
})
</script>

<template>
  <keep-alive>
    <div class="ui-cascader-pop" ref="popRef" v-if="options">
      <div v-for="item in options" :key="item.label" class="cascader-list-item">
        <div
          class="cascader-label"
          :class="{ selected: selectedArr.indexOf(item.value) >= 0 }"
          @click="toggle(item)"
        >
          <span class="item-label-value">{{ item.label }}</span>
          <SvgIcon
            name="back"
            width="1em"
            height="1em"
            v-if="item.children"
            class="item-label-icon"
          />
        </div>
        <div
          class="cascader-loop"
          :class="{ open: clickLabelChild === item.children[0].value }"
          v-if="item.children"
        >
          <CascaderPop :options="item.children" />
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;

.ui-cascader-pop {
  box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
  border-left: none;
  .cascader-list-item {
    font-size: 14px;
    line-height: 2em;
    position: relative;
    z-index: 100;
    background: #fff;
    .cascader-label {
      padding: 0 8px 0 10px;
      cursor: pointer;
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: space-between;
      .item-label-value {
        user-select: none;
      }
      .item-label-icon {
        transform: rotate(180deg);
      }
      &:hover {
        background-color: #e6f7ff;
      }
      &.selected {
        background-color: #e6f7ff;
        font-weight: 600;
      }
    }
    .cascader-loop {
      position: absolute;
      top: 0;
      right: -2px;
      transform: translateX(100%);
      opacity: 0;
      visibility: hidden;
      transition: opacity 250ms;
      &.open {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
