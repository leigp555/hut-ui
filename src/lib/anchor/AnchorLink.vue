<script setup lang="ts">
import { withDefaults, defineProps, toRefs } from 'vue'

const props = withDefaults(defineProps<{ title: string; href: string }>(), {})
const { href } = toRefs(props)

// 滑动元素
const onClick = () => {
  if (href.value && document.querySelector(href.value)) {
    document.querySelector(href.value)!.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<template>
  <span @click="onClick" class="ui-anchorLink-title">{{ title }}</span>
</template>

<style lang="scss">
.ui-anchorLink-title {
  color: #000000d9;
  cursor: pointer;
  transition: all 250ms;
  height: 16px;
  &:hover {
    color: #1890ff;
  }
  &.active {
    color: #1890ff;
  }
}
</style>
