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
import AutoComplete, { OptionType } from '@/lib/autoComplete/AutoComplete.vue'

withDefaults(defineProps<{}>(), {})

const value = ref('')
const options = ref<OptionType[]>([])
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

<style lang="scss">
.wrap {
}
</style>
