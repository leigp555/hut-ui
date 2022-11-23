<template>
  <div class="ui-template-wrap">
    <Table :headSource="columns" :bodySource="data" :loading="loading">
      <template #head>Header</template>
      <template #footer>Footer</template>
      <template #tableHead="item">
        <span v-if="item.keyValue === 'name'" style="color: red">
          <SvgIcon name="weixin" width="1em " height="1em" style="margin-right: 4px" />
          {{ item.data }}
        </span>
        <span v-else>{{ item.data }}</span>
      </template>
      <template #tableBody="item">
        <span v-if="item.keyValue === 'tags'">
          <Tag color="blue" v-for="i in item.data" :key="i">
            {{ i.toUpperCase() }}
          </Tag>
        </span>
        <span v-else style="color: #1890ff">{{ item.data }}</span>
      </template>
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
            @change="pageChange"
          >
            <template #buildOptionText="props">
              <span>{{ props.value }}条/页</span>
            </template>
          </Pagination>
        </div>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Table, { TableDataType } from '@/lib/table/Table.vue'
import Tag from '@/lib/tag/Tag.vue'
import Pagination from '@/lib/pagination/Pagination.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
import { ajax } from '@/eg/ajax'

const current = ref<number>(1)
const pageSize = ref<number>(5)
const pageSizeOptions = ref<string[]>(['5', '10', '20', '30', '40'])
const dataNum = ref<number>(0)
const loading = ref<boolean>(false)

const columns: TableDataType[] = [
  {
    label: 'Name',
    key: 'name'
  },
  {
    label: 'Age',
    key: 'age'
  },
  {
    label: 'Address',
    key: 'address'
  },
  {
    label: 'Tags',
    key: 'tags'
  }
]
const data = ref<TableDataType[]>([])

const fetch = (url: string) => {
  if (url === '/table') {
    loading.value = true
    ;(
      ajax(url, 0, current.value, pageSize.value) as Promise<{
        data: TableDataType[]
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
  fetch('/table')
})
const pageChange = (newPage: number) => {
  current.value = newPage
  fetch('/table')
}
</script>

<style lang="scss">
.ui-template-wrap {
  padding: 50px;
}
</style>
