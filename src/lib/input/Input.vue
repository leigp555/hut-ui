<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref, computed } from 'vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'

const emits = defineEmits(['update:value'])
const props = withDefaults(
  defineProps<{ value: string; placeholder?: string; type?: 'password' | 'text' }>(),
  {
    value: '',
    placeholder: '',
    type: 'text'
  }
)

const { value, placeholder, type } = toRefs(props)
const wrapRef = ref<HTMLDivElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const onFocus = () => {
  wrapRef.value?.classList.add('wrap-focus')
}
const onBlur = () => {
  wrapRef.value?.classList.remove('wrap-focus')
}
const onInput = () => {
  emits('update:value', inputRef.value?.value)
}
const shouldEyeOpen = ref<boolean>(true)
const getType = computed<'text' | 'password'>(() => {
  if (type.value === 'password' && shouldEyeOpen.value) {
    return 'password'
  }
  return 'text'
})
const eyeOpen = () => {
  shouldEyeOpen.value = true
}
const eyeClose = () => {
  shouldEyeOpen.value = false
}
</script>

<template>
  <div class="ui-input-wrap">
    <div class="prefix-outer" v-if="$.slots.prefix_outer">
      <slot name="prefix_outer" />
    </div>
    <label class="ui-label-wrap" tabindex="-1" ref="wrapRef">
      <span class="input-icon" v-if="$.slots.prefix">
        <slot name="prefix" />
      </span>
      <input
        class="ui-input"
        :type="getType"
        :placeholder="placeholder"
        :value="value"
        ref="inputRef"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
      />

      <span class="input-icon" v-if="type === 'password'" style="position: relative">
        <TransitionGroup name="password">
          <SvgIcon
            class="input-icon-password"
            name="eye_open"
            width="1em"
            height="1em"
            fill="#000000d9"
            v-show="!shouldEyeOpen"
            @click="eyeOpen"
            key="open"
          />
          <SvgIcon
            class="input-icon-password"
            name="eye_close"
            width="1em"
            height="1em"
            fill="#000000d9"
            v-show="shouldEyeOpen"
            @click="eyeClose"
            key="close"
          />
        </TransitionGroup>
      </span>
      <span class="input-icon" v-if="$.slots.suffix">
        <slot name="suffix" />
      </span>
    </label>
    <div class="suffix-outer" v-if="$.slots.suffix_outer">
      <slot name="suffix_outer" />
    </div>
  </div>
</template>

<style lang="scss">
$font_color: #000000d9;
$border_color: #d9d9d9;
$main_color: #1890ff;
.ui-input-wrap {
  display: flex;
  height: 100%;
  > .prefix-outer,
  .suffix-outer {
    display: flex;
  }
  > .ui-label-wrap {
    flex-grow: 10;
    padding: 4px 11px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 2px;
    border: 1px solid $border_color;
    transition: all 0.3s;
    &.wrap-focus {
      border: 1px solid $main_color;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
    &:hover {
      border: 1px solid $main_color;
    }
    > .input-icon {
      display: flex;
      align-items: center;
      font-size: 14px;
      > .input-icon-password {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    > .ui-input {
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 14px;
      border: none;
      outline: none;
      box-shadow: none;
      color: $font_color;
      line-height: 1.5em;
      display: flex;
      align-items: center;
      &:hover {
        border: none;
        outline: none;
      }
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
}

.password-enter-from,
.password-leave-to {
  opacity: 0;
}
.password-enter-active,
.password-leave-active {
  transition: all 200ms;
}
</style>
