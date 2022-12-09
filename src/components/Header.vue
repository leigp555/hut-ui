<template>
  <div class="wrap">
    <div class="logo">
      <img src="src/assets/logo.png" alt="" />
      <span class="title-description">Hut Ui</span>
    </div>
    <div class="nav">
      <div class="nav-link">
        <router-link to="/home">首页</router-link>
        <router-link to="/guide/intro">指南</router-link>
        <router-link to="/components/button">组件</router-link>
      </div>
      <div class="search">
        <Search />
      </div>
    </div>
    <div class="link">
      <div class="link-github">
        <SvgIcon name="github" width="20px" height="20px" />
      </div>
      <div class="link-menu">
        <Dropdown trigger="click" class="display-dropdown">
          <Button type="link" class="menu-pop-button">
            <template #icon>
              <SvgIcon name="menu" width="14px" height="14px" fill="#262626" />
            </template>
          </Button>
          <template #pop>
            <Menu
              v-model:selectedKeys="selectedKeys"
              style="width: 120px"
              mode="column"
              class="head-menu-display"
            >
              <SubMenu keyValue="sub1" :collapsible="false">
                <template #title>
                  <router-link to="/home" class="router-link" style="font-weight: 600">
                    首页
                  </router-link>
                </template>
              </SubMenu>
              <SubMenu keyValue="sub2" :collapsible="false">
                <template #title>
                  <router-link to="/guide" class="router-link" style="font-weight: 600">
                    指南
                  </router-link>
                </template>
              </SubMenu>
              <SubMenu keyValue="sub3" :collapsible="false">
                <template #title>
                  <router-link
                    to="/components"
                    class="router-link"
                    style="font-weight: 600"
                  >
                    组件
                  </router-link>
                </template>
              </SubMenu>
            </Menu>
          </template>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { SvgIcon, Drawer, Button, Menu, MenuItem, SubMenu, Dropdown } from '@/lib'
import Search from '@/components/Search.vue'

const selectedKeys = ref<string[]>([])
</script>

<style lang="scss" scoped>
.wrap {
  height: 64px;
  padding: 0 40px 0 40px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #dcdfe6;
  font-size: 16px;
  color: #000000d9;
  @media (max-width: 700px) {
    padding: 0 16px 0 16px;
    justify-content: space-between;
  }
  > .logo {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-right: 12px;
    flex-shrink: 0;
    > img {
      height: 32px;
    }
    > .title-description {
      font-size: 18px;
      font-family: v-sans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      @media (max-width: 700px) {
        display: none;
      }
    }
  }
  > .nav {
    justify-self: center;
    display: flex;
    gap: 50px;
    align-items: center;
    margin-left: 140px;
    @media (max-width: 700px) {
      margin-left: 0;
    }
    > .nav-link {
      display: flex;
      gap: 60px;
      align-items: center;
      @media (max-width: 900px) {
        display: none;
      }
    }
    > .search {
      width: 210px;
    }

    a {
      text-decoration: none;
      white-space: nowrap;
      color: inherit;
      & .router-link-exact-active {
        color: #1890ff;
      }
    }
  }
  > .link {
    margin-left: auto;
    @media (max-width: 700px) {
      margin-left: 0;
    }
    > .link-github {
      @media (max-width: 800px) {
        display: none;
      }
    }
    > .link-menu {
      font-size: 13px;
      @media (min-width: 800px) {
        display: none;
      }
    }
  }
}
</style>
<style lang="scss">
.display-dropdown {
  .ui-dropdown-pop {
    right: 0;
    left: auto;
    z-index: 5000;
  }
  .dropdown-pop-content {
    max-height: 500px !important;
    .head-menu-display {
      .ui-subMenu-title-wrap {
        padding: 0 !important;
        .ui-subMenu-title-inner {
          flex-grow: 10;
          .ui-subMenu-title {
            display: block !important;
            width: 100%;
            a {
              text-decoration: none;
              white-space: nowrap;
              color: inherit;
              display: block;
              width: 100%;
              padding: 0 24px;
              &.router-link-exact-active {
                color: #1890ff;
                display: flex;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
