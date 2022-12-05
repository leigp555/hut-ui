<demo>
复杂的错误反馈。
</demo>

<template>
  <Result status="error">
    <template #title> Submission Failed </template>
    <template #subTitle>
      Please check and modify the following information before resubmitting.</template
    >
    <template #extra>
      <Button type="primary">Go Console</Button>
      <Button>Buy Again</Button>
    </template>
    <template #desc>
      <div class="desc">
        <p style="font-size: 16px">
          <strong>The content you submitted has the following error:</strong>
        </p>
        <p>
          <SvgIcon name="cha" width="14px" height="14px" fill="red" />
          Your account has been frozen
          <a>Thaw immediately &gt;</a>
        </p>
        <p>
          <SvgIcon name="cha" width="12px" height="12px" fill="red" />
          Your account is not yet eligible to apply
          <a>Apply Unlock &gt;</a>
        </p>
      </div>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button, SvgIcon } from '@/lib'
</script>
