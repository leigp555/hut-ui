<demo>
基本用法
</demo>

<template>
  <AutoComplete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    placeholder="input here"
    @select="onSelect"
    @search="onSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from '@/lib'

interface MockVal {
  value: string
}
const value = ref('')
const options = ref<MockVal[]>([])
const onSearch = (searchText: string) => {
  options.value = !searchText
    ? []
    : [
        { value: `${searchText}@qq.com` },
        { value: `${searchText}@google.com` },
        { value: `${searchText}@138.com` }
      ]
}
const onSelect = (text: string) => {
  console.log('onSelect', text)
}
</script>
