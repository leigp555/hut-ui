<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
const emits = defineEmits(['update:value'])
import { withDefaults, defineProps, toRefs, ref } from 'vue'

import { Icon_eyeOpen, Icon_eyeClose } from '@hut-ui/icons-vue'

const props = withDefaults(
  defineProps<{
    value: string
    placeholder?: string
    type?: 'password' | 'text'
    status?: 'normal' | 'error'
  }>(),
  {
    value: '',
    placeholder: '',
    type: 'text',
    status: 'normal'
  }
)

const { value, placeholder, type } = toRefs(props)

const wrapRef = ref<HTMLDivElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const shouldEyeClose = ref<boolean>(false)
const onFocus = () => {
  wrapRef.value?.classList.add('wrap-focus')
}
const onBlur = () => {
  wrapRef.value?.classList.remove('wrap-focus')
}
const onInput = () => {
  emits('update:value', inputRef.value?.value)
}

const eyeOpen = () => {
  inputRef.value!.setAttribute('type', 'password')
  shouldEyeClose.value = false
}
const eyeClose = () => {
  inputRef.value!.setAttribute('type', 'text')
  shouldEyeClose.value = true
}
</script>

<template>
  <div class="ui-input-wrap" tabindex="-1">
    <div class="prefix-outer" v-if="$.slots.prefix_outer">
      <slot name="prefix_outer" />
    </div>
    <label
      class="ui-label-wrap"
      tabindex="-1"
      ref="wrapRef"
      :class="{ 'ui-label-error': status === 'error' }"
    >
      <span class="input-icon" v-if="$.slots.prefix">
        <slot name="prefix" />
      </span>
      <input
        class="ui-input"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        ref="inputRef"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        v-bind="$attrs"
      />

      <span class="input-icon" v-if="type === 'password'" style="position: relative">
        <TransitionGroup name="password">
          <Icon_eyeOpen
            class="input-icon-password"
            name="eye_open"
            width="1em"
            height="1em"
            v-show="shouldEyeClose"
            @click="eyeOpen"
            key="open"
          />
          <Icon_eyeClose
            class="input-icon-password"
            name="eye_close"
            width="1em"
            height="1em"
            v-show="!shouldEyeClose"
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
$error_color: #ff4d4f;
$error_shadow: rgba(255, 77, 79, 0.2);
.ui-input-wrap {
  display: flex;
  height: 100%;
  svg {
    fill: #00000073;
  }
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
    &.ui-label-error {
      border: 1px solid $error_color;
      svg {
        fill: $error_color;
      }
      &.wrap-focus {
        border: 1px solid $error_color;
        box-shadow: 0 0 0 2px $error_shadow;
      }
      &:hover {
        border: 1px solid $error_color;
      }
    }
    > .input-icon {
      display: flex;
      align-items: center;
      font-size: 14px;
      width: 1em;
      height: 1em;
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
      padding: 0;
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
  transition: all 100ms;
}
</style>
