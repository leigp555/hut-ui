<template>
  <div class="ui-preview-wrap">
    <transition name="button" mode="out-in">
      <Component :is="getCode.vNode" :key="getCode.key" @click="onClick" />
    </transition>

    <div class="html-show" ref="codeWrapRef">
      <pre
        class="language-html scroll-container"
        v-html="html"
        v-if="html"
        ref="codeRef"
      ></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref, computed, VNode } from 'vue'
import HideCode from '@/components/HideCode.vue'
import ShowCode from '@/components/ShowCode.vue'

withDefaults(defineProps<{ html: string | null }>(), {
  html: null
})

const show = ref<boolean>(false)
const codeWrapRef = ref<HTMLElement | null>(null)
const codeRef = ref<HTMLElement | null>(null)
const getCode = computed<{ vNode: VNode; key: string }>(() => {
  return show.value
    ? { vNode: HideCode, key: 'hide' }
    : { vNode: ShowCode, key: 'show' }
})

const onClick = () => {
  show.value = !show.value
  if (show.value && codeRef.value && codeWrapRef.value) {
    codeWrapRef.value.style.height = `${codeRef.value.clientHeight + 30}px`
  } else {
    codeWrapRef.value.style.height = `${0}px`
  }
}
</script>

<style lang="scss">
.ui-preview-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  > .html-show {
    height: 0;
    overflow: hidden;
    transition: height 300ms;

    > .language-html {
      border-radius: 2px;
      white-space: pre;
      overflow: auto;

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
