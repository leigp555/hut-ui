<demo>
基本用法
</demo>

<template>
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
        <Icon_wechat
          name="weixin"
          width="1em "
          height="1em"
          style="margin-right: 4px"
        />
        {{ item.dataValue }}
      </span>
      <span v-else>{{ item.dataValue }}</span>
    </template>
    <template #tableBody="item">
      <div v-if="item.keyValue === 'tags'" class="tags">
        <Tag :color="randomColor()" v-for="i in item.dataValue" :key="i">
          {{ i.toUpperCase() }}
        </Tag>
      </div>
      <div v-else-if="item.keyValue === 'actions'" class="actions">
        <div>
          <Popconfirm
            placement="topCenter"
            okText="Yes"
            cancelText="No"
            @confirm="confirm(item.data)"
          >
            <template #title>
              <p>{{ text }}</p>
            </template>
            <Button type="link" style="padding: 4px 8px">delete</Button>
          </Popconfirm>
        </div>
      </div>
      <span v-else style="color: #1890ff">{{ item.dataValue }}</span>
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
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon_wechat } from '@hut-ui/icons-vue'
import { Table, Pagination, Popconfirm, Tag, Button, TableDataType } from '@/lib'
import { ajax } from '@/eg/ajax'
import { randomColor } from '@/eg/helper'

const current = ref<number>(1)
const pageSize = ref<number>(5)
const pageSizeOptions = ref<string[]>(['5', '10', '20', '30', '40'])
const dataNum = ref<number>(0)
const loading = ref<boolean>(false)

const sharedOnCell = (rowIndex: number): { colspan: number } => {
  if (rowIndex === 5) {
    return { colspan: 0 }
  }
  return { colspan: 1 }
}
const columns = ref<TableDataType[]>([
  {
    rowIndex: 0,
    label: 'Name',
    key: 'name',
    customCell: (rowIndex) => ({
      colspan: rowIndex === 5 ? 6 : 1
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
    customCell: () => ({ colspan: 1 })
  }
])

const data = ref<TableDataType[]>([])

const fetch = {
  get(url: string) {
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
  },
  delete(url: string, payload: string) {
    if (url === '/table') {
      loading.value = true
      ;(
        ajax(url, 0, current.value, pageSize.value, payload, 'delete') as Promise<{
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
}
onMounted(() => {
  fetch.get('/table')
})
const pageChange = (newPage: number) => {
  current.value = newPage
  fetch.get('/table')
}

const text = 'Sure to delete?'

const confirm = (item: TableDataType) => {
  // 删除操作前应把原先的表格合并操作先复原，不然后续的表格格式会错乱
  if (item.rowIndex === 2) {
    columns.value[2].customCell = (rowIndex) => {
      if (rowIndex === 3) {
        return { colspan: 1, rowspan: 1 }
      }
      if (rowIndex === 5) {
        return { colspan: 0 }
      }
      return { colspan: 1 }
    }
  } else if (item.rowIndex === 3) {
    columns.value[2].customCell = (rowIndex) => {
      if (rowIndex === 2) {
        return { rowspan: 1 }
      }

      if (rowIndex === 5) {
        return { colspan: 0 }
      }
      return { colspan: 1 }
    }
  }
  // 发送删除请求
  fetch.delete('/table', JSON.stringify(item))
}
</script>

<style scoped lang="scss">
.actions,
.tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
