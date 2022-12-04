<template>
  <div class="ui-template-wrap">
    <Transfer
      v-model:source="sourceValue"
      v-model:selected="selectedValue"
      :titles="['Source', 'Target']"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer, TransferOptions } from '@/lib'

// 模拟数据
const mockData: TransferOptions[] = []
for (let i = 0; i < 20; i++) {
  mockData.push({
    label: `content${i + 1}`,
    value: `content${i + 1}`,
    checked: false,
    description: `description of content${i + 1}`
  })
}

const sourceValue = ref<TransferOptions[]>(
  mockData.filter((item, index) => index % 2 !== 0)
)
const selectedValue = ref<TransferOptions[]>(
  mockData.filter((item, index) => index % 2 === 0)
)

const handleChange = (sourceArr: TransferOptions, targetArr: TransferOptions) => {
  console.log('sourceArr: ', sourceArr)
  console.log('targetArr: ', targetArr)
}
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
