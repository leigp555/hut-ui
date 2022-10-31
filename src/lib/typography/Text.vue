<template>
  <span
    class="ui-typography-text"
    :class="{
      'ui-keyboard': keyboard,
      'ui-marked': mark,
      'ui-strong': strong,
      'ui-code': code
    }"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

withDefaults(
  defineProps<{
    strong?: boolean
    code?: boolean
    keyboard?: boolean
    mark?: boolean
  }>(),
  {
    strong: false,
    code: false,
    keyboard: false,
    mark: false
  }
)
</script>

<style lang="scss">
.ui-typography-text {
  display: inline-flex;
  gap: 5px;
  &.ui-keyboard {
    line-height: 1em;
    padding: 2px 5px;
    background-color: rgba(100, 100, 100, 0.1);
    border: 1px solid rgba(100, 100, 100, 0.5);
    font-size: 0.9em;
    border-radius: 2px;
    margin: 0 0.2em;
  }
  &.ui-marked {
    background-color: orange;
    padding: 2px 5px;
    text-align: center;
    font-size: 14px;
  }
  &.ui-strong {
    font-weight: 700;
  }
  &.ui-code {
    display: inline-block;
    padding: 0.1em 0.4em;
    font-size: 14px;
    margin: 0 0.2em;
    border-radius: 2px;
    border: 1px solid rgba(100, 100, 100, 0.2);
    color: white;
    background-color: #02101f;
  }
}
</style>
