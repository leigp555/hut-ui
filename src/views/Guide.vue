<template>
  <div class="guide-wrap">
    <section class="guideMenu">
      <Menu v-model:selectedKeys="selectedKeys" style="width: 256px" mode="column">
        <SubMenu keyValue="sub1" :collapsible="true">
          <template #title>Navigation One</template>
          <MenuItem keyValue="1">Option 1</MenuItem>
          <MenuItem keyValue="2">Option 2</MenuItem>
          <MenuItem keyValue="3">Option 3</MenuItem>
          <MenuItem keyValue="4">Option 4</MenuItem>
        </SubMenu>
        <SubMenu keyValue="sub2" :collapsible="true">
          <template #title>Navigation Two</template>
          <MenuItem keyValue="5">Option 5</MenuItem>
          <MenuItem keyValue="6">Option 6</MenuItem>
          <MenuItem keyValue="7">Option 7</MenuItem>
          <MenuItem keyValue="8">Option 8</MenuItem>
        </SubMenu>
        <SubMenu keyValue="sub4" :collapsible="true">
          <template #title>Navigation Three</template>
          <MenuItem keyValue="9">Option 9</MenuItem>
          <MenuItem keyValue="10">Option 10</MenuItem>
          <MenuItem keyValue="11">Option 11</MenuItem>
          <MenuItem keyValue="12">Option 12</MenuItem>
        </SubMenu>
      </Menu>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Menu from '@/lib/menu/Menu.vue'
import MenuItem from '@/lib/menu/MenuItem.vue'
import SubMenu from '@/lib/menu/SubMenu.vue'

const current = ref<string[]>(['mail'])

const selectedKeys = ref<string[]>(['1'])
</script>

<style scoped lang="scss">
.guide-wrap {
  height: 100%;
  > .guideMenu {
    height: 100%;
    display: inline-flex;
    overflow-y: scroll;
  }
}
</style>
