<template>
  <div class="ui-steps-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, provide, toRefs } from 'vue'

const props = withDefaults(defineProps<{ current?: number; totalStep: number }>(), {
  current: 1
})
const { current, totalStep } = toRefs(props)
provide('ui_step_current', current)
provide('ui_step_totalStep', totalStep)
</script>

<style lang="scss">
.ui-steps-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
