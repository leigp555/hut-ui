<template>
  <div class="ui-template-wrap">
    <Rate v-model:value="value" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Rate from '@/lib/rate/Rate.vue'

const value = ref<number>(2)
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
