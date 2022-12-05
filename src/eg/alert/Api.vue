<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'message',
    说明: '警告提示内容',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 2,
    属性: 'type',
    说明: '指定警告提示的样式，有四种选择 success、info、warning、error',
    类型: 'string',
    默认值: 'success'
  },
  {
    rowIndex: 3,
    属性: 'closable',
    说明: '可关闭的',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 4,
    属性: 'description',
    说明: '警告提示的辅助性文字介绍',
    类型: 'string',
    默认值: ''
  },
  {
    rowIndex: 5,
    属性: 'showIcon',
    说明: '是否显示辅助图标',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 6,
    属性: 'banner',
    说明: '是否用作顶部公告',
    类型: 'boolean',
    默认值: 'false'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'close',
    说明: '关闭时触发的回调函数',
    回调参数: '(message:string) => void'
  }
]

const attrContentArr = [{ componentName: 'Alert', attrContent: attrContent1 }]
</script>
