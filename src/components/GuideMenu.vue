<template>
  <section class="components-Menu scroll-container">
    <Menu
      v-model:selectedKeys="selectedKeys"
      mode="column"
      @change="onChange"
      style="border: none"
    >
      <SubMenu keyValue="sub1" :collapsible="false">
        <template #title><span style="font-weight: 600">介绍</span></template>
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
      <SubMenu keyValue="sub2" :collapsible="false">
        <template #title><span style="font-weight: 600">快速上手</span></template>
        <MenuItem
          v-for="item in sub2"
          :keyValue="item.keyValue"
          :key="item.keyValue"
          class="menuItem"
        >
          <router-link :to="`/guide/${item.keyValue}`" class="router-link">
            {{ item.title }}
          </router-link>
        </MenuItem>
      </SubMenu>
      <SubMenu keyValue="sub3" :collapsible="false">
        <template #title><span style="font-weight: 600">版本</span></template>
        <MenuItem
          v-for="item in sub3"
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
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Menu from '@/lib/menu/Menu.vue'
import MenuItem from '@/lib/menu/MenuItem.vue'
import SubMenu from '@/lib/menu/SubMenu.vue'

const selectedKeys = ref<string[]>([])
const route = useRoute()

const emit = defineEmits(['change'])
const onChange = () => {
  emit('change')
}
const componentsTitle: { [key: string]: { [s: string]: boolean } } = {
  sub1: {
    intro: true
  },
  sub2: {
    install: true,
    usage: true
  },
  sub3: {
    changelog: true
  }
}

const init = () => {
  const navArr = route.path.split('/')
  const componentName = navArr[navArr.length - 1]
  const s = Object.keys(componentsTitle)
  for (let i = 0; i < s.length; i++) {
    const name = s[i]
    if (componentsTitle[name][componentName]) {
      selectedKeys.value = [name, componentName]
    }
  }
}
onMounted(() => {
  init()
})
watch(
  () => route.path,
  () => {
    init()
  }
)

const sub1 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'intro',
    title: 'Hut UI'
  }
])
const sub2 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'install',
    title: '安装'
  },
  {
    keyValue: 'usage',
    title: '按需导入'
  }
])
const sub3 = reactive<{ keyValue: string; title: string }[]>([
  {
    keyValue: 'changelog',
    title: '变更日志'
  }
])
</script>

<style lang="scss" scoped>
.components-Menu {
  margin-top: 10px;
  display: inline-flex;
  flex-direction: column;
  flex-grow: 10;
  width: 248px;
  .menuItem {
    padding: 0 !important;
  }
  .router-link {
    display: block;
    padding-left: 48px;
    height: 100%;
    width: 100%;
    padding-right: 40px;
    background-color: transparent;
    transition: all 250ms;
    &.router-link-exact-active {
      border-right: 3px solid #1890ff;
    }
  }
}
</style>
