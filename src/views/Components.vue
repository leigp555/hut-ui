<template>
  <div class="components--wrap">
    <section class="components-Head">
      <Header />
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
        <!--        <Loading v-if="status" />-->
        <router-view />
      </section>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import Header from '@/components/Header.vue'
import ComponentsMenu from '@/components/ComponentsMenu.vue'

import { Drawer, Button, SvgIcon } from '@/lib'

const visible = ref<boolean>(false)
const showDrawer = () => {
  visible.value = true
}
// 骨架占位
// import Loading from '@/components/Loading.vue'
// import { useLoadingStore } from '@/store'
// const loadStore = useLoadingStore()
// const status = computed<boolean>(() => {
//   return loadStore.getStatus
// })
</script>

<style scoped lang="scss">
.components--wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  > .components-Head {
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
      &::-webkit-scrollbar-thumb {
        background-color: #ffffff;
        transition: all 250ms;
      }
      &:hover {
        &::-webkit-scrollbar-thumb {
          background-color: #b2b2b2;
        }
      }
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
