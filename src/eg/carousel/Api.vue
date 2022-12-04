<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'autoPlay',
    说明: '是否自动切换',
    类型: 'boolean',
    默认值: 'true'
  },
  {
    rowIndex: 2,
    属性: 'duration',
    说明: '动画间隔时间',
    类型: 'number',
    默认值: '3000'
  },
  {
    rowIndex: 3,
    属性: 'init',
    说明: '设置第一屏内容',
    类型: 'number',
    默认值: '0'
  },
  {
    rowIndex: 4,
    属性: 'quickJump',
    说明: '是否显示面板跳转按钮',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 5,
    属性: 'direction',
    说明: '播放方向',
    类型: `'forward' | 'back'`,
    默认值: 'false'
  },
  {
    rowIndex: 6,
    属性: 'indicator',
    说明: '是否显示面板指示点',
    类型: 'boolean',
    默认值: 'true'
  }
]

const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'change',
    说明: '面板切换时的回调',
    回调参数: 'Function(current: number) '
  }
]

const attrContentArr = [{ componentName: 'Carousel', attrContent: attrContent1 }]
</script>
