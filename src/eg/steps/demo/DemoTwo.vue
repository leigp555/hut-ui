<demo>
自定义icon
</demo>
<template>
  <div class="wrap">
    <Steps :current="current" :totalStep="3">
      <Step title="First-content" :order="1">
        <template #icon>
          <SvgIcon name="weixin" width="1em" height="1em" />
        </template>
      </Step>
      <Step title="First-content" :order="2">
        <template #icon>
          <SvgIcon name="email" width="1em" height="1em" />
        </template>
      </Step>
      <Step title="First-content" :order="3">
        <template #icon>
          <SvgIcon name="setting" width="1em" height="1em" />
        </template>
      </Step>
    </Steps>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Steps, Step, SvgIcon } from '@/lib'

const current = ref<number>(1)
</script>

<style lang="scss">
.wrap {
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
}
</style>
