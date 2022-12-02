<script setup lang="ts">
import {
  computed,
  defineProps,
  onMounted,
  provide,
  ref,
  toRefs,
  withDefaults
} from 'vue'
import CascaderPop from './CascaderPop.vue'
import { CascaderOptions } from './type'

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
    list[i].show = false
    if (!list[i].parent) {
      list[i].parent = list[i].value
    }
    if (list[i].children) {
      for (let j = 0; j < list[i].children!.length; j++) {
        list[i].children![j].show = false
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

const cascaderWrap = ref<HTMLElement>()
const mount = ref<HTMLElement>()
mount.value = document.createElement('div')
mount.value?.classList.add('xxx')

onMounted(() => {
  cascaderWrap.value.appendChild(mount.value)
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
    <div>
      <div class="pop-list" ref="cascaderWrap"></div>
    </div>

    <div class="cascader-pop-content" v-show="popVisibility">
      <CascaderPop :options="newOptions" :toEl="mount" />
    </div>
  </div>
</template>

<style lang="scss">
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #f5f5f5;
.pop-list {
  margin-top: 2px;
  display: inline-flex;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
}
.xxx {
  display: flex;
}
.ui-cascader-wrap {
  display: inline-block;
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
    transition: all 250ms;
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
    z-index: 100;
    background: white;
  }
}
</style>
