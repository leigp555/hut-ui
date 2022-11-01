<template>
  <label>
    <span>请输入间距:</span>
    <input class="input" type="text" v-model.number.lazy="size" />
  </label>

  <Space direction="column" size="50px">
    <Space direction="row" :size="size" justify-content="center" aline-items="center">
      <div class="item">xxx</div>
      <div class="item">yyy</div>
      <div class="item">zzz</div>
    </Space>
    <Space direction="column" :size="size" justify-content="start" aline-items="start">
      <div class="item">xxx</div>
      <div class="item">yyy</div>
      <div class="item">zzz</div>
    </Space>
  </Space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Space from '@/lib/space/Space.vue'

const size = ref<number>(20)
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.input {
  width: 100px;
}
.item {
  border: 1px solid black;
  padding: 10px;
}
</style>
