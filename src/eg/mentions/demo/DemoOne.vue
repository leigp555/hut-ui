<demo>
基本用法
</demo>

<template>
  <Mentions v-model:value="value" :options="options" @select="onSelect" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mentions, MentionsOptions } from '@/lib'

const value = ref<string>('')
const options: MentionsOptions[] = [
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

const onSelect = (option: MentionsOptions) => {
  console.log('select', option)
}
</script>
