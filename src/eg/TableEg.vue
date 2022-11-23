<template>
  <div class="ui-template-wrap">
    <Table :headSource="columns" :bodySource="data" :loading="loading">
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
            @change="current = $event"
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
import { ref } from 'vue'
import Table, { TableDataType } from '@/lib/table/Table.vue'
import Tag from '@/lib/tag/Tag.vue'
import Pagination from '@/lib/pagination/Pagination.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const current = ref<number>(1)
const pageSize = ref<number>(5)
const pageSizeOptions = ref<string[]>(['5', '10', '20', '30', '40'])
const dataNum = ref<number>(100)
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

const data: (
  | TableDataType
  | { name: string; age: number; address: string; tags: string[] }
)[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]
</script>

<style lang="scss">
.ui-template-wrap {
  padding: 50px;
}
</style>
