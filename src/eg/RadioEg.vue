<template>
  <div class="ui-template-wrap">
    <div>
      <Radio v-model:checked="checked">Radio</Radio>
    </div>
    <div>
      <Radio v-model:checked="checked" disabled>Radio</Radio>
    </div>

    <RadioGroup v-model:value="value" name="test" @change="onChange">
      <Radio :value="1">Option A</Radio>
      <Radio :value="2">Option B</Radio>
      <Radio :value="3">Option C</Radio>
    </RadioGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Radio from '@/lib/radio/Radio.vue'
import RadioGroup from '@/lib/radio/RadioGroup.vue'

const checked = ref<boolean>(false)
const value = ref<number>(1)

const onChange = (current: number) => {
  console.log(current)
}
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
