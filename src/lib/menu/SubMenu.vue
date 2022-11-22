<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'

withDefaults(defineProps<{ keyValue: string }>(), {})
const shouldShow = ref<boolean>(false)
const isActionStart = ref<boolean>(false)

const onMouseEnter = () => {
  shouldShow.value = true
  isActionStart.value = true
}
const onMouseLeave = () => {
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
        <div class="ui-subMenu-content-inner" v-show="isActionStart">
          <slot />
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
    &.subMenu-no-icon {
      margin-left: 0;
    }
  }
  > .ui-subMenu-content {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #000000d9;

    background-color: #fff;
    border-radius: 2px;
    min-width: 160px;
    width: 100%;
    max-height: calc(100vh - 100px);
    padding: 0;
    border-right: 0;

    transform: translateY(calc(100% + 7px));
    transform-origin: top;
    > .ui-subMenu-content-inner {
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
