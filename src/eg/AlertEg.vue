<template>
  <div class="ui-template-wrap">
    <Alert message="Success Text" type="success" showIcon />
    <Alert message="Info Text" type="info" showIcon />
    <Alert message="Warning Text" type="warning" showIcon />
    <Alert message="Error Text" type="error" showIcon />
    <Alert message="Success Text" type="success" closable showIcon />
    <Alert message="Success Text" type="success" :description="description" showIcon />
    <Alert message="Info Text" type="info" :description="description" showIcon />
    <Alert message="Warning Text" type="warning" :description="description" showIcon />
    <Alert message="Error Text" type="error" :description="description" showIcon />
    <Alert
      message="Success Text"
      type="error"
      closable
      :description="description"
      showIcon
    />
    <Alert message="Success Text" type="error" closable showIcon>
      <template #description>
        <p>
          Success Description
          <span style="color: red">Success</span>
          Description Success Description
        </p>
      </template>
    </Alert>

    <Alert message="Error Text" type="error" showIcon banner />
    <Alert
      message="Error Text"
      type="error"
      showIcon
      banner
      :description="description"
    />
    <Alert message="Error Text" type="error" showIcon banner>
      <template #icon>
        <SvgIcon name="weixin" width="1em" height="1em" />
      </template>
    </Alert>
    <Alert
      message="Error Text"
      type="success"
      showIcon
      banner
      :description="description"
    >
      <template #icon>
        <SvgIcon name="weixin" width="1em" height="1em" />
      </template>
    </Alert>
  </div>
</template>

<script setup lang="ts">
import Alert from '@/lib/alert/Alert.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae cum, deserunt dolorem in ipsum laboriosam laudantium maxime numquam officiis quia quos, repellat reprehenderit unde vitae voluptates. Debitis, natus.'
</script>

<style lang="scss">
.ui-template-wrap {
}
</style>
