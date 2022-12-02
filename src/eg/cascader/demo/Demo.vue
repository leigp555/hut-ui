<template>
  <DemoDisplay :demo-arr="demoArr" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getDemo } from '@/eg/helper'
import DemoDisplay from '@/components/DemoDisplay.vue'
import DemoOne from './DemoOne.vue'
import DemoTwo from './DemoTwo.vue'
import DemoThree from './DemoThree.vue'
import DemoFour from './DemoFour.vue'

const demoArr = computed(() => {
  return [DemoOne, DemoTwo, DemoThree, DemoFour].map((item, index) => {
    return getDemo(item, 'cascader', index)
  })
})
</script>
