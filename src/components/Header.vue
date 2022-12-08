<template>
  <div class="wrap">
    <div class="logo">
      <img src="src/assets/logo.png" alt="" />
      <span>Hut Ui</span>
    </div>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/guide/intro">指南</router-link>
      <router-link to="/components/button">组件</router-link>
      <div class="search">
        <Search />
      </div>
    </div>
    <div class="link">
      <div class="link-content">
        <SvgIcon name="github" width="20px" height="20px" />
      </div>
      <Button type="link" @click="showDrawer" class="menu-pop-button">
        <template #icon>
          <SvgIcon name="menu" width="1em" height="1em" fill="#1890ff" />
        </template>
        菜单
      </Button>
    </div>
  </div>
  <Drawer v-model:visible="visible" placement="left" classname="custom">
    <template #content>
      <section class="display-pop-menu scroll-container">
        <ComponentsMenu />
      </section>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input, SvgIcon, Drawer, Button } from '@/lib'
import ComponentsMenu from '@/components/ComponentsMenu.vue'
import Search from '@/components/Search.vue'

const value = ref<string>('')

const visible = ref<boolean>(false)
const showDrawer = () => {
  visible.value = true
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 64px;
  padding: 0 24px 0 40px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #dcdfe6;
  font-size: 16px;
  > .logo {
    width: 216px;
    display: flex;
    gap: 12px;
    align-items: center;
    > img {
      height: 32px;
    }
    > span {
      font-size: 18px;
      font-family: v-sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    }
  }
  > .nav {
    padding: 0 20px;
    display: flex;
    gap: 60px;
    align-items: center;
    .search {
    }
    a {
      text-decoration: none;
      color: #1890ff;
      white-space: nowrap;
    }
  }
  > .link {
    margin-left: auto;
    > .link-content {
      @media (max-width: 800px) {
        display: none;
      }
    }
    > .menu-pop-button {
      font-size: 13px;
      @media (min-width: 800px) {
        display: none;
      }
    }
  }
}
</style>
