<demo>
基本用法
</demo>
<template>
  <Tree
    :options="treeData"
    @select="onSelect"
    v-model:selectedValues="selectedValues"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree, TreeOptions } from '@/lib'

const selectedValues = ref<string[]>([])
const treeData = ref<TreeOptions[]>([
  {
    title: '0-0',
    value: '0-0x',
    show: false,
    children: [
      {
        title: '0-0-0',
        value: '0-0-0x',
        show: false,
        children: [
          { title: '0-0-0-0', value: '0-0-0-0x', color: 'red' },
          { title: '0-0-0-1', value: '0-0-0-1x', color: 'red' },
          { title: '0-0-0-2', value: '0-0-0-2x', color: 'red' }
        ]
      },
      {
        title: '0-0-1',
        value: '0-0-1x',
        show: false,
        children: [
          { title: '0-0-1-0', value: '0-0-1-0x' },
          { title: '0-0-1-1', value: '0-0-1-1x' },
          { title: '0-0-1-2', value: '0-0-1-2x' }
        ]
      }
    ]
  },
  {
    title: '1-0',
    value: '1-0x',
    show: false,
    children: [
      {
        title: '1-0-0',
        value: '1-0-0x',
        show: false,
        children: [
          {
            title: '1-0-0-0',
            value: '1-0-0-0x',
            href: 'javascript:;',
            color: '#1890ff'
          },
          {
            title: '1-0-0-1',
            value: '1-0-0-1x',
            href: 'javascript:;',
            color: '#1890ff'
          },
          {
            title: '1-0-0-2',
            value: '1-0-0-2x',
            href: 'javascript:;',
            color: '#1890ff'
          }
        ]
      },
      {
        title: '1-0-1',
        value: '1-0-1x',
        show: false,
        children: [
          { title: '1-0-1-0', value: '1-0-1-0x' },
          { title: '1-0-1-1', value: '1-0-1-1x' },
          {
            title: '1-0-1-2',
            value: '1-0-1-2x',
            show: false,
            children: [
              {
                title: '3-0-0',
                value: '3-0-0x',
                show: false,
                children: [
                  { title: '3-0-0-0', value: '3-0-0-0x' },
                  { title: '3-0-0-1', value: '3-0-0-1x' },
                  { title: '3-0-0-2', value: '3-0-0-2x' }
                ]
              },
              {
                title: '3-0-1',
                value: '3-0-1x',
                show: false,
                children: [
                  { title: '3-0-1-0', value: '3-0-1-0x' },
                  { title: '3-0-1-1', value: '3-0-1-1x' },
                  { title: '3-0-1-2', value: '3-0-1-2x' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
])
const onSelect = (position: string) => {
  console.log(position)
}
</script>
