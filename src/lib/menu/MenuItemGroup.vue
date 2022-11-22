<template>
  <div class="ui-menuGroup-wrap">
    <div class="ui-menuGroup-title">
      {{ title }}
    </div>
    <ul class="ui-menuGroup-content">
      <li v-for="item in slots" :key="item" class="ui-menuGroup-item">
        <Component :is="item" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, useSlots } from 'vue'

withDefaults(defineProps<{ title: string }>(), {})

const slots = useSlots().default()
</script>

<style lang="scss">
.ui-menuGroup-wrap {
  > .ui-menuGroup-title {
    padding: 8px 16px;
    color: #00000073;
    font-size: 14px;
    line-height: 1.5715;
  }
  > .ui-menuGroup-content {
    list-style: none;
    > .ui-menuGroup-item {
      margin-bottom: 8px;
      padding: 0 16px 0 28px;
      height: 40px;
      margin-top: 4px;
      overflow: hidden;
      line-height: 40px;
      text-overflow: ellipsis;
      background-color: red;
    }
  }
}
</style>
