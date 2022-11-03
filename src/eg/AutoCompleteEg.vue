<template>
  <div class="wrap">
    <AutoComplete
      v-model:value="value"
      :options="options"
      style="width: 200px"
      placeholder="input here"
      @select="onSelect"
      @search="onSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'
import AutoComplete from '@/lib/autoComplete/AutoComplete.vue'

withDefaults(defineProps<{}>(), {})

interface MockVal {
  value: string
}
const mockVal = (str: string, repeat = 1): MockVal => {
  return {
    value: str.repeat(repeat)
  }
}
const value = ref('')
const options = ref<MockVal[]>([])
const onSearch = (searchText: string) => {
  options.value = !searchText
    ? []
    : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
}
const onSelect = (text: string) => {
  console.log('onSelect', text)
}
</script>

<style lang="scss">
.wrap {
}
</style>
