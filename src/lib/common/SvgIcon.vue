<template>
  <svg aria-hidden="true" class="ui-svg" :width="width" :height="height">
    <use :xlink:href="symbolId" :fill="fill" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, toRefs, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    fill?: string
    width?: string
    height?: string
  }>(),
  {
    width: '1em',
    height: '1em'
  }
)
const { width, height } = toRefs(props)
const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss">
.ui-svg {
  vertical-align: middle;
  overflow: hidden;
}
</style>
