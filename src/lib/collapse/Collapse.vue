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
$border_color: #d9d9d9;
.ui-collapse-wrap {
  border: 1px solid $border_color;
  border-radius: 2px;
}
</style>
