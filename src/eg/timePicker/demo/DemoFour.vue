<demo>
文字标记
</demo>
<template>
  <div class="wrap">
    <Text strong
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea
      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa
      cupiditate dolor laudantium perferendis reiciendis?</Text
    >
    <Text code
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea
      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa
      cupiditate dolor laudantium perferendis reiciendis?</Text
    >
    <Text keyboard
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea
      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa
      cupiditate dolor laudantium perferendis reiciendis?</Text
    >
    <Text mark
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, assumenda ea
      ex, illo ipsam ipsum mollitia non nostrum nulla odio quas qui quia quos. Culpa
      cupiditate dolor laudantium perferendis reiciendis?</Text
    >
  </div>
</template>

<script setup lang="ts">
import { Text } from '@/lib'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
</style>
