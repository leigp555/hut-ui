<template>
  <div class="ui-template-wrap">
    <!--    横向menu-->
    <Menu v-model:selectedKeys="current" mode="horizontal">
      <MenuItem keyValue="mail">
        <template #icon>
          <SvgIcon name="mail" width="1em" height="1em" />
        </template>
        Navigation One
      </MenuItem>
      <MenuItem keyValue="app" :disabled="true">
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
      <MenuItem keyValue="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </MenuItem>
    </Menu>

    <!-- 纵向menu-->
    <Menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="column"
      @click="handleClick"
    >
      <SubMenu keyValue="sub1">
        <template #icon>
          <SvgIcon name="mail" width="1em" height="1em" />
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
        </SubMenu>
      </SubMenu>
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

const selectedKeys = ref<string[]>(['1'])
const openKeys = ref<string[]>(['sub1'])
const handleClick = (e) => {
  console.log('click', e)
}
</script>

<style lang="scss">
.ui-template-wrap {
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  gap: 200px;
}
</style>
