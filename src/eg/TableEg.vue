<template>
  <div class="ui-template-wrap">
    <Table :headSource="columns" :bodySource="data">
      <template #tableHead="item">
        <span style="color: red">{{ item.data }}</span>
      </template>
      <template #tableBody="item">
        <span style="color: #1890ff">{{ item.data }}</span>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import Table, { TableDataType } from '@/lib/table/Table.vue'

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
