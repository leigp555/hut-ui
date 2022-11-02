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
    padding: 8px 0;
    position: absolute;
    bottom: -2px;
    left: 0;
    z-index: 10;
    transform: translateY(100%);
    opacity: 0;
    overflow: hidden;
    transition: all 250ms;
    max-height: 8em;
    overflow-y: auto;
    &::-webkit-scrollbar {
      //整个滚动条的宽高设置
      width: 4px; //宽高只有一个能生效，如果是横向滚动条高度生效，纵向滚动条宽度生效
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      //滚动条滑块的设置
      border-radius: 3px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      background-color: #c3c3c3;
    }
    &::-webkit-scrollbar-track {
      //滚动条轨道设置
      background-color: transparent;
    }
    &.opening {
      opacity: 1;
    }
  }
}
</style>
