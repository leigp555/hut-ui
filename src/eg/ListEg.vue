<template>
  <div class="ui-template-wrap">
    <List :dataSource="data" :loading="loading">
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
      </ListItem>
    </List>
    <List :dataSource="data" :loading="loading">
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
      <template #loadMore>
        <Button type="default" @click="onLoadMore" v-show="!loading"
          >loading more</Button
        >
      </template>
    </List>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import List from '@/lib/list/List.vue'
import ListItem from '@/lib/list/ListItem.vue'
import Avatar from '@/lib/avatar/Avatar.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
import Button from '@/lib/button/Button.vue'
import { ajax } from '@/eg/ajax'

interface DataItem {
  title: string
  avatar: string
  description: string
}
const data = ref<DataItem[]>([])
const loading = ref<boolean>(false)

const fetch = () => {
  loading.value = true
  ;(ajax('/mock', 3) as Promise<DataItem[]>)
    .then((res) => {
      data.value = [...data.value, ...res]
      loading.value = false
    })
    .catch((err) => {
      console.log(err)
      loading.value = false
    })
}
onMounted(() => {
  fetch()
})

const onEdit = (item: DataItem) => {
  console.log(item)
}
const onMore = (item: DataItem) => {
  console.log(item)
}
const onLoadMore = () => {
  fetch()
}
</script>

<style lang="scss">
.ui-template-wrap {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
