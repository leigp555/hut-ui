<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'
import SvgIcon from '../common/SvgIcon.vue'

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
      <div class="ui-upload-icon">
        <SvgIcon name="img_push" width="2.5em" height="2.5em" />
      </div>
      <span class="ui-upload-description">点击或拖拽上传图片</span>
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
  min-height: 100px;
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  > .ui-upload-input {
    display: block;
    flex-grow: 10;
    width: 100%;
    opacity: 0;
  }
  > .ui-upload-tip {
    color: $font_color;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>
