<demo>
分页加载
</demo>

<template>
  <List mode="pagination" :dataSource="data" :loading="loading">
    <ListItem>
      <template #avatar="item">
        <Avatar
          :size="32"
          :src="item.data.avatar"
          style="background-color: #ffffff; padding: 0"
        >
          <template #icon>
            <SvgIcon name="user" width="2em" height="2em" />
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
    <template #pagination>
      <div style="display: flex; justify-content: center; margin-top: 50px">
        <Pagination
          v-model:current="current"
          :total="dataNum"
          v-model:pageSize="pageSize"
          @pageSizeChange="pageSize = $event"
          :disabled="loading"
          :pageSizeOptions="pageSizeOptions"
          showQuickJumper
          showSizeChanger
          showTotal
          @change="onChange"
        >
          <template #buildOptionText="props">
            <span>{{ props.value }}条/页</span>
          </template>
        </Pagination>
      </div>
    </template>
  </List>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ListItem, List, Avatar, SvgIcon, Button, Pagination, ListData } from '@/lib'

import { ajax } from '@/eg/ajax'

const loading = ref<boolean>(false)
const data = ref<ListData[]>([])
const current = ref<number>(1)
const pageSize = ref<number>(5)
const pageSizeOptions = ref<string[]>(['5', '10', '20', '30', '40'])
const dataNum = ref<number>(0)

const fetch = (url: string, count: number = 3) => {
  if (url === '/pagination') {
    loading.value = true
    ;(
      ajax(url, count, current.value, pageSize.value) as Promise<{
        data: ListData[]
        totalDateNum: number
      }>
    )
      .then((res) => {
        data.value = [...res.data]
        dataNum.value = res.totalDateNum
        loading.value = false
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  }
}
onMounted(() => {
  fetch('/pagination')
})

const onEdit = (item: ListData) => {
  console.log(item)
}
const onMore = (item: ListData) => {
  console.log(item)
}

// 页码变动时发一次请求
const onChange = (newPageNum: number) => {
  current.value = newPageNum
  fetch('/pagination')
}
</script>
