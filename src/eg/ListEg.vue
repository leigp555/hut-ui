<template>
  <div class="ui-template-wrap">
    <List :skeleton-avatar="false" :dataSource="data1" :loading="loading1">
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
    <List mode="loadMore" :dataSource="data2" :loading="loading2">
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
        <div>
          <Button type="default" @click="onLoadMore" v-show="!loading2"
            >loading more</Button
          >
        </div>
      </template>
    </List>

    <List mode="pagination" :dataSource="data3" :loading="loading3">
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
            :disabled="loading3"
            :pageSizeOptions="pageSizeOptions"
            showQuickJumper
            showSizeChanger
            showTotal
            @change="current = $event"
          >
            <template #buildOptionText="props">
              <span>{{ props.value }}条/页</span>
            </template>
          </Pagination>
        </div>
      </template>
    </List>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref, watch } from 'vue'
import List, { DataItem } from '@/lib/list/List.vue'
import ListItem from '@/lib/list/ListItem.vue'
import Avatar from '@/lib/avatar/Avatar.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
import Button from '@/lib/button/Button.vue'
import Pagination from '@/lib/pagination/Pagination.vue'
import { ajax } from '@/eg/ajax'

const data1 = ref<DataItem[]>([])
const data2 = ref<DataItem[]>([])
const data3 = ref<DataItem[]>([])
const loading1 = ref<boolean>(false)
const loading2 = ref<boolean>(false)
const loading3 = ref<boolean>(false)

const current = ref<number>(1)
const pageSize = ref<number>(5)
const pageSizeOptions = ref<string[]>(['5', '10', '20', '30', '40'])
const dataNum = ref<number>(0)

const fetch = (
  url: string,
  dataArr: Ref<DataItem[]>,
  loading: Ref<boolean>,
  count: number = 3
) => {
  if (url === '/mock') {
    loading.value = true
    ;(ajax(url, count) as Promise<DataItem[]>)
      .then((res) => {
        dataArr.value = [...dataArr.value, ...res]
        loading.value = false
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  } else if (url === '/pagination') {
    loading.value = true
    ;(
      ajax(url, count, current.value, pageSize.value) as Promise<{
        data: DataItem[]
        totalDateNum: number
      }>
    )
      .then((res) => {
        dataArr.value = [...res.data]
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
  fetch('/mock', data1, loading1)
  fetch('/mock', data2, loading2)
  fetch('/pagination', data3, loading3, 0)
})

const onEdit = (item: DataItem) => {
  console.log(item)
}
const onMore = (item: DataItem) => {
  console.log(item)
}
// 加载更多
const onLoadMore = () => {
  fetch('/mock', data2, loading2)
}
// 页码变动时发一次请求
watch(current, () => {
  fetch('/pagination', data3, loading3, 0)
})
</script>

<style lang="scss">
.ui-template-wrap {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
