<script setup lang="ts">
import { withDefaults, defineProps, ref, useSlots } from 'vue'

withDefaults(defineProps<{ keyValue: string }>(), {})
const shouldShow = ref<boolean>(false)
const isActionStart = ref<boolean>(false)
const underSelected = ref<boolean>(false)

const timeId = ref<number | null>(null)
const timeId2 = ref<number | null>(null)

const slots = useSlots().default()

// title的hover事件
const onMouseEnter = () => {
  // 先清除定时器这一步很重要不然可能会出现打开弹出层后又自动关闭
  timeId2.value && window.clearTimeout(timeId2.value)
  timeId.value && window.clearTimeout(timeId.value)
  timeId.value = null
  timeId2.value = null
  timeId.value = null
  shouldShow.value = true
  isActionStart.value = true
}
// title的离开事件
const onMouseLeave = () => {
  timeId.value = setTimeout(() => {
    if (!underSelected.value) {
      isActionStart.value = false
      timeId2.value = setTimeout(() => {
        shouldShow.value = false
        timeId2.value && window.clearTimeout(timeId2.value)
      }, 250)
    }
    timeId.value && window.clearTimeout(timeId.value)
  }, 250)
}

// content-inner的hover事件
const innerOnMouseEnter = () => {
  // 先清除定时器这一步很重要不然可能会出现打开弹出层后又自动关闭
  timeId2.value && window.clearTimeout(timeId2.value)
  timeId.value && window.clearTimeout(timeId.value)
  timeId.value = null
  timeId2.value = null
  underSelected.value = true
  shouldShow.value = true
  isActionStart.value = true
}
// content-inner的离开事件
const innerOnMouseLeave = () => {
  underSelected.value = false
  isActionStart.value = false
  const id = setTimeout(() => {
    shouldShow.value = false
    window.clearTimeout(id)
  }, 250)
}
</script>

<template>
  <div class="ui-subMenu-wrap" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <span v-if="$slots.icon" class="ui-subMenu-icon">
      <slot name="icon" />
    </span>
    <span
      v-if="$slots.title"
      class="ui-subMenu-title"
      :class="{ 'subMenu-no-icon': !$slots.icon }"
    >
      <slot name="title" />
    </span>
    <div class="ui-subMenu-content" v-show="shouldShow">
      <Transition name="subMenu">
        <div
          class="ui-subMenu-content-inner"
          v-show="isActionStart"
          @mouseenter="innerOnMouseEnter"
          @mouseleave="innerOnMouseLeave"
        >
          <div v-for="item in slots" :key="item">
            <Component :is="item" :subKeyValue="keyValue" />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
.ui-subMenu-wrap {
  display: flex;
  align-items: center;
  line-height: 46px;
  text-align: left;
  background: #fff;
  position: relative;
  > .ui-subMenu-icon {
    min-width: 14px;
    font-size: 14px;
  }
  > .ui-subMenu-title {
    margin-left: 10px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    &.subMenu-no-icon {
      margin-left: 0;
    }
  }
  > .ui-subMenu-content {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    color: #000000d9;
    background-color: #fff;
    min-width: 160px;
    width: 100%;
    max-height: calc(100vh - 100px);
    padding-top: 7px;
    transform: translateY(100%);
    transform-origin: top;
    > .ui-subMenu-content-inner {
      border-radius: 2px;
      overflow-x: hidden;
      overflow-y: auto;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
        0 9px 28px 8px #0000000d;
      transform-origin: top;
    }
  }
}
.subMenu-enter-from,
.subMenu-leave-to {
  opacity: 0;
  transform: scale(1, 0.6);
}
.subMenu-enter-active,
.subMenu-leave-active {
  transition: all 250ms;
}
</style>
