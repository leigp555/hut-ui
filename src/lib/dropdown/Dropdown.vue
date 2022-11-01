<template>
  <div class="ui-dropdown-wrap">
    <div tabindex="-1" class="ui-dropdown-tip" @click="toggle" @blur="hide">
      <slot />
    </div>
    <div class="ui-dropdown-pop" :class="{ opening: isOpen }">
      <slot name="pop" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref<boolean>(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
const hide = () => {
  isOpen.value = false
}
</script>

<style lang="scss">
.ui-dropdown-wrap {
  position: relative;
  display: inline-block;
  .ui-dropdown-tip {
    color: #1890ff;
    font-size: 14px;
    cursor: pointer;
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
    overflow: hidden;
    transition: all 250ms;
    &.opening {
      opacity: 1;
    }
  }
}
</style>
