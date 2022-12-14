<template>
  <div
    class="ui-tag-wrap"
    :style="{ backgroundColor: bacColor, border: `1px solid ${color}` }"
    :class="{ tagHide }"
  >
    <span class="ui-tag-icon" v-if="$slots.icon">
      <slot name="icon" />
    </span>
    <span class="ui-tag-content" :style="{ color }" ref="contentRef">
      <slot />
    </span>
    <span class="ui-tag-close" @click="onClick" v-if="closable">
      <Icon_cha name="cha" width="1em" height="1em" :fill="color" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, computed, ref } from 'vue'
import { Icon_cha } from '@hut-ui/icons-vue'
import { justColor, nameToHex, rgbToRgba } from './color_trans'

const props = withDefaults(defineProps<{ color?: string; closable?: boolean }>(), {
  color: '#fff'
})
const emits = defineEmits(['close'])
const tagHide = ref<boolean>(false)
const contentRef = ref<HTMLSpanElement | null>(null)

const bacColor = computed(() => {
  const hex = /^#/i
  const rgb = /^rgb/i
  if (hex.test(props.color)) {
    return justColor(props.color, 180)
  }
  if (rgb.test(props.color)) {
    return rgbToRgba(props.color, 0.2)
  }
  return justColor(nameToHex(props.color), 180)
})

const onClick = (e: MouseEvent) => {
  emits('close', contentRef.value)
  tagHide.value = true
}
</script>

<style lang="scss">
.ui-tag-wrap {
  display: inline-flex;
  align-items: center;
  margin: 0 8px 2px 0;
  padding: 0 7px;
  gap: 7px;
  border-radius: 2px;
  transition: all 0.3s;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid #d9d9d9;
  background: #fafafa;
  &.tagHide {
    display: none;
  }
  > .ui-tag-content {
    display: inline-block;
    font-size: 12px;
    white-space: nowrap;
    color: #000000d9;
    //filter: brightness(1.2);
  }
  > .ui-tag-close {
    cursor: pointer;
  }
}
</style>
