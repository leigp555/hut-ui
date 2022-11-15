<template>
  <div class="ui-template-wrap">
    <Tree :options="treeData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tree, { TreeOptions } from '@/lib/tree/Tree.vue'

const treeData = ref<TreeOptions[]>([
  {
    title: '0-0',
    value: '0-0',
    show: false,
    children: [
      {
        title: '0-0-0',
        value: '0-0-0',
        show: false,
        children: [
          { title: '0-0-0-0', value: '0-0-0-0' },
          { title: '0-0-0-1', value: '0-0-0-1' },
          { title: '0-0-0-2', value: '0-0-0-2' }
        ]
      },
      {
        title: '0-0-1',
        value: '0-0-1',
        show: false,
        children: [
          { title: '0-0-1-0', value: '0-0-1-0' },
          { title: '0-0-1-1', value: '0-0-1-1' },
          { title: '0-0-1-2', value: '0-0-1-2' }
        ]
      }
    ]
  },
  {
    title: '1-0',
    value: '1-0',
    show: false,
    children: [
      {
        title: '1-0-0',
        value: '1-0-0',
        show: false,
        children: [
          { title: '1-0-0-0', value: '1-0-0-0' },
          { title: '1-0-0-1', value: '1-0-0-1' },
          { title: '1-0-0-2', value: '1-0-0-2' }
        ]
      },
      {
        title: '1-0-1',
        value: '1-0-1',
        show: false,
        children: [
          { title: '1-0-1-0', value: '1-0-1-0' },
          { title: '1-0-1-1', value: '1-0-1-1' },
          {
            title: '1-0-1-2',
            value: '1-0-1-2',
            show: false,
            children: [
              {
                title: '3-0-0',
                value: '3-0-0',
                show: false,
                children: [
                  { title: '3-0-0-0', value: '3-0-0-0' },
                  { title: '3-0-0-1', value: '3-0-0-1' },
                  { title: '3-0-0-2', value: '3-0-0-2' }
                ]
              },
              {
                title: '3-0-1',
                value: '3-0-1',
                show: false,
                children: [
                  { title: '3-0-1-0', value: '3-0-1-0' },
                  { title: '3-0-1-1', value: '3-0-1-1' },
                  { title: '3-0-1-2', value: '3-0-1-2' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
])
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
