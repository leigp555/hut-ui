<template>
  <div class="ui-colorGroup-wrap">
    <p :style="{ color: '#56688a', fontWeight: 700 }">{{ title }}</p>
    <p :style="{ color: '#666696', fontSize: '14px' }">{{ description }}</p>
    <div class="ui-colorGroup-content">
      <ColorUtil :colors="colorKind[kind].slice(0, 15)" />
      <ColorUtil :colors="colorKind[kind].slice(15, 30)" />
      <ColorUtil :colors="colorKind[kind].slice(30, 45)" />
      <ColorUtil :colors="colorKind[kind].slice(45, 60)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import ColorUtil from './ColorUtil.vue'
import { colorKind } from './color'

withDefaults(
  defineProps<{
    title?: string
    description?: string
    kind:
      | 'red'
      | 'orange'
      | 'yellow'
      | 'Yellow_green'
      | 'green'
      | 'turquoise'
      | 'blue'
      | 'Blue_purple'
      | 'purple'
      | 'amaranth'
  }>(),
  {}
)
</script>

<style lang="scss">
.ui-colorGroup-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
  > .ui-colorGroup-content {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>
