<script setup lang="ts">
import { reactive } from 'vue'
import Form from '@/lib/form/Form.vue'
import FormItem from '@/lib/form/FormItem.vue'
import Button from '@/lib/button/Button.vue'
import Input from '@/lib/input/Input.vue'

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

<template>
  <div class="ui-template-wrap">
    <Form
      :data="formState"
      layout="vertical"
      :labelCol="{ span: 10 }"
      :wrapperCol="{ span: 40 }"
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
      <FormItem :wrapperCol="{ span: 40 }">
        <Button type="primary">Submit</Button>
      </FormItem>
    </Form>

    <Form
      :data="formState"
      layout="line"
      :wrapperCol="{ span: 60 }"
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
      <FormItem :wrapperCol="{ span: 60 }">
        <Button type="primary">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>

<style lang="scss">
.ui-template-wrap {
  padding-top: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
