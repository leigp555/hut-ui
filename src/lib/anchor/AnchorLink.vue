<script setup lang="ts">
import { withDefaults, defineProps, toRefs } from 'vue'

const props = withDefaults(
  defineProps<{ title?: string; href: string; nested?: boolean }>(),
  {
    nested: false,
    title: ''
  }
)
const { href } = toRefs(props)

// 滑动元素
const onClick = () => {
  if (href.value && document.querySelector(href.value)) {
    document.querySelector(href.value)!.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<template>
  <span
    @click="onClick"
    class="ui-anchorLink-title"
    :class="{ 'ui-anchorLink-nested': nested }"
    >{{ title }}</span
  >
</template>

<style lang="scss">
.ui-anchorLink-title {
  color: #000000d9;
  font-size: 12px;
  cursor: pointer;
  transition: all 250ms;
  height: 16px;
  max-width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &.ui-anchorLink-nested {
    margin-left: 8px;
  }
  &:hover {
    color: #1890ff;
  }
  &.active {
    color: #1890ff;
  }
}
</style>
