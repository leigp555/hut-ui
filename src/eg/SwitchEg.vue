<template>
  <div class="ui-template-wrap">
    <Switch v-model:checked="checked" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/lib/switch/Switch.vue'

const checked = ref<boolean>(false)
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
