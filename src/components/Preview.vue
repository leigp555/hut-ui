<template>
  <div class="ui-preview-wrap">
    <transition name="button" mode="out-in">
      <Component :is="getCode.vNode" :key="getCode.key" @click="onClick" />
    </transition>
    <transition name="code">
      <pre class="language-html" v-html="html" v-if="html" v-show="show" />
    </transition>
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
const getCode = computed<{ vNode: VNode; key: string }>(() => {
  return show.value
    ? { vNode: HideCode, key: 'hide' }
    : { vNode: ShowCode, key: 'show' }
})

const onClick = () => {
  show.value = !show.value
}
</script>

<style lang="scss">
.ui-preview-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  > .language-html {
    border-radius: 2px;
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

.code-enter-from,
.code-leave-to {
}
.code-enter-active,
.code-leave-active {
}
</style>
