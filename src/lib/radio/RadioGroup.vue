<template>
  <div class="ui-radioGroup-wrap">
    <div v-for="item in slots" :key="item">
      <Component
        :is="item"
        :name="name"
        :checked="item.props.value === value"
        @select="onSelected($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, toRefs, useSlots, VNode } from 'vue'

const emits = defineEmits(['update:value', 'change'])
const props = withDefaults(defineProps<{ value: any; name: any }>(), {})
let slots: VNode[] = []
if (useSlots().default) {
  slots = useSlots().default!()
}

const { value, name } = toRefs(props)

const onSelected = (currentValue: number | string) => {
  emits('update:value', currentValue)
  emits('change', currentValue)
}
</script>

<style lang="scss">
.ui-radioGroup-wrap {
  display: flex;
  gap: 15px;
}
</style>
