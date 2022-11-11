<template>
  <div class="ui-template-wrap">
    <TimePicker v-model:value="value" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import TimePicker from '@/lib/timePicker/TimePicker.vue'

const value = ref<string>('08:00:00')
</script>

<style lang="scss">
.ui-template-wrap {
  margin: 20px;
}
</style>
