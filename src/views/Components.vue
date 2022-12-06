<template>
  <div class="components--wrap">
    <section class="components-Head">
      <Head />
    </section>
    <section class="components-Body">
      <Button type="link" @click="showDrawer" class="menu-pop-button">
        <template #icon>
          <SvgIcon name="menu" width="1em" height="1em" fill="#1890ff" />
        </template>
        菜单
      </Button>
      <section class="display-menu scroll-container">
        <ComponentsMenu />
        <Drawer v-model:visible="visible" placement="left" classname="custom">
          <template #content>
            <section class="display-pop-menu scroll-container">
              <ComponentsMenu />
            </section>
          </template>
        </Drawer>
      </section>
      <section class="display-content scroll-container">
        <router-view />
      </section>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Head from '@/views/Head.vue'
import ComponentsMenu from '@/components/ComponentsMenu.vue'
import { Drawer, Button, SvgIcon } from '@/lib'

const visible = ref<boolean>(false)
const showDrawer = () => {
  visible.value = true
}
</script>

<style scoped lang="scss">
.components--wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > .components-Head {
    height: 50px;
    flex-shrink: 0;
  }
  > .components-Body {
    flex-grow: 10;
    overflow-y: auto;
    display: flex;
    position: relative;
    > .menu-pop-button {
      position: absolute;
      font-size: 13px;
      top: 0;
      left: 10px;
      z-index: 10;
      @media (min-width: 800px) {
        display: none;
      }
    }
    > .display-menu {
      overflow-y: auto;
      overflow-x: hidden;
      scroll-behavior: smooth;
      flex-shrink: 0;
      @media (max-width: 800px) {
        display: none;
      }
    }
    > .display-content {
      background: #ffffff;
      flex-grow: 10;
      overflow: hidden;
    }
  }
}
</style>

<style lang="scss">
.display-pop-menu {
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  height: 100%;
}
</style>
