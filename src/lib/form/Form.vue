<template>
  <form class="ui-form-wrap" :autocomplete="autocomplete" @submit="onSubmit">
    <div class="ui-from-item" v-for="item in slots" :key="item">
      <Component
        :is="item"
        :layout="layout"
        :labelCol="labelCol"
        :wrapperCol="item.props.wrapperCol ? item.props.wrapperCol : wrapperCol"
        :data="data"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots, toRefs } from 'vue'

export type User = {
  username: string
  password: string
}
const emits = defineEmits(['finish', 'finishFailed', 'update:data'])
const props = withDefaults(
  defineProps<{
    data?: User
    layout?: 'horizontal' | 'vertical'
    labelCol?: { span?: number; offset?: number }
    wrapperCol?: { span?: number; offset?: number }
    autocomplete?: 'off' | 'on'
  }>(),
  {
    mode: () => {},
    layout: 'vertical',
    labelCol: () => ({ span: 10, offset: 0 }),
    wrapperCol: () => ({ span: 100, offset: 0 }),
    autocomplete: 'off'
  }
)

const slots = useSlots().default!()
const { data } = toRefs(props)

const onSubmit = (e: Event) => {
  e.stopPropagation()
  e.preventDefault()
  console.log('表当提交')
}
</script>

<style lang="scss">
.ui-form-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 14px;
  color: #000000d9;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
    Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
    'Noto Color Emoji';
  > .ui-from-item {
    flex-grow: 1;
  }
}
</style>
