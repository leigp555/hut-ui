<script setup lang="ts">
import { withDefaults, defineProps, toRefs, onMounted, ref, inject, Ref } from 'vue'

const props = withDefaults(defineProps<{ title: string; href: string }>(), {})
const { href } = toRefs(props)

const titleRef = ref<HTMLElement | null>(null)
// 滑动元素
const onClick = () => {
  document.querySelector(href.value).scrollIntoView({ behavior: 'smooth' })
}
const selectArr = <Ref<string[]>>'ui-anchor_selectArr'
// eslint-disable-next-line no-unused-vars
const changeSelect = inject<(option: { type: 'add' | 'sub'; el: string }) => void>(
  'change_ui_anchor_selectArr'
)

onMounted(() => {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Add 'active' class if observation target is inside viewport
        if (entry.intersectionRatio > 0) {
          changeSelect({ type: 'add', id: href.value })
          // entry.target.classList.add('active')
          // titleRef.value!.classList.add('active')
          // console.log(entry.target)
        }
        // Remove 'active' class otherwise
        else {
          changeSelect({ type: 'sub' })
          // entry.target.classList.remove('active')
          // titleRef.value!.classList.remove('active')
        }
      })
    },
    {
      rootMargin: '0px',
      threshold: 0
    }
  )
  // start observing
  intersectionObserver.observe(document.querySelector(href.value))
})
</script>
<template>
  <div class="ui-anchorLink-wrap">
    <span
      ref="titleRef"
      @click="onClick"
      class="ui-anchorLink-title"
      :class="{ active: href === selectArr[0] }"
      >{{ title }}</span
    >
    {{ href }}
    <div class="ui-anchorLink-slot">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.ui-anchorLink-wrap {
  > .ui-anchorLink-title {
    color: #1890ff;
    cursor: pointer;
    &.active {
      color: red;
    }
  }
  > .ui-anchorLink-slot {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
