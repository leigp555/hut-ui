<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref, onMounted, watchEffect } from 'vue'
import { Icon_down } from '@hut-ui/icons-vue'

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

const divRef = ref<HTMLDivElement | null>(null)
const divRef2 = ref<HTMLDivElement | null>(null)

const headerClick = (e: Event) => {
  if (disabled.value) {
    e.stopPropagation()
    e.preventDefault()
    return
  }
  emits('change', keyValue.value)
}
onMounted(() => {
  watchEffect(() => {
    if (
      divRef.value &&
      divRef2.value &&
      currentKey?.value &&
      currentKey?.value?.indexOf(keyValue.value) >= 0
    ) {
      divRef2.value.style.height = `${divRef.value.getBoundingClientRect().height}px`
    } else if (divRef2.value) divRef2.value.style.height = `${0}px`
  })
})
</script>

<template>
  <div class="ui-panel-wrap">
    <div class="ui-panel-header" @click="headerClick" :class="{ disabled }">
      <span :class="{ 'icon-down': currentKey.indexOf(keyValue) >= 0 }">
        <Icon_down name="down" width="0.8em" height="0.8em" />
      </span>
      <p>{{ header }}</p>
    </div>
    <div
      class="ui-panel-content"
      ref="divRef2"
      :class="{ 'content-open': currentKey.indexOf(keyValue) >= 0 }"
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
