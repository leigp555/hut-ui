<template>
  <div class="ui-grid-col" :style="style">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    span?: number
    offset?: number | 'auto'
  }>(),
  {
    span: 100,
    offset: 0
  }
)

const style = computed(() => {
  if (typeof props.offset === 'string') {
    return { width: `${props.span}vw`, marginLeft: 'auto' }
  }
  return { width: `${props.span}vw`, marginLeft: `${props.offset}vw` }
})
</script>

<style lang="scss">
.ui-grid-col {
  height: 100%;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  width: 100px;
}
</style>
