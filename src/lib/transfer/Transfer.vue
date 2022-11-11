<template>
  <div class="ui-transfer-wrap">
    <section class="ui-transfer-source"></section>
  </div>
</template>

<script setup lang="ts">
// import { withDefaults, defineProps } from 'vue'

export interface MockData {
  key: string
  title: string
  description: string
  disabled: boolean
}

// const emits = defineEmits(['change'])
// const props = withDefaults(
//   defineProps<{
//     source?: MockData
//     selected?: MockData
//     title?: string[]
//     // eslint-disable-next-line no-unused-vars
//     render: (item: MockData) => void
//   }>(),
//   {}
// )
</script>

<style lang="scss">
.ui-transfer-wrap {
}
</style>
