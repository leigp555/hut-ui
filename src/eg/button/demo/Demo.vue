<template>
  <div class="demo-wrap">
    <!--    案例一-->
    <div class="demo-wrap-item" id="button-demo1">
      <section class="item-display-wrap">
        <Divider leftDistance="40px" position="normal">{{ html1.title }}</Divider>
        <div class="item-display">
          <DemoOne />
        </div>
        <div class="sourceCode-display">
          <Preview :html="html1.html" />
        </div>
      </section>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="button-demo2">
      <section class="item-display-wrap">
        <Divider leftDistance="40px" position="normal">{{ html2.title }}</Divider>
        <div class="item-display">
          <DemoTwo />
        </div>
        <div class="sourceCode-display">
          <Preview :html="html2.html" />
        </div>
      </section>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="button-demo3">
      <section class="item-display-wrap">
        <Divider leftDistance="40px" position="normal">{{ html3.title }}</Divider>
        <div class="item-display">
          <DemoThree />
        </div>
        <div class="sourceCode-display">
          <Preview :html="html3.html" />
        </div>
      </section>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="button-demo4">
      <section class="item-display-wrap">
        <Divider leftDistance="40px" position="normal">{{ html4.title }}</Divider>
        <div class="item-display">
          <DemoFour />
        </div>
        <div class="sourceCode-display">
          <Preview :html="html4.html" />
        </div>
      </section>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="button-demo5">
      <section class="item-display-wrap">
        <Divider leftDistance="40px" position="normal">{{ html5.title }}</Divider>
        <div class="item-display">
          <DemoFive />
        </div>
        <div class="sourceCode-display">
          <Preview :html="html5.html" />
        </div>
      </section>
    </div>
    <!--    案例二-->
    <div class="demo-wrap-item" id="button-demo6">
      <section class="item-display-wrap">
        <Divider leftDistance="40px" position="normal">{{ html6.title }}</Divider>
        <div class="item-display">
          <DemoSix />
        </div>
        <div class="sourceCode-display">
          <Preview :html="html6.html" />
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
import Preview from '@/components/Preview.vue'
import Divider from '@/lib/divider/Divider.vue'

const html1 = computed<{ html: string; title: string }>(() => {
  return { html: DemoOne.__sourceCode, title: DemoOne.__sourceTitle }
})
const html2 = computed<{ html: string; title: string }>(() => {
  return { html: DemoTwo.__sourceCode, title: DemoTwo.__sourceTitle }
})
const html3 = computed<{ html: string; title: string }>(() => {
  return { html: DemoThree.__sourceCode, title: DemoThree.__sourceTitle }
})
const html4 = computed<{ html: string; title: string }>(() => {
  return { html: DemoFour.__sourceCode, title: DemoFour.__sourceTitle }
})
const html5 = computed<{ html: string; title: string }>(() => {
  return { html: DemoFive.__sourceCode, title: DemoFive.__sourceTitle }
})
const html6 = computed<{ html: string; title: string }>(() => {
  return { html: DemoSix.__sourceCode, title: DemoSix.__sourceTitle }
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
