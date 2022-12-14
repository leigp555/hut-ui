<template>
  <div class="components--wrap">
    <section class="components-Body">
      <span class="menu-pop-button" @click="showDrawer">
        <SvgIcon name="menu_outline" width="20px" height="20px" fill="#262626" />
      </span>
      <section class="display-menu scroll-container">
        <GuideMenu />
      </section>
      <section class="display-content scroll-container">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </section>
    </section>
  </div>

  <Drawer v-model:visible="visible" placement="left" classname="custom">
    <template #content>
      <section class="display-pop-menu scroll-container">
        <GuideMenu @change="onChange" />
      </section>
    </template>
  </Drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import GuideMenu from '@/components/GuideMenu.vue'
import { Drawer, Button, SvgIcon } from '@/lib'

const visible = ref<boolean>(false)
const showDrawer = () => {
  visible.value = true
}
const onChange = () => {
  visible.value = false
}
</script>

<style scoped lang="scss">
.components--wrap {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  > .components-Body {
    flex-grow: 10;
    overflow-y: auto;
    display: flex;
    position: relative;
    > .menu-pop-button {
      display: inline-flex;
      position: absolute;
      top: 90px;
      left: 0;
      width: 41px;
      height: 40px;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
      box-shadow: 2px 0 8px #00000026;
      z-index: 10;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      justify-content: center;
      align-items: center;
      background: #fff;
      @media (min-width: 800px) {
        display: none;
      }
    }
    > .display-menu {
      overflow-y: auto;
      overflow-x: hidden;
      scroll-behavior: smooth;
      flex-shrink: 0;
      border-right: 1px solid #f0f0f0;
      background: #fafafa;
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

.fade-enter-active,
.fade-leave-active {
  transition: all 250ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
