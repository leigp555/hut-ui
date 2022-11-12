<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref, onMounted, watchEffect } from 'vue'
import SvgIcon from '../common/SvgIcon.vue'

const emits = defineEmits(['change'])
const props = withDefaults(
  defineProps<{
    keyValue: string
    header: string
    currentKey?: string[]
    disabled?: boolean
  }>(),
  {
    disabled: false
  }
)
const { keyValue, currentKey, disabled } = toRefs(props)

const divRef = ref<HTMLDivElement>(null)
const divRef2 = ref<HTMLDivElement>(null)

const headerClick = (e: Event) => {
  if (disabled.value) {
    e.stopPropagation()
    e.preventDefault()
    return
  }
  if (currentKey?.value[0] !== keyValue.value) {
    emits('change', [keyValue.value])
  } else {
    emits('change', [])
  }
}
onMounted(() => {
  watchEffect(() => {
    if (currentKey?.value[0] === keyValue.value) {
      divRef2.value.style.height = `${divRef.value.getBoundingClientRect().height}px`
    } else {
      divRef2.value.style.height = `${0}px`
    }
  })
})
</script>

<template>
  <div class="ui-panel-wrap">
    <div class="ui-panel-header" @click="headerClick" :class="{ disabled }">
      <span :class="{ 'icon-down': currentKey[0] === keyValue }">
        <SvgIcon name="down" width="1em" height="1em" />
      </span>
      <p>{{ header }}</p>
    </div>
    <div
      class="ui-panel-content"
      ref="divRef2"
      :class="{ 'content-open': currentKey[0] === keyValue }"
    >
      <div class="panel-content" ref="divRef">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$font_color: #000000d9;
$font-size: 14px;
$border_color: #d9d9d9;
.ui-panel-wrap {
  display: flex;
  flex-direction: column;
  font-size: $font_size;
  color: $font_color;
  &:not(:first-child) {
    border-top: 1px solid $border_color;
  }
  > .ui-panel-header {
    padding: 12px 16px;
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #fafafa;
    cursor: pointer;
    user-select: none;
    &.disabled {
      cursor: not-allowed;
      color: #00000040;
      fill: #00000040;
    }
    > span {
      display: flex;
      align-items: center;
      transform: rotate(-90deg);
      transition: all 250ms;
      &.icon-down {
        transform: rotate(0deg);
      }
    }
  }
  > .ui-panel-content {
    line-height: 1.5em;
    background-color: #ffffff;
    height: 0;
    overflow: hidden;
    transition: height 300ms;
    > .panel-content {
      padding: 16px;
    }
  }
}
</style>
