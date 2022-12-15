<demo>
自定义提示内容
</demo>

<template>
  <Button @click="custom">Custom</Button>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Icon_wechat } from '@hut-ui/icons-vue'
import { Button, modal } from '@/lib'

const custom = () => {
  modal.custom({
    width: 400,
    title: h('p', { style: { color: 'red' } }, 'This is a Custom message '),
    content: 'some messages...some messages...',
    icon: h(Icon_wechat, { name: 'weixin', width: '1em', height: '1em' }),
    okText: 'custom'
  })
}
</script>
