<script lang="ts" setup>
import { defineProps, onMounted, ref, toRefs, VNode, withDefaults } from 'vue'
import Button from '@/lib/button/Button.vue'

import Alert from '../alert/Alert.vue'

const emits = defineEmits(['ok', 'close'])
const props = withDefaults(
  defineProps<{
    message: VNode
    description: VNode
    icon?: VNode
    okText?: string
    type: 'success' | 'error' | 'warning' | 'info'
    ok: boolean
    cancel: boolean
    width?: number
    unMount: () => void
    duration?: number | 'infinite'
  }>(),
  { width: 400, duration: 3000 }
)
const { unMount, duration } = toRefs(props)

const visible = ref<boolean>(false)
const handleOk = () => {
  emits('ok')
  const id = setTimeout(() => {
    visible.value = false
    const x = setTimeout(() => {
      unMount.value()
      window.clearTimeout(x)
    }, 300)
    window.clearTimeout(id)
  }, 400)
}

const handleCancel = () => {
  emits('close')
  visible.value = false
  unMount.value()
}

onMounted(() => {
  visible.value = true
  if (duration.value !== 'infinite') {
    const id = setTimeout(() => {
      visible.value = false
      const x = setTimeout(() => {
        unMount.value()
        window.clearTimeout(x)
      }, 300)
      window.clearTimeout(id)
    }, duration.value)
  }
})
</script>

<template>
  <Transition name="notification">
    <div
      class="ui-notification-content"
      v-if="visible"
      :style="{ maxWidth: `${width}px`, width: '100%' }"
    >
      <Alert
        :message="typeof message === 'string' ? message : ''"
        :type="type"
        showIcon
        banner
        closable
        :style="{ backgroundColor: '#fff' }"
        @close="handleCancel"
      >
        <template #title v-if="typeof message !== 'string'">
          <Component :is="message" />
        </template>
        <template #description>
          <Component :is="description" v-if="typeof description !== 'string'" />
          <div v-else>{{ description }}</div>
        </template>
        <template #icon v-if="icon">
          <Component :is="icon" />
        </template>
      </Alert>
      <div
        class="ui-notification-footer"
        style="padding: 10px 16px; border-top: none; margin-bottom: 4px"
        v-if="ok"
      >
        <Button type="primary" @click="handleOk">{{ okText ? okText : '确定' }}</Button>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.ui-notification-content {
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  word-wrap: break-word;
  background: #fff;
  border-radius: 2px;
  overflow: hidden;
  width: 384px;
  max-width: calc(100vw - 48px);
  margin-bottom: 16px;
  .ui-notification-footer {
    display: flex;
    justify-content: end;
  }
}
.notification-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.notification-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.notification-enter-active,
.notification-leave-active {
  transition: all 250ms;
}
</style>
