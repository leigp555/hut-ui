<template>
  <div
    class="ui-space-wrap"
    :style="{
      flexDirection: direction,
      gap: realSize,
      alineItems,
      justifyContent: justifyContent
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    direction?: 'row' | 'column'
    size?: string | number
    alineItems?: 'start' | 'center' | 'end' | 'baseline'
    justifyContent?: 'start' | 'center' | 'end'
  }>(),
  {
    direction: 'row',
    size: '5px',
    alineItems: 'center',
    justifyContent: 'start'
  }
)

const realSize = computed(() => {
  console.log(props.size)
  if (typeof props.size === 'string') {
    return props.size
  }
  return `${props.size}px`
})
</script>

<style lang="scss">
.ui-space-wrap {
  display: flex;
}
</style>
