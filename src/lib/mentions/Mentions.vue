<script setup lang="ts">
import { withDefaults, defineProps, toRefs, defineEmits, ref, onMounted } from 'vue'
import { MentionsOptions } from './type'

const emits = defineEmits(['select', 'update:value'])

const props = withDefaults(
  defineProps<{ value: string; options: MentionsOptions[] }>(),
  {
    value: '',
    options: () => []
  }
)
const { value, options } = toRefs(props)

const inputRef = ref<HTMLInputElement | null>(null)
const getWidthRef = ref<HTMLInputElement | null>(null)
const leftDistance = ref<number>(0)
const popShow = ref<boolean>(false)

const spanEl = document.createElement('span')
spanEl.classList.add('mentions-pop-left')

const inputEvent = (e: Event) => {
  const el = e.target as HTMLTextAreaElement
  emits('update:value', el.value)

  if (el && el.value.substring(el.selectionStart - 1, el.selectionStart) === '@') {
    spanEl.innerText = el.value.substring(0, el.selectionStart)
    let leftWidth = spanEl.getBoundingClientRect().width
    while (leftWidth + 7.1 > el.clientWidth - 19) {
      leftWidth = leftWidth - el.clientWidth + 28
    }
    leftDistance.value = leftWidth + 11
    popShow.value = true
  } else popShow.value = false
}

onMounted(() => {
  getWidthRef.value?.appendChild(spanEl)
})
const userSelect = (e: Event) => {
  const el = e.target as HTMLElement
  const spec = el.getAttribute('data-value')
  if (el.tagName.toLowerCase() === 'p' && spec === 'list') {
    const inputDom = inputRef.value as HTMLInputElement
    let startIndex: number = 0
    if (inputDom) {
      startIndex = inputDom.selectionStart!
    }
    const newContent =
      value.value.substring(0, startIndex) +
      el.innerText +
      value.value.substring(startIndex)
    emits('update:value', newContent)
    emits('select', el.innerText)
    popShow.value = false
    setTimeout(() => {
      inputDom.focus()
      inputDom.setSelectionRange(
        startIndex + el.innerText.length,
        startIndex + el.innerText.length
      )
    })
  }
}

const inputBlur = () => {
  popShow.value = false
}
</script>

<template>
  <div class="ui-mentions-wrap">
    <textarea
      ref="inputRef"
      class="ui-mentions-input ui-scroll-container"
      :value="value"
      @input="inputEvent"
      @blur="inputBlur"
    />
    <div class="ui-mentions-getWidth" ref="getWidthRef"></div>
    <div
      class="ui-mentions-pop-wrap"
      @mousedown="userSelect"
      :style="{ left: `${leftDistance}px` }"
    >
      <Transition name="mentions">
        <div class="ui-mentions-pop" v-show="popShow">
          <p
            v-for="item in options"
            :key="item"
            class="mentions-list-item"
            data-value="list"
            :title="item.value"
          >
            {{ item.label }}
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
@import '../common/scrollBar.scss';
$font_color: rgba(0, 0, 0, 0.85);
$main_color: #1890ff;
$selected_color: #e6f7ff;
.ui-mentions-wrap {
  display: inline-flex;
  position: relative;
  .ui-mentions-getWidth {
    width: 0;
    height: 0;
    position: relative;
    overflow: hidden;
    > .mentions-pop-left {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
    }
  }
  .ui-mentions-input {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
      Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      Segoe UI Symbol, 'Noto Color Emoji';
    flex-grow: 10;
    padding: 4px 11px;
    height: 30px;
    outline: none;
    box-shadow: none;
    border: 1px solid #d9d9d9;
    font-size: 14px;
    color: $font_color;
    border-radius: 2px;
    resize: none;
    transition: all 250ms;
    word-break: break-all;
    &:focus {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      border: 1px solid $main_color;
    }
    &:hover {
      border: 1px solid $main_color;
    }
  }
  .ui-mentions-pop-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
    transform: translateY(calc(100% + 4px));
    > .ui-mentions-pop {
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
        0 9px 28px 8px #0000000d;
      transform-origin: top;
      background: #ffffff;
      > .mentions-list-item {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;
        color: $font_color;
        padding: 0 16px;
        line-height: 2.5em;
        cursor: pointer;
        &:last-child {
          margin-bottom: 4px;
        }
        &:hover {
          background-color: $selected_color;
        }
      }
    }
  }
}
.mentions-enter-from,
.mentions-leave-to {
  transform: scale(1, 0.5);
  opacity: 0;
}
.mentions-enter-active,
.mentions-leave-active {
  transition: all 250ms;
}
</style>
