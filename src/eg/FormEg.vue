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
      :labelCol="{ span: 20 }"
      :wrapperCol="{ span: 100 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <FormItem
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <Input v-model:value="formState.username" />
      </FormItem>

      <FormItem
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <Input v-model:value="formState.password" type="password" />
      </FormItem>
      <FormItem :wrapperCol="{ offset: 20, span: 100 }">
        <Button type="primary">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>

<style lang="scss">
.ui-template-wrap {
  padding-top: 200px;
  margin: 0 auto;
  //width: 400px;
}
</style>
