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
import DemoFive from './DemoFive.vue'
import DemoSix from './DemoSix.vue'
import DemoSeven from './DemoSeven.vue'
import DemoEight from './DemoEight.vue'
import DemoNine from './DemoNine.vue'

const demoArr = computed(() => {
  return [
    DemoOne,
    DemoTwo,
    DemoNine,
    DemoThree,
    DemoFour,
    DemoFive,
    DemoSix,
    DemoSeven,
    DemoEight
  ].map((item, index) => {
    return getDemo(item, 'input', index)
  })
})
</script>
