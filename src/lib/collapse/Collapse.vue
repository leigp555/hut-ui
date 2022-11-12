<template>
  <div class="ui-collapse-wrap">
    <Component
      :is="item"
      v-for="item in slots"
      :key="item"
      :currentKey="activeKey"
      @change="onChange"
    />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots } from 'vue'

const slots = useSlots().default()

const emits = defineEmits(['update:activeKey'])
withDefaults(defineProps<{ activeKey?: string[]; accordion?: boolean }>(), {
  activeKey: () => [],
  accordion: false
})
const onChange = (newKey: string[]) => {
  emits('update:activeKey', newKey)
}
</script>

<style lang="scss">
.ui-collapse-wrap {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
