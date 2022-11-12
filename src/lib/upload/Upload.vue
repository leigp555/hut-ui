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

const onDrop = (e: Event) => {
  isDrop.value = true
  const fileBlobs = Array.from(e.dataTransfer.files) as File[]
  const queue = fileBlobs.map((item) => {
    return fileToUrl(item)
  })
  emits('change', { blobs: fileBlobs, urlPromises: queue })
}
</script>

<template>
  <div class="ui-upload-wrap">
    <section class="ui-upload-tip">
      <slot />
    </section>
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
  border: 1px dashed $border_color;
  position: relative;
  display: flex;
  min-height: 150px;
  flex-direction: column;
  background-color: #fafafa;
  > .ui-upload-input {
    display: block;
    flex-grow: 10;
    opacity: 0;
    cursor: pointer;
  }
  > .ui-upload-tip {
    color: $font_color;
    position: absolute;

    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 16px 10px;
    text-align: center;
  }
}
</style>
