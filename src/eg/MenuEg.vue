<template>
  <div class="ui-template-wrap">
    <Menu v-model:selectedKeys="current" mode="horizontal">
      <MenuItem keyValue="mail">
        <template #icon>
          <SvgIcon name="mail" width="1em" height="1em" />
        </template>
        Navigation One
      </MenuItem>
      <MenuItem keyValue="app" disabled>
        <template #icon>
          <SvgIcon name="apps" width="1em" height="1em" />
        </template>
        Navigation Two
      </MenuItem>
      <SubMenu keyValue="sub1">
        <template #icon>
          <SvgIcon name="setting" width="1em" height="1em" />
        </template>
        <template #title>Navigation Three - Submenu</template>
        <MenuItemGroup title="Item 1">
          <MenuItem keyValue="setting:1">Option 1</MenuItem>
          <MenuItem keyValue="setting:2">Option 2</MenuItem>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <MenuItem keyValue="setting:3">Option 3</MenuItem>
          <MenuItem keyValue="setting:4">Option 4</MenuItem>
        </MenuItemGroup>
      </SubMenu>
      <MenuItem keyValue="test">Test</MenuItem>
      <MenuItem keyValue="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </MenuItem>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from '@/lib/menu/Menu.vue'
import MenuItem from '@/lib/menu/MenuItem.vue'
import MenuItemGroup from '@/lib/menu/MenuItemGroup.vue'
import SubMenu from '@/lib/menu/SubMenu.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const current = ref<string[]>(['mail'])
</script>

<style lang="scss">
.ui-template-wrap {
  padding: 200px 50px;
}
</style>
