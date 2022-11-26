<script setup lang="ts">
import { withDefaults, defineProps, ref, onMounted } from 'vue'

withDefaults(
  defineProps<{ size?: number; shape?: 'square' | 'round'; src?: URL | null }>(),
  {
    size: 40,
    shape: 'round',
    src: null
  }
)
const imgRef = ref<HTMLImageElement | null>(null)
const imgShow = ref<boolean>(false)
onMounted(() => {
  if (imgRef.value) {
    imgRef.value.onload = () => {
      imgShow.value = true
    }
    imgRef.value.onerror = () => {
      imgShow.value = false
    }
  }
})
</script>

<template>
  <div
    class="ui-avatar-wrap"
    :class="{ 'ui-avatar-square': shape === 'square' }"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <slot name="icon" v-if="!imgShow" />
    <img :src="src" alt="头像" ref="imgRef" :class="{ 'avatar-img-show': imgShow }" />
  </div>
</template>

<style lang="scss">
.ui-avatar-wrap {
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #cccccc;
  &.ui-avatar-square {
    border-radius: 4px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: center;
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 250ms;
    &.avatar-img-show {
      opacity: 1;
      visibility: visible;
      width: auto;
      height: auto;
    }
  }
}
</style>
