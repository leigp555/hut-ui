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
import Transfer, { MockData } from '@/lib/transfer/Transfer.vue'

// 模拟数据
const mockData: MockData[] = []
for (let i = 0; i < 20; i++) {
  mockData.push({
    label: `content${i + 1}`,
    value: `content${i + 1}`,
    description: `description of content${i + 1}`
  })
}

const sourceValue = ref<MockData[]>(mockData.filter((item, index) => index % 2 !== 0))
const selectedValue = ref<MockData[]>(mockData.filter((item, index) => index % 2 === 0))

const handleChange = (sourceArr: MockData, targetArr: MockData) => {
  console.log('sourceArr: ', sourceArr)
  console.log('targetArr: ', targetArr)
}
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
