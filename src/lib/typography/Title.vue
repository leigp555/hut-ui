<template>
  <div class="ui-typography-title" :class="`level${level}`"><slot /></div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(
  defineProps<{ level?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6' }>(),
  {
    level: 4
  }
)
</script>

<style lang="scss">
.ui-typography-title {
  font-weight: bold;
  color: #262626;
  margin-bottom: 19px;
  &.level1 {
    font-size: 2em;
  }
  &.level2 {
    font-size: 1.5em;
  }
  &.level3 {
    font-size: 1.17em;
  }
  &.level4 {
    font-size: 1em;
  }
  &.level5 {
    font-size: 0.83em;
  }
  &.level6 {
    font-size: 0.75em;
  }
}
</style>
