<template>
  <DemoDisplay :demo-arr="demoArr" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getDemo } from '@/eg/helper'
import DemoDisplay from '@/components/DemoDisplay.vue'
import DemoOne from './DemoOne.vue'
import DemoTwo from './DemoTwo.vue'

const demoArr = computed(() => {
  return [DemoTwo, DemoOne].map((item, index) => {
    return getDemo(item, 'tree', index)
  })
})
</script>
