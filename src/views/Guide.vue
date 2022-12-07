<template>
  <div class="guide-wrap">
    <section class="guideHead">
      <Header />
    </section>
    <section class="guideBody">
      <section class="guideMenu scroll-container">
        <h4 class="guideMenu-title">指南</h4>
        <Menu v-model:selectedKeys="selectedKeys" style="width: 240px" mode="column">
          <SubMenu keyValue="sub1" :collapsible="false">
            <MenuItem
              v-for="item in sub1"
              :keyValue="item.keyValue"
              :key="item.keyValue"
              class="menuItem"
            >
              <router-link :to="`/guide/${item.keyValue}`" class="router-link">
                {{ item.title }}
              </router-link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </section>
      <section class="guideContent scroll-container">
        <router-view />
      </section>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import Menu from '@/lib/menu/Menu.vue'
import MenuItem from '@/lib/menu/MenuItem.vue'
import SubMenu from '@/lib/menu/SubMenu.vue'
import Header from '@/views/Header.vue'

const selectedKeys = ref<string[]>(['intro'])

const sub1 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'intro',
    title: '介绍'
  },
  {
    keyValue: 'install',
    title: ' 安装'
  },
  {
    keyValue: 'usage',
    title: '简单地案例'
  }
])
</script>

<style scoped lang="scss">
.guide-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > .guideHead {
    height: 50px;
    flex-shrink: 0;
    background: #1890ff;
  }

  > .guideBody {
    flex-grow: 10;
    overflow-y: auto;
    display: flex;
    > .guideMenu {
      display: inline-flex;
      flex-direction: column;
      overflow-y: auto;
      scroll-behavior: smooth;
      background: #fafafa;
      .menuItem {
        padding: 0 !important;
      }
      .router-link {
        display: block;
        padding-left: 48px;
        height: 100%;
        width: 100%;
      }
      > .guideMenu-title {
        font-weight: 600;
        display: flex;
        justify-content: center;
        padding: 20px 0 20px 0;
        background: #fafafa;
      }
    }
    > .guideContent {
      background: #ffffff;
      flex-grow: 10;
      padding: 20px;
      overflow-y: auto;
      scroll-behavior: smooth;
    }
  }
}
</style>
