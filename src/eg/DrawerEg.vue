<template>
  <div class="ui-template-wrap">
    <div class="action">
      <Button type="primary" @click="showDrawer1">Open</Button>
      <Button type="primary" @click="showDrawer2">Open</Button>
      <Button type="primary" @click="showDrawer3">Open</Button>
      <Button type="primary" @click="showDrawer4">Open</Button>
      <Button type="primary" @click="showDrawer5">Open</Button>
    </div>
    <!--    左边-->
    <Drawer
      v-model:visible="visible1"
      placement="left"
      @afterClose="afterClose"
      classname="custom"
      :style="{ width: '300px' }"
    >
      <template #title>
        <div class="title">
          <span>Basic Drawer</span>
          <SvgIcon name="cha" width="1em" height="1em" @click="onClose1" />
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
    <!--    右边-->
    <Drawer
      v-model:visible="visible2"
      placement="right"
      @afterClose="afterClose"
      classname="custom"
      :style="{ width: '300px' }"
    >
      <template #title>
        <div class="title">
          <span>Basic Drawer</span>
          <SvgIcon name="cha" width="1em" height="1em" @click="onClose2" />
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
    <!--    上边-->
    <Drawer
      v-model:visible="visible3"
      placement="top"
      @afterClose="afterClose"
      classname="custom"
    >
      <template #title>
        <div class="title">
          <span>Basic Drawer</span>
          <SvgIcon name="cha" width="1em" height="1em" @click="onClose3" />
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
    <!--    下边-->
    <Drawer
      v-model:visible="visible4"
      placement="bottom"
      @afterClose="afterClose"
      classname="custom"
    >
      <template #title>
        <div class="title">
          <span>Basic Drawer</span>
          <SvgIcon name="cha" width="1em" height="1em" @click="onClose4" />
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
    <!--    点击蒙层不关闭-->
    <Drawer
      v-model:visible="visible5"
      placement="bottom"
      classname="custom"
      :maskClosable="false"
    >
      <template #title>
        <div class="title">
          <span>Basic Drawer</span>
          <SvgIcon name="cha" width="1em" height="1em" @click="onClose5" />
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Drawer from '@/lib/drawer/Drawer.vue'
import Button from '@/lib/button/Button.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const visible1 = ref<boolean>(false)
const visible2 = ref<boolean>(false)
const visible3 = ref<boolean>(false)
const visible4 = ref<boolean>(false)
const visible5 = ref<boolean>(false)
const showDrawer1 = () => {
  visible1.value = true
}
const showDrawer2 = () => {
  visible2.value = true
}
const showDrawer3 = () => {
  visible3.value = true
}
const showDrawer4 = () => {
  visible4.value = true
}
const showDrawer5 = () => {
  visible5.value = true
}
const onClose1 = () => {
  visible1.value = false
}
const onClose2 = () => {
  visible2.value = false
}
const onClose3 = () => {
  visible3.value = false
}
const onClose4 = () => {
  visible4.value = false
}
const onClose5 = () => {
  visible5.value = false
}

const afterClose = () => {
  console.log('close')
}
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  gap: 50px;
  > .action {
    display: flex;
    gap: 50px;
  }
}
.custom {
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-bottom: 1px solid #f0f0f0;
    > svg {
      cursor: pointer;
    }
  }
  .content {
    padding: 24px;
    line-height: 1.5em;
    color: red;
  }
}
</style>
