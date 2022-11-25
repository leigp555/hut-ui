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
  if (props.offset === 'auto') {
    return { width: `${props.span}%`, marginLeft: 'auto' }
  }
  return { width: `${props.span}%`, marginLeft: `${props.offset}%` }
})
</script>

<style lang="scss">
.ui-grid-col {
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
}
</style>
