<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'size',
    说明: '头像大小',
    类型: 'number',
    默认值: '40'
  },
  {
    rowIndex: 2,
    属性: 'shape',
    说明: '头像形状',
    类型: `'square' | 'round'`,
    默认值: 'round'
  },
  {
    rowIndex: 3,
    属性: 'src',
    说明: '头像链接',
    类型: 'Url',
    默认值: 'null'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'level',
    说明: '标题等级',
    类型: 'string(1-6)|number(1-6)',
    默认值: '4'
  }
]

const eventContent = []

const attrContentArr = [{ componentName: 'Avatar', attrContent: attrContent1 }]
</script>
