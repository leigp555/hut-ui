<template>
  <th class="ui-desItemColumn-title" :colspan="labelSpan">{{ label }}</th>
  <td class="ui-desItemColumn-content" :colspan="contentSpan"><slot /></td>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(
  defineProps<{ label?: string; contentSpan?: number; labelSpan?: number }>(),
  {}
)
</script>

<style lang="scss">
.ui-desItemColumn-title {
  padding: 8px 12px;
  font-weight: 600;
  line-height: 1.5em;
  text-align: start;
  background-color: #ddeeff;
}
.ui-desItemColumn-content {
  padding: 8px 12px;
  display: table-cell;
  flex: 1;
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>
