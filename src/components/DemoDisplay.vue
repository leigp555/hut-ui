<template>
  <div class="demo-wrap">
    <div v-for="item in demoArr" :key="item.id" class="demo-wrap-item" :id="item.id">
      <section class="item-display-wrap">
        <Divider leftDistance="40px">{{ item.title }}</Divider>
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
import { VNode } from 'vue'
import Preview from '@/components/Preview.vue'
import { Divider } from '@/lib'

defineProps<{
  demoArr: {
    html: string
    title: string
    id: string
    demo: VNode & { __sourceCode: string; __sourceTitle: string }
  }[]
}>()
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
