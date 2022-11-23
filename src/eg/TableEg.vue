<template>
  <div class="ui-template-wrap">
    <Table :headSource="columns" :bodySource="data">
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
    </Table>
  </div>
</template>

<script setup lang="ts">
import Table, { TableDataType } from '@/lib/table/Table.vue'
import Tag from '@/lib/tag/Tag.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

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
