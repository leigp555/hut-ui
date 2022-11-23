<template>
  <div class="ui-template-wrap">
    <List item-layout="horizontal" :dataSource="data">
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
    </List>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import List from '@/lib/list/List.vue'
import ListItem from '@/lib/list/ListItem.vue'
import Avatar from '@/lib/avatar/Avatar.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
import Button from '@/lib/button/Button.vue'

interface DataItem {
  title: string
  avatar: string
  description: string
}
const data = ref<DataItem[]>([])

let i = 0
while (i < 10) {
  data.value.push({
    title: `Ant Design Title ${data.value.length + 1}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team'
  })
  i++
}

const onEdit = (item: DataItem) => {
  console.log(item)
}
const onMore = (item: DataItem) => {
  console.log(item)
}
</script>

<style lang="scss">
.ui-template-wrap {
  margin: 50px;
  padding: 20px;
  border: 1px solid red;
}
</style>
