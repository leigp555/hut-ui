<template>
  <ComponentContent title="Palette 排版" component-name="palette">
    <template #intro>
      <Intro />
    </template>
    <template #demo>
      <Demo />
    </template>
  </ComponentContent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentContent from '@/components/ComponentContent.vue'

import Intro from './Intro.vue'

import Demo from './demo/Demo.vue'

const wrap = ref<HTMLElement | null>(null)
</script>
