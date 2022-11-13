<template>
  <div class="ui-template-wrap">
    <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import Image from '@/lib/image/Image.vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
.ui-template-wrap {
  margin: 100px;
  width: 200px;
}
</style>
