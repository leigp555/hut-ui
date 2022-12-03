<demo>
没有title
</demo>

<template>
  <Form
    :data="formState"
    layout="line"
    :wrapperCol="{ span: 50 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <FormItem
      name="username"
      :rules="[{ pattern: /^\d{0,5}\d$/, message: 'Please input your username!' }]"
    >
      <Input v-model:value="formState.username" />
    </FormItem>

    <FormItem
      name="password"
      :rules="[{ pattern: /^\d{0,5}\d$/, message: 'Please input your password!' }]"
    >
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
