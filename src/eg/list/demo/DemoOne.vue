<demo>
基本用法
</demo>

<template>
  <List :skeleton-avatar="false" :dataSource="data" :loading="loading">
    <ListItem>
      <template #title="item">
        <span>{{ item.data.title }}</span>
      </template>
      <template #description="item">
        <span>
          {{ item.data.description }}
        </span>
      </template>
    </ListItem>
  </List>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ListItem, List, ListData } from '@/lib'

import { ajax } from '@/eg/ajax'

const loading = ref<boolean>(false)
const data = ref<ListData[]>([])
const current = ref<number>(1)
const pageSize = ref<number>(5)
const pageSizeOptions = ref<string[]>(['5', '10', '20', '30', '40'])

const fetch = (url: string, count: number = 3) => {
  if (url === '/mock') {
    loading.value = true
    ;(ajax(url, count, 0, 0) as Promise<ListData[]>)
      .then((res) => {
        data.value = [...data.value, ...res]
        loading.value = false
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  }
}
onMounted(() => {
  fetch('/mock')
})
</script>
