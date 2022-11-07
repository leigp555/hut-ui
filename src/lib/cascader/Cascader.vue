<script setup lang="ts">
import { withDefaults, defineProps, ref, provide } from 'vue'
import CascaderPop from '@/lib/cascader/CascaderPop.vue'

export interface CascaderOptions {
  value: string
  label: string
  children?: CascaderOptions[] | null
}

withDefaults(
  defineProps<{
    value: string[]
    options: CascaderOptions[]
    placeholder: string
  }>(),
  {
    value: () => [],
    options: () => [],
    placeholder: 'Please select'
  }
)

const popVisibility = ref<boolean>(false)
provide('popVisibility', popVisibility)

const inputFocus = () => {
  popVisibility.value = true
}
const onBlur = () => {
  popVisibility.value = false
}
</script>

<template>
  <div class="ui-cascader-wrap" tabindex="-1" @blur="onBlur">
    <input class="ui-cascader-input" type="text" @focus="inputFocus" />
    <div class="cascader-pop-content" v-if="popVisibility">
      <CascaderPop :options="options" />
    </div>
  </div>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;
.ui-cascader-wrap {
  display: inline-flex;
  position: relative;
  .ui-cascader-input {
    flex-grow: 10;
    padding: 0 11px;
    outline: none;
    box-shadow: none;
    border: 1px solid darken($selected_color, 20%);
    font-size: 14px;
    color: $font_color;
    line-height: 1.5em;
    height: 30px;
    border-radius: 2px;

    &:focus {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      border: 1px solid $main_color;
    }
  }
  .cascader-pop-content {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 4px));
    transition: all 250ms;
  }
}
</style>
