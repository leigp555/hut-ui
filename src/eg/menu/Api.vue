<template>
  <ApiIntro :attr-content-arr="attrContentArr" :event-content="eventContent" />
</template>

<script lang="ts" setup>
import ApiIntro from '@/components/ApiIntro.vue'

const attrContent1 = [
  {
    rowIndex: 1,
    属性: 'selectedKeys',
    说明: '选中的标题',
    类型: 'string[]',
    默认值: '[]'
  },
  {
    rowIndex: 2,
    属性: 'mode',
    说明: '排布方式（水平|垂直）',
    类型: `'horizontal' | 'column'`,
    默认值: 'horizontal'
  }
]
const attrContent2 = [
  {
    rowIndex: 1,
    属性: 'keyValue',
    说明: '应提供唯一值',
    类型: 'string',
    默认值: 'null'
  },
  {
    rowIndex: 2,
    属性: 'disabled',
    说明: '禁用',
    类型: 'boolean',
    默认值: 'false'
  }
]
const attrContent3 = [
  {
    rowIndex: 1,
    属性: 'keyValue',
    说明: '应提供唯一值',
    类型: 'string',
    默认值: 'null'
  },
  {
    rowIndex: 2,
    属性: 'title',
    说明: '标题',
    类型: 'string',
    默认值: 'null'
  }
]
const attrContent4 = [
  {
    rowIndex: 1,
    属性: 'keyValue',
    说明: '应提供唯一值',
    类型: 'string',
    默认值: 'null'
  },
  {
    rowIndex: 2,
    属性: 'collapsible',
    说明: '是否可折叠',
    类型: 'boolean',
    默认值: 'true'
  }
]
const eventContent = [
  {
    rowIndex: 1,
    事件名称: 'update:selectedKeys',
    说明: '点击标题时的回调',
    回调参数: '(string[]) => void'
  }
]

const attrContentArr = [
  { componentName: 'Menu', attrContent: attrContent1 },
  { componentName: 'MenuItem', attrContent: attrContent2 },
  { componentName: 'MenuItemGroup', attrContent: attrContent3 },
  { componentName: 'SubMenu', attrContent: attrContent4 }
]
</script>
