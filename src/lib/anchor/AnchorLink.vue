<script setup lang="ts">
import {
  withDefaults,
  defineProps,
  toRefs,
  ref,
  Ref,
  inject,
  onMounted,
  watch
} from 'vue'

const props = withDefaults(defineProps<{ title: string; href: string }>(), {})
const { href } = toRefs(props)

const titleRef = ref<HTMLElement | null>(null)
// 滑动元素
const onClick = () => {
  document.querySelector(href.value).scrollIntoView({ behavior: 'smooth' })
}

const scrollDistance = inject<Ref<number>>('ui-anchor-scrollDistance')
const selectedEl =
  inject<Ref<{ el: HTMLElement | null; id: string }>>('ui-anchor-selectedEl')
const changeSelected = inject<Ref<{ el: HTMLElement | null; id: string }>>(
  'ui-anchor-change-selectedEl'
)

onMounted(() => {
  const dom = document.querySelector(href.value) as HTMLElement

  if (!selectedEl.value.el) {
    changeSelected({ el: titleRef.value, id: href.value })
  } else if (document.querySelector(selectedEl?.value.id).offsetTop > dom.offsetTop) {
    changeSelected({ el: titleRef.value, id: href.value })
  }
  selectedEl?.value.el.classList.add('active')
  watch(scrollDistance, () => {
    if (
      dom.offsetTop >= scrollDistance!.value - dom.clientHeight &&
      dom.offsetTop <= scrollDistance!.value + 100
    ) {
      selectedEl?.value.el.classList.remove('active')
      changeSelected({ el: titleRef.value, id: href.value })
      selectedEl?.value.el?.classList.add('active')
    }
  })
})
</script>
<template>
  <div class="ui-anchorLink-wrap">
    <span ref="titleRef" @click="onClick" class="ui-anchorLink-title">{{ title }}</span>
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
