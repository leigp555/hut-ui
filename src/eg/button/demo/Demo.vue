<template>
  <div class="demo-wrap">
    <!--    案例一-->
    <div class="demo-wrap-item" id="button-demo1">
      <section class="item-display">
        <Divider position="center">{{ html1.title }}</Divider>
        <DemoOne />
      </section>
      <div class="sourceCode-display">
        <Preview :html="html1.html" />
      </div>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="button-demo2">
      <section class="item-display">
        <Divider position="center">{{ html2.title }}</Divider>
        <DemoTwo />
      </section>
      <div class="sourceCode-display">
        <Preview :html="html2.html" />
      </div>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="button-demo3">
      <section class="item-display">
        <Divider position="center">{{ html3.title }}</Divider>
        <DemoThree />
      </section>
      <div class="sourceCode-display">
        <Preview :html="html3.html" />
      </div>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="button-demo4">
      <section class="item-display">
        <Divider position="center">{{ html4.title }}</Divider>
        <DemoFour />
      </section>
      <div class="sourceCode-display">
        <Preview :html="html4.html" />
      </div>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="button-demo5">
      <section class="item-display">
        <Divider position="center">{{ html5.title }}</Divider>
        <DemoFive />
      </section>
      <div class="sourceCode-display">
        <Preview :html="html5.html" />
      </div>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="button-demo6">
      <section class="item-display">
        <Divider position="center">{{ html6.title }}</Divider>
        <DemoSix />
      </section>
      <div class="sourceCode-display">
        <Preview :html="html6.html" />
      </div>
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
import { getSourceCode } from '@/eg/helper'
import Preview from '@/components/Preview.vue'
import Divider from '@/lib/divider/Divider.vue'

const html1 = computed<{ html: string; title: string }>(() => {
  return { html: getSourceCode(DemoOne.__sourceCode), title: DemoOne.__sourceTitle }
})
const html2 = computed<{ html: string; title: string }>(() => {
  return { html: getSourceCode(DemoTwo.__sourceCode), title: DemoTwo.__sourceTitle }
})
const html3 = computed<{ html: string; title: string }>(() => {
  return { html: getSourceCode(DemoThree.__sourceCode), title: DemoThree.__sourceTitle }
})
const html4 = computed<{ html: string; title: string }>(() => {
  return { html: getSourceCode(DemoFour.__sourceCode), title: DemoFour.__sourceTitle }
})
const html5 = computed<{ html: string; title: string }>(() => {
  return { html: getSourceCode(DemoFive.__sourceCode), title: DemoFive.__sourceTitle }
})
const html6 = computed<{ html: string; title: string }>(() => {
  return { html: getSourceCode(DemoSix.__sourceCode), title: DemoSix.__sourceTitle }
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
      padding: 22px 24px 50px;
      border: 1px solid #f0f0f0;
      border-radius: 2px;
    }
    > .sourceCode-display {
    }
  }
}
</style>
