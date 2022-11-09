<template>
  <div class="ui-template-wrap">
    <Mentions v-model:value="value" :options="options" autofocus @select="onSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Mentions, { Options } from '@/lib/mentions/Mentions.vue'

const value = ref<string>('')
const options: Options[] = [
  {
    label: 'afc163',
    value: 'afc163'
  },
  {
    label: 'zombieJ',
    value: 'zombieJ'
  },
  {
    label: 'yesmeck',
    value: 'yesmeck'
  }
]

const onSelect = (option: Options) => {
  console.log('select', option)
}
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
