<demo>
加载更多
</demo>

<template>
  <List mode="loadMore" :dataSource="data" :loading="loading">
    <ListItem>
      <template #avatar="item">
        <Avatar
          :size="32"
          :src="item.data.avatar"
          style="background-color: #ffffff; padding: 0"
        >
          <template #icon>
            <Icon_user name="user" width="2em" height="2em" />
          </template>
        </Avatar>
      </template>
      <template #title="item">
        <span>{{ item.data.title }}</span>
      </template>
      <template #description="item">
        <span>
          {{ item.data.description }}
        </span>
      </template>
      <template #actions="item">
        <Button type="link" @click="onEdit(item.data)">edit</Button>
        <Button type="link" @click="onMore(item.data)">more</Button>
      </template>
    </ListItem>
    <template #loadMore>
      <div>
        <Button type="default" @click="onLoadMore" v-show="!loading"
          >loading more</Button
        >
      </div>
    </template>
  </List>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon_user } from '@hut-ui/icons-vue'
import { ListItem, List, Avatar, Button, ListData } from '@/lib'

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

const onEdit = (item: ListData) => {
  console.log(item)
}
const onMore = (item: ListData) => {
  console.log(item)
}
// 加载更多
const onLoadMore = () => {
  fetch('/mock')
}
</script>
