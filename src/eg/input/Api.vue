<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'value',
    说明: '输入框内容',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'placeholder',
    说明: '输入框占位',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 3,
    属性: 'type',
    说明: '输入框类型',
    类型: `'password' | 'text'`,
    默认值: 'text'
  }
]

const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'value',
    说明: '输入框内容',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'placeholder',
    说明: '输入框占位',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 3,
    属性: 'autoSize',
    说明: '自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }',
    类型: 'boolean|object',
    默认值: 'false'
  },
  {
    rowIndex: 4,
    属性: 'resize',
    说明: '文本框是否可拉伸',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 5,
    属性: 'maxlength',
    说明: '文本框最多字数',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 6,
    属性: 'showCount',
    说明: '展示字数',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = []

const attrContentArr = [
  { componentName: 'Input', attrContent: attrContent1 },
  { componentName: 'TeatArea', attrContent: attrContent2 }
]
</script>
