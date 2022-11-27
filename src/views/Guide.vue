<template>
  <div class="guide-wrap">
    <section class="guideHead">
      <Head />
    </section>
    <section class="guideBody">
      <section class="guideMenu scroll-container">
        <Menu v-model:selectedKeys="selectedKeys" style="width: 240px" mode="column">
          <SubMenu keyValue="sub1" :collapsible="false">
            <template #title>Navigation One</template>
            <MenuItem keyValue="1">Option 1</MenuItem>
            <MenuItem keyValue="2">Option 2</MenuItem>
            <MenuItem keyValue="3">Option 3</MenuItem>
            <MenuItem keyValue="4">Option 4</MenuItem>
          </SubMenu>
          <SubMenu keyValue="sub2" :collapsible="false">
            <template #title>Navigation Two</template>
            <MenuItem keyValue="5">Option 5</MenuItem>
            <MenuItem keyValue="6">Option 6</MenuItem>
            <MenuItem keyValue="7">Option 7</MenuItem>
            <MenuItem keyValue="8">Option 8</MenuItem>
          </SubMenu>
          <SubMenu keyValue="sub4" :collapsible="false">
            <template #title>Navigation Three</template>
            <MenuItem keyValue="9">Option 9</MenuItem>
            <MenuItem keyValue="10">Option 10</MenuItem>
            <MenuItem keyValue="11">Option 11</MenuItem>
            <MenuItem keyValue="12">Option 12</MenuItem>
          </SubMenu>
          <SubMenu keyValue="sub5" :collapsible="false">
            <template #title>Navigation Three</template>
            <MenuItem keyValue="13">Option 13</MenuItem>
            <MenuItem keyValue="14">Option 14</MenuItem>
            <MenuItem keyValue="15">Option 15</MenuItem>
            <MenuItem style="margin-bottom: 50px" keyValue="16">Option 16</MenuItem>
          </SubMenu>
        </Menu>
      </section>
      <section class="guideContent scroll-container">xxx</section>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Menu from '@/lib/menu/Menu.vue'
import MenuItem from '@/lib/menu/MenuItem.vue'
import SubMenu from '@/lib/menu/SubMenu.vue'
import Head from '@/views/Head.vue'

const current = ref<string[]>(['mail'])

const selectedKeys = ref<string[]>(['sub1', '1'])
</script>

<style scoped lang="scss">
.guide-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  > .guideHead {
    height: 50px;
    flex-shrink: 0;
    background: #1890ff;
  }

  > .guideBody {
    flex-grow: 10;
    overflow: hidden;
    display: flex;
    > .guideMenu {
      display: inline-flex;
      overflow-y: auto;
    }
    > .guideContent {
      background: orange;
      flex-grow: 10;
      overflow-y: auto;
    }
  }
}
</style>
