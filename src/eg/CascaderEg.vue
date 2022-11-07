<template>
  <div class="wrap">
    <Cascader v-model:value="value" :options="options" placeholder="Please select" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Cascader, { CascaderOptions } from '@/lib/cascader/Cascader.vue'

const value = ref<string>('')

const options: CascaderOptions[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      },
      {
        value: 'suzhou',
        label: 'SuZhou',
        children: [
          {
            value: 'xishan',
            label: 'XiShan',
            children: [{ value: 'xxx', label: 'XXX' }]
          }
        ]
      }
    ]
  }
]
</script>

<style lang="scss">
.wrap {
}
</style>
