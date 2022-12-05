<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'paragraph',
    说明: '显示段落占位图',
    类型: '{ rows: number }',
    默认值: '{ rows: 3 }'
  },
  {
    rowIndex: 2,
    属性: 'avatar',
    说明: '是否显示头像占位图',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 3,
    属性: 'active',
    说明: '是否展示动画效果',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 4,
    属性: 'loading',
    说明: '为 true 时，显示占位图。反之则直接展示子组件',
    类型: 'boolean',
    默认值: 'true'
  },
  {
    rowIndex: 5,
    属性: 'titleAppear',
    说明: '是否显示title占位图',
    类型: 'boolean',
    默认值: 'true'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'size',
    说明: '设置头像占位图的大小',
    类型: 'number',
    默认值: '32'
  },
  {
    rowIndex: 2,
    属性: 'active',
    说明: '是否展示动画效果',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 3,
    属性: 'loading',
    说明: '为 true 时，显示占位图。反之则直接展示子组件',
    类型: 'boolean',
    默认值: 'true'
  }
]
const attrContent3 = [
  {
    rowIndex: 1,
    属性: 'width',
    说明: '设置宽度',
    类型: 'number',
    默认值: '64'
  },
  {
    rowIndex: 2,
    属性: 'height',
    说明: '设置高度',
    类型: 'number',
    默认值: '32'
  },
  {
    rowIndex: 3,
    属性: 'active',
    说明: '是否展示动画效果',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 4,
    属性: 'loading',
    说明: '为 true 时，显示占位图。反之则直接展示子组件',
    类型: 'boolean',
    默认值: 'true'
  }
]

const attrContent4 = [
  {
    rowIndex: 1,
    属性: 'width',
    说明: '设置宽度',
    类型: 'number',
    默认值: '96'
  },
  {
    rowIndex: 2,
    属性: 'height',
    说明: '设置高度',
    类型: 'number',
    默认值: '96'
  },
  {
    rowIndex: 3,
    属性: 'active',
    说明: '是否展示动画效果',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 4,
    属性: 'loading',
    说明: '为 true 时，显示占位图。反之则直接展示子组件',
    类型: 'boolean',
    默认值: 'true'
  }
]

const attrContent5 = [
  {
    rowIndex: 1,
    属性: 'width',
    说明: '设置宽度',
    类型: 'number',
    默认值: '200'
  },
  {
    rowIndex: 2,
    属性: 'height',
    说明: '设置高度',
    类型: 'number',
    默认值: '32'
  },
  {
    rowIndex: 3,
    属性: 'active',
    说明: '是否展示动画效果',
    类型: 'boolean',
    默认值: 'false'
  },
  {
    rowIndex: 4,
    属性: 'loading',
    说明: '为 true 时，显示占位图。反之则直接展示子组件',
    类型: 'boolean',
    默认值: 'true'
  }
]
const eventContent = []

const attrContentArr = [
  { componentName: 'Skeleton', attrContent: attrContent1 },
  { componentName: 'SkeletonAvatar', attrContent: attrContent2 },
  { componentName: 'SkeletonButton', attrContent: attrContent3 },
  { componentName: 'SkeletonImg', attrContent: attrContent4 },
  { componentName: 'SkeletonInput', attrContent: attrContent5 }
]
</script>
