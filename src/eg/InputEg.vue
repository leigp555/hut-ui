<template>
  <div class="ui-template-wrap">
    <Input v-model:value="value" placeholder="Basic usage" />
    <Input v-model:value="value" placeholder="Basic usage">
      <template #prefix>
        <SvgIcon name="user" width="1em" height="1em" @click="iconClick" />
      </template>
      <template #suffix>
        <SvgIcon name="warning" width="1em" height="1em" />
      </template>
    </Input>
    <Input v-model:value="value" placeholder="Basic usage">
      <template #suffix_outer>
        <Button :style="{ marginLeft: '4px' }">search</Button>
      </template>
    </Input>
    <Input v-model:value="value" placeholder="Basic usage">
      <template #prefix_outer>
        <div class="xx">
          <SvgIcon name="search" width="1.5em" height="1.5em" />
        </div>
      </template>
      <template #suffix_outer>
        <Button :style="{ marginLeft: '4px' }">search</Button>
      </template>
    </Input>
    <Textarea
      v-model:value="value1"
      placeholder="Autosize height based on content lines"
      autoSize
    />
    <Textarea
      v-model:value="value2"
      placeholder="Autosize height based on content lines"
      :autoSize="{ minRows: 3, maxRows: 5 }"
    />
    <Textarea
      v-model:value="value2"
      placeholder="Autosize height based on content lines"
      resize
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/lib/input/Input.vue'
import Textarea from '@/lib/input/Textarea.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
import Button from '@/lib/button/Button.vue'

const value = ref<string>('')
const value1 = ref<string>('')
const value2 = ref<string>('')
const iconClick = () => {
  console.log('点击了')
}
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 400px;
}
.xx {
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #ff6060;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
</style>
