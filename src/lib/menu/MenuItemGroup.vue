<script setup lang="ts">
import { withDefaults, defineProps, useSlots, inject, toRefs, Ref, VNode } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    subKeyValue?: string
    paddingLeft?: number
    keyValue: string
    totalTitle?: string[]
  }>(),
  {}
)

const { subKeyValue } = toRefs(props)
const slots = useSlots().default()

// eslint-disable-next-line no-unused-vars
const changeSelectedArr = inject<(newArr: string[]) => void>(
  'change_ui_menu_selectedArr'
)
const selectedKeys = inject<Ref<string[]>>('ui_menu_selectedArr')
const mode = inject<Ref<'column' | 'horizontal'>>('ui_menu_mode')

const onClick = (e: Event) => {
  let el = (e.target as HTMLElement) || null
  while (el.tagName.toLowerCase() !== 'li') {
    if (el.tagName.toLowerCase() === 'ul') {
      el = null
      break
    } else {
      el = el.parentNode
    }
  }
  if (el) {
    const keyValue = el.getAttribute('data-setKey')
    changeSelectedArr([subKeyValue.value, keyValue])
  }
}

const shouldLight = (item: VNode) => {
  return selectedKeys?.value.indexOf(item.props.keyValue) >= 0
}
</script>

<template>
  <div
    class="ui-menuGroup-wrap"
    :class="{ 'ui-menuGroup-wrap-column': mode === 'column' }"
  >
    <div
      class="ui-menuGroup-title"
      :style="{ paddingLeft: mode === 'column' ? `${paddingLeft - 16}px` : '8px 16px' }"
    >
      {{ title }}
    </div>
    <ul class="ui-menuGroup-content" @click="onClick">
      <li
        v-for="item in slots"
        :key="item"
        class="ui-menuGroup-item"
        :data-setKey="item.props.keyValue"
        :class="{
          'ui-menuGroup-item-selected': shouldLight(item)
        }"
      >
        <Component
          :is="item"
          :isNested="true"
          :paddingLeft="paddingLeft"
          :totalTitle="[...totalTitle, keyValue]"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.ui-menuGroup-wrap {
  > .ui-menuGroup-title {
    padding: 8px 16px;
    color: #00000073;
    font-size: 14px;
    line-height: 1.5715;
  }
  > .ui-menuGroup-content {
    list-style: none;
    > .ui-menuGroup-item {
      margin-bottom: 8px;
      padding: 0 16px 0 28px;
      height: 40px;
      margin-top: 4px;
      overflow: hidden;
      line-height: 40px;
      text-overflow: ellipsis;
      &.ui-menuGroup-item-selected {
        background-color: #e6f7ff;
      }
    }
  }
}
.ui-menuGroup-wrap {
  &.ui-menuGroup-wrap-column {
    .ui-menuGroup-title {
      padding-left: 32px;
    }
    .ui-menuGroup-item {
      padding: 0;
    }
  }
}
</style>
