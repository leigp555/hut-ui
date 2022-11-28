<template>
  <button
    class="ui-button"
    :class="{ radius, disabled, [size]: true, [type]: true, loading }"
  >
    <slot name="icon" />
    <span class="ui-button-icon" v-if="loading">
      <SvgIcon name="loading" width="1em" height="1em" fill="#eff7ff" />
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { toRefs, withDefaults } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

type Props = {
  radius?: boolean
  disabled?: boolean
  size?: 'big' | 'normal' | 'small'
  type?: 'primary' | 'text' | 'link' | 'dashed' | 'default'
  loading?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  radius: false,
  disabled: false,
  size: 'normal',
  type: 'primary',
  loading: false
})
const { radius, disabled, size, type, loading } = toRefs(props)
</script>

<style lang="scss">
@import './index.scss';
</style>
