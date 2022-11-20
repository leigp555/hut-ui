<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'

withDefaults(defineProps<{}>(), {})

const wrapRef = ref<HTMLDivElement | null>(null)
const scrollHeight = ref<number>(0)

const goTop = () => {
  scrollHeight.value = wrapRef.value!.scrollTop
  const step = scrollHeight.value / 10
  const time = setInterval(() => {
    if (scrollHeight.value > 0) {
      wrapRef.value!.scrollTo(0, scrollHeight.value - step)
      scrollHeight.value -= step
    } else {
      window.clearInterval(time)
    }
  }, 10)
}
</script>
<template>
  <div class="ui-backTop-wrap" ref="wrapRef">
    <div class="ui-backTop-content">
      <slot />
    </div>
    <div class="ui-backTop-action" @click="goTop">
      <slot name="action" />
    </div>
  </div>
</template>
<style lang="scss">
.ui-backTop-wrap {
  overflow-y: scroll;
  position: relative;
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    background-color: #c3c3c3;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  > .ui-backTop-content {
    line-height: 1.5em;
    margin-bottom: 50px;
    padding: 10px 10px;
  }
  > .ui-backTop-action {
    position: sticky;
    display: inline-block;
    bottom: 20px;
    left: 100%;
    transform: translateX(-15px);
  }
}
</style>
s
