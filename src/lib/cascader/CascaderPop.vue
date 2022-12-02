<script setup lang="ts">
import { withDefaults, defineProps, ref, inject, Ref, computed } from 'vue'
import { CascaderOptions } from './type'
import SvgIcon from '@/lib/common/SvgIcon.vue'

withDefaults(defineProps<{ options: CascaderOptions[] | null; toEl: HTMLElement }>(), {
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
  <Teleport :to="toEl">
    <div class="ui-cascader-pop ui-scroll-container" ref="popRef" v-if="options">
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
        <Teleport :to="toEl">
          <div
            class="cascader-loop"
            :class="{ open: clickLabelChild === item.children[0].value }"
            v-if="item.children && clickLabelChild === item.children[0].value"
          >
            <CascaderPop :options="item.children" :to-el="toEl" />
          </div>
        </Teleport>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss">
@import '../common/scrollBar';
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;

.ui-cascader-pop {
  min-width: 111px;
  height: 180px;
  overflow-y: auto;
  &:not(:last-child) {
    border-right: 1px solid #f0f0f0;
  }

  .cascader-list-item {
    font-size: 14px;
    line-height: 2em;
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
  }
}
</style>

<style lang="scss">
.cascader-loop {
  transition: opacity 250ms;
  display: none;
  border: 5px solid red !important;
  &.open {
    opacity: 1;
    visibility: visible;
  }
}
</style>
