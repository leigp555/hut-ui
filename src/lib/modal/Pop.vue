<template>
  <div class="ui-modal-pop">
    <Modal :visible="visible" :width="520" :top="100" :mask-closable="true">
      <template #content>
        <Alert
          :message="title"
          type="error"
          showIcon
          :style="{ backgroundColor: '#fff', border: 'none' }"
        >
          <template #description>
            <Component :is="content" />
          </template>
        </Alert>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { defineProps, VNode, withDefaults } from 'vue'
import Modal from './Modal.vue'
import Alert from '../alert/Alert.vue'

// const visible = ref<boolean>(true)
withDefaults(
  defineProps<{
    visible?: boolean
    title: string
    content: VNode | string
    icon: VNode
    onOK: () => void
    onCancel: () => void
    cancelText: string
    okText: string
    type: 'info' | 'success' | 'error' | 'warning'
  }>(),
  {
    visible: true,
    type: 'info'
  }
)
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
