<template>
  <div class="ui-colorUtil-wrap" @click="copyColor">
    <div
      class="ui-colorUtil-item"
      v-for="i in 15"
      :key="`${i}${colors[i - 1]}`"
      :style="{ backgroundColor: colors[i - 1] }"
    >
      {{ colors[i - 1] }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { alert } from '@/lib'

withDefaults(defineProps<{ colors: string[] }>(), {})

const copyColor = async (e: Event) => {
  const el = e.target as HTMLDivElement
  if (el.tagName.toLowerCase() === 'div') {
    try {
      await navigator.clipboard.writeText(el.innerText)
      alert.success(`复制成功`)
    } catch (error) {
      alert.error(`复制失败`)
    }
  }
}
</script>

<style lang="scss">
.ui-colorUtil-wrap {
  display: flex;
  gap: 1px;
  flex-grow: 10;
  flex-wrap: wrap;
  justify-content: center;
  > .ui-colorUtil-item {
    color: #222222;
    min-width: 68px;
    min-height: 40px;
    cursor: pointer;
    user-select: none;
  }
}
</style>
