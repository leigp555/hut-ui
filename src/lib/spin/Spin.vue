<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { withDefaults, defineProps, ref, onMounted, watchEffect, toRefs } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const props = withDefaults(
  defineProps<{ size?: number; loading?: boolean; tip?: string; delay?: number }>(),
  {
    size: 20,
    loading: true,
    delay: 0
  }
)
const { loading, delay } = toRefs(props)
const isLoading = ref<boolean>(true)

onMounted(() => {
  watchEffect(() => {
    if (loading.value) {
      const id = setTimeout(() => {
        isLoading.value = true
        window.clearTimeout(id)
      }, delay.value)
    } else {
      const id = setTimeout(() => {
        isLoading.value = false
        window.clearTimeout(id)
      }, delay.value)
    }
  })
})
</script>

<template>
  <div class="ui-spin-wrap">
    <div v-if="$slots.default" :class="{ 'ui-spin-slot': isLoading }">
      <slot />
    </div>
    <div class="ui-spin-icon-wrap" v-if="isLoading" v-bind="$attrs">
      <div class="ui-spin-icon">
        <span v-if="!$slots.icon">
          <SvgIcon
            name="icon_radius_loading"
            :width="`${size}px`"
            :height="`${size}px`"
          />
        </span>

        <span v-if="$slots.icon">
          <slot name="icon" />
        </span>
      </div>
      <span v-if="tip" class="ui-spin-tip">{{ tip }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.ui-spin-wrap {
  position: relative;
  > .ui-spin-slot {
    opacity: 0.4;
  }
  > .ui-spin-icon-wrap {
    display: inline-flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    > .ui-spin-tip {
      font-size: 14px;
      color: #1890ff;
      text-shadow: 0 1px 2px #fff;
    }
    > .ui-spin-icon {
      justify-self: start;
      align-self: center;
      display: inline-flex;
      animation: spin_active 1s linear infinite;
      transform-origin: center;
    }
  }
}
@keyframes spin_active {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
