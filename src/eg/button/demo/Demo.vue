<template>
  <div class="demo-wrap">
    <!--    案例一-->
    <div class="demo-wrap-item" id="ex-template-demo1">
      <section class="item-display">
        <DemoOne />
      </section>
      <div class="sourceCode-display">
        <Preview :html="html1" />
      </div>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="ex-template-demo2">
      <section class="item-display">
        <DemoTwo />
      </section>
      <div class="sourceCode-display">
        <Preview :html="html2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DemoOne from './DemoOne.vue'
import DemoTwo from './DemoTwo.vue'
import { getSourceCode } from '@/eg/helper'
import Preview from '@/components/Preview.vue'
import { Button } from '@/lib/index'

const html1 = computed(() => {
  return getSourceCode(DemoOne.__sourceCode)
})
const html2 = computed(() => {
  return getSourceCode(DemoTwo.__sourceCode)
})
</script>

<style lang="scss" scoped>
.demo-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
  > .demo-wrap-item {
    gap: 20px;
    display: flex;
    flex-direction: column;
    > .item-display {
      padding: 42px 24px 50px;
      border: 1px solid #f0f0f0;
      border-radius: 2px;
    }
    > .sourceCode-display {
    }
  }
}
</style>
