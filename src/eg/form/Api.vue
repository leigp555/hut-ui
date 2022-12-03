<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'data',
    说明: '表单数据对象',
    类型: 'object',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'layout',
    说明: '表单布局',
    类型: `'horizontal' | 'vertical'`,
    默认值: 'vertical'
  },
  {
    rowIndex: 3,
    属性: 'labelCol',
    说明: `label 标签布局，同 <Col> 组件，设置`,
    类型: 'object',
    默认值: '{ span: 10, offset: 0 }'
  },
  {
    rowIndex: 4,
    属性: 'wrapperCol',
    说明: `label 标签布局，同 <Col> 组件，设置`,
    类型: 'object',
    默认值: '{ span: 100, offset: 0 }'
  },
  {
    rowIndex: 5,
    属性: 'autocomplete',
    说明: '自动完成',
    类型: `'off' | 'on'`,
    默认值: 'off'
  }
]

const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'label',
    说明: '标签名',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'name',
    说明: '表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 3,
    属性: 'rules',
    说明: '表单验证规则',
    类型: ' Rule[]',
    默认值: '[]'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'finish',
    说明: '提交表单且数据验证成功后回调事件',
    回调参数: 'function(values)'
  },
  {
    rowIndex: 1,
    事件名称: 'finishFailed',
    说明: '提交表单且数据验证失败后回调事件',
    回调参数: 'function({ values, errorFields, outOfDate })'
  }
]

const attrContentArr = [
  { componentName: 'Form', attrContent: attrContent1 },
  { componentName: 'FormItem', attrContent: attrContent2 }
]
</script>
