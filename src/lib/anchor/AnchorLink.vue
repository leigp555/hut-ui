<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref } from 'vue'

const props = withDefaults(defineProps<{ title: string; href: string }>(), {})
const { href } = toRefs(props)

const titleRef = ref<HTMLElement | null>(null)
// 滑动元素
const onClick = () => {
  document.querySelector(href.value).scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
  <div class="ui-anchorLink-wrap">
    <span ref="titleRef" @click="onClick" class="ui-anchorLink-title">{{ title }}</span>
    <div class="ui-anchorLink-slot">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.ui-anchorLink-wrap {
  > .ui-anchorLink-title {
    color: #1890ff;
    cursor: pointer;
    &.active {
      color: red;
    }
  }
  > .ui-anchorLink-slot {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
