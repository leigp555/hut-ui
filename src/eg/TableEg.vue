<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Table from '@/lib/table/Table.vue'
import Tag from '@/lib/tag/Tag.vue'
import Pagination from '@/lib/pagination/Pagination.vue'
import Button from '@/lib/button/Button.vue'
import Popconfirm from '@/lib/popconfirm/Popconfirm.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
import { ajax } from '@/eg/ajax'
import { TableDataType } from '@/lib/list/Type'

const current = ref<number>(1)
const pageSize = ref<number>(5)
const pageSizeOptions = ref<string[]>(['5', '10', '20', '30', '40'])
const dataNum = ref<number>(0)
const loading = ref<boolean>(false)

const sharedOnCell = (rowIndex): { colSpan: number } => {
  if (rowIndex === 5) {
    return { colspan: 0 }
  }
  return { colspan: 1 }
}

const columns: TableDataType[] = [
  {
    rowIndex: 0,
    label: 'Name',
    key: 'name',
    customCell: (rowIndex) => ({
      colspan: rowIndex === 5 ? 7 : 1
    })
  },
  {
    rowIndex: 0,
    label: 'Age',
    key: 'age',
    customCell: sharedOnCell
  },
  {
    rowIndex: 0,
    label: 'Home phone',
    colspan: 2,
    key: 'tel',
    // eslint-disable-next-line consistent-return
    customCell: (rowIndex) => {
      if (rowIndex === 2) {
        return { rowspan: 2 }
      }
      if (rowIndex === 3) {
        return { rowspan: 0 }
      }
      if (rowIndex === 5) {
        return { colspan: 0 }
      }
      return { colspan: 1 }
    }
  },
  {
    rowIndex: 0,
    label: 'Phone',
    colspan: 0,
    key: 'phone',
    customCell: sharedOnCell
  },
  {
    rowIndex: 0,
    label: 'Address',
    key: 'address',
    customCell: sharedOnCell
  },
  {
    rowIndex: 0,
    label: 'tags',
    key: 'tags',
    customCell: sharedOnCell
  },
  {
    rowIndex: 0,
    label: 'Actions',
    key: 'actions',
    customCell: sharedOnCell
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

const text = 'Sure to delete?'

const confirm = () => {
  console.log('confirm')
}
const cancel = () => {
  console.log('cancel')
}
</script>

<template>
  <div class="ui-template-wrap">
    <Table
      :headSource="columns"
      :bodySource="data"
      :loading="loading"
      style-mode="auto"
      bordered
    >
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
        <div v-if="item.keyValue === 'tags'" class="tags">
          <Tag color="green" v-for="i in item.data" :key="i">
            {{ i.toUpperCase() }}
          </Tag>
        </div>
        <div v-else-if="item.keyValue === 'actions'" class="actions">
          <Button type="link" style="padding: 4px 8px">modify</Button>
          <div>
            <Popconfirm
              placement="topCenter"
              okText="Yes"
              cancelText="No"
              @confirm="confirm"
              @cancel="cancel"
            >
              <template #title>
                <p>{{ text }}</p>
              </template>
              <Button type="link" style="padding: 4px 8px">delete</Button>
            </Popconfirm>
          </div>
        </div>
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

<style lang="scss">
.ui-template-wrap {
  padding: 50px;
  .actions,
  .tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
