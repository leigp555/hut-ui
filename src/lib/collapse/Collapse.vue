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
import { withDefaults, defineProps, useSlots, VNode } from 'vue'

let slots: VNode[] = []
if (useSlots().default) {
  slots = useSlots().default!()
}

const emits = defineEmits(['update:activeKey', 'change'])
const props = withDefaults(
  defineProps<{ activeKey?: string[]; accordion?: boolean }>(),
  {
    activeKey: () => [],
    accordion: false
  }
)
const onChange = (newKey: string) => {
  if (props.accordion) {
    if (props.activeKey.indexOf(newKey) >= 0) {
      emits('update:activeKey', [])
      emits('change', [])
    } else {
      emits('update:activeKey', [newKey])
      emits('change', [newKey])
    }
  } else if (props.activeKey.indexOf(newKey) >= 0) {
    const index = props.activeKey.indexOf(newKey)
    const newArr = [...props.activeKey]
    newArr.splice(index, 1)
    emits('update:activeKey', newArr)
    emits('change', newArr)
  } else {
    emits('update:activeKey', [...props.activeKey, newKey])
    emits('change', [...props.activeKey, newKey])
  }
}
</script>

<style lang="scss">
$border_color: #d9d9d9;
.ui-collapse-wrap {
  border: 1px solid $border_color;
  border-radius: 2px;
}
</style>
