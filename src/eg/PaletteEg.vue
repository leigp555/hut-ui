<template>
  <div class="ui-template-wrap">
    <Palette />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import Palette from '@/lib/palette/Palette.vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
.ui-template-wrap {
  padding: 50px;
}
</style>
