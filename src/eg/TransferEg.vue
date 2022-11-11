<template>
  <div class="ui-transfer-wrap">
    <Transfer
      v-model:sorce="sourceValue"
      v-model:selected="selectedValue"
      :titles="['Source', 'Target']"
      :render="(item) => item.title"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Transfer, { MockData } from '@/lib/transfer/Transfer.vue'

// 模拟数据
const mockData: MockData[] = []
for (let i = 0; i < 100; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: false
  })
}

const sourceValue = ref<MockData[]>(mockData.filter((item) => +item.key % 2 !== 0))

const selectedValue = ref<MockData[]>(mockData.filter((item) => +item.key % 2 === 0))

const handleChange = (sourceArr: MockData, targetArr: MockData) => {
  console.log('sourceArr: ', sourceArr)
  console.log('targetArr: ', targetArr)
}
</script>

<style lang="scss">
.ui-transfer-wrap {
}
</style>
