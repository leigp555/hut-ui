<template>
  <div class="ui-template-wrap">
    <Select
      v-model:value="value"
      :options="options"
      :style="{ width: '150px' }"
      @change="onchange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Select, { OptionType } from '@/lib/select/Select.vue'

const value = ref<string>('a')
const options = ref<OptionType[]>([
  { value: 'a' },
  { value: 'b' },
  { value: 'c' },
  { value: 'd' },
  { value: 'e' },
  { value: 'f' },
  { value: 'g' },
  { value: 'h' },
  { value: 'i' },
  { value: 'j' },
  { value: 'k' },
  { value: 'l' },
  { value: 'm' },
  { value: 'n' },
  { value: 'o' }
])
const onchange = (content: string) => {
  console.log(content)
}
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
