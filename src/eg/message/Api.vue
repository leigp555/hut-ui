<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'type',
    说明: 'string',
    类型: `'info'|'success'|'error'|'warning'|'loading'`,
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'options',
    说明: `如果是string则为提示内容，也可以是Options对象
{
  content?: string
  style?: Partial<CSSStyleDeclaration>
  duration?: number
}`,
    类型: 'string|Options',
    默认值: 'false'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Message', attrContent: attrContent1 }]
</script>
