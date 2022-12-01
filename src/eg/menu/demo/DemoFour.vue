<demo>
树形菜单栏(嵌套)
</demo>
<template>
  <Menu v-model:selectedKeys="selectedKeys" style="width: 256px" mode="column">
    <SubMenu keyValue="sub1">
      <template #icon>
        <SvgIcon name="email" width="1em" height="1em" />
      </template>
      <template #title>Navigation One</template>
      <MenuItemGroup keyValue="g1" title="Item 1">
        <MenuItem keyValue="1">Option 1</MenuItem>
        <MenuItem keyValue="2">Option 2</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup keyValue="g2" title="Item 2">
        <MenuItem keyValue="3">Option 3</MenuItem>
        <MenuItem keyValue="4">Option 4</MenuItem>
      </MenuItemGroup>
      <SubMenu keyValue="sub5">
        <template #icon>
          <SvgIcon name="setting" width="1em" height="1em" />
        </template>
        <template #title>Navigation Three</template>
        <MenuItem keyValue="13">Option 13</MenuItem>
        <MenuItem keyValue="14">Option 14</MenuItem>
        <MenuItem keyValue="15">Option 15</MenuItem>
        <MenuItem keyValue="16">Option 16</MenuItem>
      </SubMenu>
    </SubMenu>
    <SubMenu keyValue="sub2">
      <template #icon>
        <SvgIcon name="apps" width="1em" height="1em" />
      </template>
      <template #title>Navigation Two</template>
      <MenuItem keyValue="5">Option 5</MenuItem>
      <MenuItem keyValue="6">Option 6</MenuItem>
      <SubMenu keyValue="sub3">
        <template #title>Submenu</template>
        <MenuItem keyValue="7">Option 7</MenuItem>
        <MenuItem keyValue="8">Option 8</MenuItem>
        <SubMenu keyValue="sub4">
          <template #icon>
            <SvgIcon name="setting" width="1em" height="1em" />
          </template>
          <template #title>Navigation Three</template>
          <MenuItem keyValue="9">Option 9</MenuItem>
          <MenuItem keyValue="10">Option 10</MenuItem>
          <MenuItem keyValue="11">Option 11</MenuItem>
          <MenuItem keyValue="12">Option 12</MenuItem>
        </SubMenu>
      </SubMenu>
    </SubMenu>
  </Menu>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { Menu, MenuItemGroup, MenuItem, SubMenu, SvgIcon } from '@/lib'

const selectedKeys = ref<string[]>(['sub1', 'g1', '1'])

watchEffect(() => {
  console.log(selectedKeys.value)
})
</script>
