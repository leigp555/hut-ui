<template>
  <ol class="ui-list-wrap">
    <li class="ui-list-item" v-for="item in dataSource" :key="item">
      <Component :is="slots[0]" :data="item" />
    </li>
  </ol>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots } from 'vue'

withDefaults(defineProps<{ dataSource: [] }>(), {})

const slots = useSlots().default()
</script>

<style lang="scss">
.ui-list-wrap {
  display: flex;
  flex-direction: column;
  list-style: none;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5em;
  > .ui-list-item {
    border-bottom: 1px solid #f0f0f0;
    flex-grow: 10;
    padding: 12px 0;
  }
}
</style>
