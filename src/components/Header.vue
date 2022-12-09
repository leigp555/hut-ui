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
        <h4 style="margin-top: 20px; text-align: center; margin-bottom: 20px">导航</h4>
        <Menu v-model:selectedKeys="selectedKeys" style="width: 240px" mode="column">
          <SubMenu keyValue="sub1" :collapsible="false">
            <template #title>
              <router-link :to="`/guide`" class="router-link" style="font-weight: 600">
                首页
              </router-link>
            </template>
          </SubMenu>
          <SubMenu keyValue="sub2" :collapsible="false">
            <template #title>
              <router-link
                :to="`/components`"
                class="router-link"
                style="font-weight: 600"
              >
                指南
              </router-link>
            </template>
          </SubMenu>
          <SubMenu keyValue="sub3" :collapsible="false">
            <template #title>
              <router-link :to="`/home`" class="router-link" style="font-weight: 600">
                组件
              </router-link>
            </template>
          </SubMenu>
        </Menu>
        <h4 style="margin-top: 40px; text-align: center; margin-bottom: 20px">
          组件概览
        </h4>
        <ComponentsMenu @change="onChange" />
      </section>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Input, SvgIcon, Drawer, Button, Menu, MenuItem, SubMenu } from '@/lib'
import ComponentsMenu from '@/components/ComponentsMenu.vue'
import Search from '@/components/Search.vue'

const value = ref<string>('')

const visible = ref<boolean>(false)
const showDrawer = () => {
  visible.value = true
}

const onChange = () => {
  visible.value = false
}

const selectedKeys = ref<string[]>(['sub1'])
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
  color: #000000d9;
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
    > .search {
      width: 210px;
    }

    a {
      text-decoration: none;
      white-space: nowrap;
      color: inherit;
    }
    > .router-link-exact-active {
      color: #1890ff;
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
