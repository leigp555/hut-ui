<template>
  <div class="ui-template-wrap">
    <TreeSelect
      v-model:value="value"
      :treeData="treeData"
      placeholder="Please select"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TreeSelect, { TreeSelectOptions } from '@/lib/treeSelect/TreeSelect.vue'

const treeData: TreeSelectOptions = [
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
        disabled: true
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

watch(value, () => {
  console.log(value.value)
})
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
