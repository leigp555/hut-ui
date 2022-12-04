<demo>
输入框外前后添加元素
</demo>

<template>
  <Input v-model:value="value" placeholder="Basic usage">
    <template #prefix_outer>
      <div class="prefix">
        <SvgIcon name="search" width="1.5em" height="1.5em" />
      </div>
    </template>
    <template #suffix_outer>
      <Button :style="{ marginLeft: '4px' }">search</Button>
    </template>
  </Input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input, Button, SvgIcon } from '@/lib'

const value = ref<string>('')
</script>

<style scoped lang="scss">
.prefix {
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: #67c23a;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
</style>
