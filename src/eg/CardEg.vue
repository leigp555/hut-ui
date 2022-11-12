<template>
  <div class="ui-template-wrap">
    <Card title="Default size card" style="width: 300px">
      <template #extra>
        <a href="#">more</a>
      </template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </Card>

    <Card title="Default size card" style="width: 500px" :border="false">
      <template #extra>
        <a href="#">more</a>
      </template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/lib/card/Card.vue'
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
