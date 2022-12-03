<demo>
表单验证
</demo>

<template>
  <Form
    :data="formState"
    layout="vertical"
    :labelCol="{ span: 10 }"
    :wrapperCol="{ span: 50 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <FormItem
      name="username"
      :rules="[{ pattern: /^\d{0,5}\d$/, message: 'Please input your username!' }]"
    >
      <template #label><span>USERNAME :</span></template>
      <Input v-model:value="formState.username" />
    </FormItem>

    <FormItem
      name="password"
      :rules="[{ pattern: /^\d{0,5}\d$/, message: 'Please input your password!' }]"
    >
      <template #label><span>PASSWORD :</span></template>
      <Input v-model:value="formState.password" type="password" />
    </FormItem>
    <FormItem :wrapperCol="{ span: 50 }">
      <Button type="primary">Submit</Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Button, Input } from '@/lib'

interface FormState {
  username: string
  password: string
}
const formState = reactive<FormState>({
  username: '',
  password: ''
})

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>
