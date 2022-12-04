<demo>
示例一
</demo>

<template>
  <TreeSelect
    v-model:value="value"
    :treeData="treeData"
    placeholder="Please select"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect, TreeSelectOptions } from '@/lib'

const treeData: TreeSelectOptions[] = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0'
      }
    ]
  },
  {
    title: 'Node2',
    value: '0-1',

    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        children: [
          {
            title: 'Child Node10',
            value: '0-1-0'
          },
          {
            title: 'Child Node11',
            value: '0-1-1'
          },
          {
            title: 'Child Node12',
            value: '0-1-2'
          }
        ]
      },
      {
        title: 'Child Node4',
        value: '0-1-1'
      },
      {
        title: 'Child Node5',
        value: '0-1-2'
      }
    ]
  }
]

const value = ref<string>('')

const onChange = (select: string) => {
  console.log(select)
}
</script>
