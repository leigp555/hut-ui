<template>
  <div class="ui-dropdown-wrap" @mouseenter="enter" @mouseleave="leave">
    <div tabindex="-1" class="ui-dropdown-tip" @click="toggle" @blur="hide">
      <slot />
    </div>

    <div class="ui-dropdown-pop" :class="{ opening: isOpen }">
      <slot name="pop" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'

const props = withDefaults(defineProps<{ trigger: 'click' | 'hover' }>(), {
  trigger: 'hover'
})
const isOpen = ref<boolean>(false)
const toggle = () => {
  if (props.trigger === 'click') isOpen.value = !isOpen.value
}
const hide = () => {
  if (props.trigger === 'click') isOpen.value = false
}
const enter = () => {
  if (props.trigger === 'hover') isOpen.value = true
}
const leave = () => {
  if (props.trigger === 'hover') isOpen.value = false
}
</script>

<style lang="scss">
.ui-dropdown-wrap {
  position: relative;
  display: inline-block;
  .ui-dropdown-tip {
    color: #1890ff;
    font-size: 14px;
    cursor: default;
    user-select: none;
    display: inline-block;
  }
  .ui-dropdown-pop {
    display: inline-flex;
    font-size: 14px;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
    min-width: 120px;
    padding: 5px 8px;
    position: absolute;
    bottom: -2px;
    left: 0;
    z-index: 10;
    transform: translateY(100%);
    opacity: 0;
    transition: all 250ms;
    &.opening {
      opacity: 1;
    }
  }
}
</style>
