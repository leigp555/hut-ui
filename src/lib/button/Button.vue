<template>
  <button
    class="ui-button"
    :class="{ radius, disabled, danger, [size]: true, [type]: true, loading }"
    @click="onClick"
    ref="buttonRef"
  >
    <slot name="icon" />
    <span class="ui-button-icon" v-if="loading">
      <SvgIcon name="loading" width="1em" height="1em" fill="#eff7ff" />
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref, toRefs, withDefaults } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

type Props = {
  radius?: boolean
  disabled?: boolean
  size?: 'big' | 'normal' | 'small'
  type?: 'primary' | 'text' | 'link' | 'dashed' | 'default'
  loading?: boolean
  danger: boolean
}
const props = withDefaults(defineProps<Props>(), {
  radius: false,
  disabled: false,
  size: 'normal',
  type: 'primary',
  loading: false,
  danger: false
})
const { radius, disabled, size, type, loading, danger } = toRefs(props)

const buttonRef = ref<HTMLElement | null>(null)
const onClick = (e: Event) => {
  if (disabled.value) {
    e.stopPropagation()
    e.stopPropagation()
  } else {
    buttonRef.value!.classList.add('ui-button-active')
    const id = setTimeout(() => {
      buttonRef.value!.classList.remove('ui-button-active')
      window.clearTimeout(id)
    }, 300)
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
