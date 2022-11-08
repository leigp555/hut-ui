<template>
  <div class="ui-template-wrap">
    <Checkbox v-model:checked="checked">Checkbox</Checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Checkbox from '@/lib/checkbox/Checkbox.vue'

const checked = ref(true)
watchEffect(() => {
  console.log(checked.value)
})
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
