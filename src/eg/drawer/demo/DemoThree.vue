<demo>
上边弹出
</demo>

<template>
  <Button type="primary" @click="showDrawer">Open</Button>
  <Drawer
    v-model:visible="visible"
    placement="top"
    @afterClose="afterClose"
    classname="custom"
  >
    <template #title>
      <div class="title">
        <span>Basic Drawer</span>
        <span class="close"
          ><Icon_cha name="cha" width="1em" height="1em" @click="onClose"
        /></span>
      </div>
    </template>
    <template #content>
      <div class="content">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon_cha } from '@hut-ui/icons-vue'
import { Drawer, Button } from '@/lib'

const visible = ref<boolean>(false)
const onClose = () => {
  visible.value = false
}
const afterClose = () => {
  console.log('close')
}
const showDrawer = () => {
  visible.value = true
}
</script>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  border-bottom: 1px solid #f0f0f0;
  .close {
    cursor: pointer;
  }
}
.content {
  padding: 24px;
}
</style>
