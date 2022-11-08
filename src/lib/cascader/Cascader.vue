<script setup lang="ts">
import { computed, defineProps, provide, ref, toRefs, withDefaults } from 'vue'
import CascaderPop from '@/lib/cascader/CascaderPop.vue'

export interface CascaderOptions {
  value: string
  label: string
  children?: CascaderOptions[] | null
  parent?: string
}

const emit = defineEmits(['update:value'])
const props = withDefaults(
  defineProps<{
    value: string
    options: CascaderOptions[]
    placeholder: string
  }>(),
  {
    value: '',
    options: () => [],
    placeholder: 'Please select'
  }
)

const popVisibility = ref<boolean>(false)
const changeValue = (newValue: string) => {
  emit('update:value', newValue)
}

const { value, options } = toRefs(props)
provide('popVisibility', popVisibility)
provide('changeValue', changeValue)
provide('initValue', value)

const inputFocus = () => {
  popVisibility.value = true
}
const onBlur = () => {
  popVisibility.value = false
}

// 改造options像option数据结构中添加parent属性
const addParentAttr = (list: CascaderOptions[]) => {
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
  <div class="ui-cascader-wrap" tabindex="-1" @blur="onBlur">
    <div :title="value">
      <input
        class="ui-cascader-input"
        type="text"
        @focus="inputFocus"
        :value="value"
        readonly
      />
    </div>

    <div class="cascader-pop-content" :class="{ shouldShow: popVisibility }">
      <CascaderPop :options="newOptions" />
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    opacity: 0;
    visibility: hidden;
    &.shouldShow {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
