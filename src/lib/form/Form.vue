<template>
  <div class="ui-from-wrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

type User = {
  username: string
  password: string
}
const emits = defineEmits(['finish', 'finishFailed'])
withDefaults(
  defineProps<{
    mode?: User
    layout?: 'horizontal' | 'vertical' | 'inline'
    labelCol?: { span: number }
    wrapperCol?: { span: number }
    autocomplete?: 'off' | 'on'
  }>(),
  {
    mode: () => {},
    layout: 'vertical',
    labelCol: () => ({ span: 4 }),
    wrapperCol: () => ({ span: 100 }),
    autocomplete: 'off'
  }
)
</script>

<style lang="scss">
.ui-from-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
