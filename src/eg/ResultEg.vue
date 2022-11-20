<template>
  <div class="ui-template-wrap">
    <Result status="success">
      <template #title> Successfully Purchased Cloud Server ECS! </template>
      <template #subTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur
        dolore eum ex ipsum optio, qui voluptatum. Aliquid consectetur deserunt
        distinctio doloremque est, harum itaque nam odio quibusdam recusandae sapiente.
      </template>
      <template #extra>
        <Button key="console" type="primary">Go Console</Button>
        <Button key="buy">Buy Again</Button>
      </template>
    </Result>

    <Result status="info">
      <template #title> Successfully Purchased Cloud Server ECS! </template>
      <template #extra>
        <Button key="console" type="primary">Go Console</Button>
      </template>
    </Result>

    <Result status="warning">
      <template #title> Successfully Purchased Cloud Server ECS! </template>
      <template #extra>
        <Button key="console" type="primary">Go Console</Button>
      </template>
    </Result>
    <Result status="error">
      <template #title> Successfully Purchased Cloud Server ECS! </template>
      <template #extra>
        <Button key="console" type="primary">Go Console</Button>
      </template>
    </Result>

    <Result>
      <template #icon>
        <SvgIcon name="notFound" width="250px" height="300px" />
      </template>
      <template #title> Successfully Purchased Cloud Server ECS! </template>
      <template #extra>
        <Button key="console" type="primary">Go Home</Button>
      </template>
    </Result>

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
  </div>
</template>

<script setup lang="ts">
import Result from '@/lib/result/Result.vue'
import Button from '@/lib/button/Button.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
</script>

<style lang="scss">
.ui-template-wrap {
  .desc p {
    margin-bottom: 1em;
  }
}
</style>
