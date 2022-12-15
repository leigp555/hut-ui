<demo>
横向菜单栏
</demo>

<template>
  <Menu v-model:selectedKeys="selectedKeys" mode="horizontal" @change="onChange">
    <MenuItem keyValue="mail">
      <template #icon>
        <Icon_email name="email" width="1em" height="1em" />
      </template>
      Navigation One
    </MenuItem>
    <MenuItem keyValue="app" :disabled="true">
      <template #icon>
        <Icon_apps name="apps" width="1em" height="1em" />
      </template>
      Navigation Two
    </MenuItem>
    <SubMenu keyValue="sub1">
      <template #icon>
        <Icon_setting name="setting" width="1em" height="1em" />
      </template>
      <template #title>Navigation Three - Submenu</template>
      <MenuItemGroup title="Item 1" keyValue="Item 1">
        <MenuItem keyValue="setting:1">Option 1</MenuItem>
        <MenuItem keyValue="setting:2">Option 2</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2" keyValue="Item 2">
        <MenuItem keyValue="setting:3">Option 3</MenuItem>
        <MenuItem keyValue="setting:4">Option 4</MenuItem>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon_email, Icon_setting, Icon_apps } from '@hut-ui/icons-vue'
import { Menu, MenuItemGroup, MenuItem, SubMenu } from '@/lib'

const selectedKeys = ref<string[]>(['mail'])

const onChange = (selectKey: string[]) => {
  console.log(selectKey)
}
</script>
