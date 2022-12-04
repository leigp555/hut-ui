<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'

const fileToUrl = (file: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onerror = (err) => {
      reject(err)
    }
    reader.onload = () => {
      resolve(reader.result as string)
    }
  })
}

const emits = defineEmits(['change', 'drop'])
withDefaults(defineProps<{}>(), {})
const isDrop = ref<boolean>(false)

const onChange = (e: Event) => {
  if (!isDrop.value) {
    const el = e.target as HTMLInputElement
    const fileBlobs = Array.from(el.files ? el.files : []) as File[]
    const queue = fileBlobs.map((item) => {
      return fileToUrl(item)
    })
    emits('change', { blobs: fileBlobs, urlPromises: queue })
  }
  isDrop.value = false
}

const onDrop = (e: InputEvent) => {
  if (e.dataTransfer) {
    isDrop.value = true
    const fileBlobs = Array.from(e.dataTransfer.files) as File[]
    const queue = fileBlobs.map((item) => {
      return fileToUrl(item)
    })
    emits('change', { blobs: fileBlobs, urlPromises: queue })
  }
}
</script>

<template>
  <div class="ui-upload-wrap">
    <slot />
    <input
      class="ui-upload-input"
      type="file"
      accept="image/*"
      @change="onChange"
      @drop="onDrop"
      multiple
    />
  </div>
</template>

<style lang="scss">
$font_color: #000000d9;
$border_color: #d9d9d9;
.ui-upload-wrap {
  color: $font_color;
  position: relative;
  display: inline-block;
  > .ui-upload-input {
    flex-grow: 10;
    opacity: 0;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
}
</style>
