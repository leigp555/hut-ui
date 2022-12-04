<demo>
基本用法
</demo>

<template>
  <Collapse v-model:activeKey="activeKey" accordion>
    <Panel keyValue="1" header="This is panel header 1">
      <p>{{ text }}</p>
    </Panel>
    <Panel keyValue="2" header="This is panel header 2">
      <p>{{ text }}</p>
    </Panel>
    <Panel keyValue="3" header="This is panel header 3">
      <p>{{ text }}</p>
    </Panel>
    <Panel keyValue="4" header="This is panel header 4">
      <p>{{ text }}</p>
    </Panel>
    <Panel keyValue="5" header="This is panel header 5">
      <p>{{ text }}</p>
    </Panel>
    <Panel keyValue="6" header="This is panel header 6" disabled>
      <p>{{ text }}</p>
    </Panel>
  </Collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, Panel } from '@/lib'

const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`
const activeKey = ref<string[]>([])
</script>
