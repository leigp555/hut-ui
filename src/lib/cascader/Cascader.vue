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
import { Icon_errorRadius } from '@hut-ui/icons-vue'
import CascaderPop from './CascaderPop.vue'
import { Input } from '../index'
import { CascaderOptions } from './type'

const emit = defineEmits(['update:value', 'change'])
const props = withDefaults(
  defineProps<{
    value: string
    options: CascaderOptions[]
    placeholder: string
  }>(),
  {
    value: '',
    options: () => [],
    placeholder: ''
  }
)

const popVisibility = ref<boolean>(false)
const popEnter = ref<boolean>(false)

const changeValue = (newValue: string) => {
  emit('update:value', newValue)
  emit('change', newValue)
}

const { value, options } = toRefs(props)

// input元素事件
const inputFocus = () => {
  popVisibility.value = true
}

const onBlur = () => {
  const id = setTimeout(() => {
    if (!popEnter.value) {
      popVisibility.value = false
      window.clearTimeout(id)
    }
  }, 100)
}
// pop弹出框元素事件
const popFocus = () => {
  popEnter.value = true
  popVisibility.value = true
}
const popBlur = () => {
  popEnter.value = false
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
mount.value?.classList.add('ui-cascader-pop-item')

onMounted(() => {
  cascaderWrap.value?.appendChild(mount.value!)
})
provide('popVisibility', popVisibility)
provide('changeValue', changeValue)
provide('initValue', value)

const clear = () => {
  emit('update:value', '')
  emit('change', '')
}
</script>

<template>
  <div class="ui-cascader-wrap">
    <div :title="value">
      <Input
        class="ui-cascader-input"
        type="text"
        :placeholder="placeholder"
        @focus="inputFocus"
        @blur="onBlur"
        :value="value"
        :autofocus="false"
        readonly
      >
        <template #suffix>
          <Icon_errorRadius
            name="error_radius"
            size="1em"
            color="#d9d9d9"
            @click.stop.prevent="clear"
          />
        </template>
      </Input>
    </div>
    <!--    //挂载点-->
    <div class="ui-cascader-pop-wrap" @focus="popFocus" @blur="popBlur" tabindex="-1">
      <Transition name="cascader">
        <div
          class="ui-cascader-pop-list"
          ref="cascaderWrap"
          v-show="popVisibility"
        ></div>
      </Transition>
    </div>

    <div class="cascader-pop-content">
      <CascaderPop :options="newOptions" :toEl="mount" />
    </div>
  </div>
</template>

<style lang="scss">
$font_color: #000000d9;
$main_color: #1890ff;
$border_color: #d9d9d9;

.ui-cascader-wrap {
  display: inline-block;
  position: relative;
  .ui-cascader-input {
    flex-grow: 10;
    //padding: 0 11px;
    //outline: none;
    //box-shadow: none;
    //border: 1px solid $border_color;
    //font-size: 14px;
    //color: $font_color;
    //line-height: 1.5em;
    //height: 32px;
    //border-radius: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 250ms;
    &:focus {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      border: 1px solid $main_color;
    }
  }
  > .ui-cascader-pop-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 4px));
    z-index: 100;
    margin-top: 2px;
    > .ui-cascader-pop-list {
      display: inline-flex;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
        0 9px 28px 8px #0000000d;
      background: white;
      transform-origin: top;
      > .ui-cascader-pop-item {
        display: flex;
      }
    }
  }
}

.cascader-enter-from,
.cascader-leave-to {
  transform: scale(1, 0.5);
  opacity: 0;
}
.cascader-enter-active,
.cascader-leave-active {
  transition: all 250ms;
}
</style>
