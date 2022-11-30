<template>
  <DemoDisplay :demo-arr="demoArr" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DemoOne from './DemoOne.vue'
import DemoTwo from './DemoTwo.vue'
import DemoThree from './DemoThree.vue'
import DemoFour from './DemoFour.vue'
import DemoFive from './DemoFive.vue'
import DemoSix from './DemoSix.vue'
import DemoSeven from './DemoSeven.vue'
import { getDemo } from '@/eg/helper'
import DemoDisplay from '@/components/DemoDisplay.vue'

const demoArr = computed(() => {
  return [DemoOne, DemoTwo, DemoThree, DemoFour, DemoFive, DemoSix, DemoSeven].map(
    (item, index) => {
      return getDemo(item, 'button', index)
    }
  )
})
</script>

<style lang="scss" scoped>
.demo-wrap {
  display: flex;
  flex-direction: column;
  gap: 40px;
  > .demo-wrap-item {
    gap: 20px;
    display: flex;
    flex-direction: column;
    > .item-display-wrap {
      border: 1px solid #f0f0f0;
      border-radius: 2px;
      > .item-display {
        padding: 22px 24px 50px;
      }
      > .sourceCode-display {
      }
    }
  }
}
</style>
