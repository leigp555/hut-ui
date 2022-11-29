<template>
  <div class="ui-preview-wrap">
    <div class="actions">
      <transition name="button" mode="out-in">
        <Component :is="getCode.vNode" :key="getCode.key" @click="onClick" />
      </transition>
      <Button type="link" @click="copy" style="padding: 4px 10px">
        <SvgIcon name="copy" height="1em" width="1em" fill="#00000073" />
      </Button>
    </div>

    <div class="html-show" ref="codeWrapRef">
      <pre
        class="language-html scroll-container"
        v-html="displayHtml"
        v-if="html"
        ref="codeRef"
      ></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref, computed, VNode, toRefs } from 'vue'
import HideCode from '@/components/HideCode.vue'
import ShowCode from '@/components/ShowCode.vue'
import { alert, Button, SvgIcon } from '@/lib'
import { getSourceCode } from '@/eg/helper'

const props = withDefaults(defineProps<{ html: string }>(), {
  html: ''
})
const { html } = toRefs(props)
const displayHtml = computed<string>(() => {
  if (html.value) {
    return getSourceCode(html.value)
  }
  return ''
})

const show = ref<boolean>(false)
const codeWrapRef = ref<HTMLElement | null>(null)
const codeRef = ref<HTMLElement | null>(null)
const getCode = computed(() => {
  return show.value
    ? { vNode: HideCode, key: 'hide' }
    : { vNode: ShowCode, key: 'show' }
})

const onClick = () => {
  show.value = !show.value
  if (show.value && codeRef.value && codeWrapRef.value) {
    codeWrapRef.value.style.height = `${codeRef.value.clientHeight + 14}px`
  } else if (codeWrapRef.value) codeWrapRef.value.style.height = `${0}px`
}
const copy = async () => {
  try {
    await navigator.clipboard.writeText(html.value)
    alert.success(`复制成功`)
  } catch (error) {
    alert.error(`复制失败`)
  }
}
</script>

<style lang="scss">
.ui-preview-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  > .actions {
    display: flex;
    justify-content: center;
    border-top: 1px solid #f0f0f0;
    padding: 4px;
  }
  > .html-show {
    height: 0;
    overflow: hidden;
    transition: height 300ms;

    > .language-html {
      border-radius: 2px;
      white-space: pre;
      overflow-x: scroll;
      span {
        white-space: pre;
      }
    }
  }
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
}
.button-enter-active,
.button-leave-active {
  transition: opacity 250ms;
}
</style>
