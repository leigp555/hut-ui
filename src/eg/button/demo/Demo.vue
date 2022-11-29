<template>
  <div class="demo-wrap">
    <div v-for="item in demoArr" :key="item.id" class="demo-wrap-item" :id="item.id">
      <section class="item-display-wrap">
        <Divider leftDistance="40px" position="normal">{{ item.title }}</Divider>
        <div class="item-display">
          <Component :is="item.demo" />
        </div>
        <div class="sourceCode-display">
          <Preview :html="item.html" />
        </div>
      </section>
    </div>
  </div>
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
import Preview from '@/components/Preview.vue'
import Divider from '@/lib/divider/Divider.vue'
import { getDemo } from '@/eg/helper'

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
