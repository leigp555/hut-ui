<script setup lang="ts">
import { withDefaults, defineProps, useSlots, toRefs, onMounted, ref } from 'vue'

const emits = defineEmits(['change', 'update:init'])
const props = withDefaults(
  defineProps<{
    autoPlay?: boolean
    duration?: number
    init?: number
    dot?: boolean
    direction?: 'forward' | 'back'
    indicator?: boolean
  }>(),
  {
    autoPlay: true,
    duration: 3000,
    init: 0,
    dot: true,
    direction: 'forward',
    indicator: true
  }
)

const slots = useSlots().default()

const { init, direction, duration, autoPlay } = toRefs(props)

const olRef = ref<HTMLOListElement | null>(null)
const contentRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (autoPlay.value) {
    setInterval(() => {
      if (direction.value === 'forward') {
        if (init.value + 1 > slots.length) {
          emits('update:init', 1)
        } else {
          emits('update:init', init.value + 1)
        }
      } else if (direction.value === 'back') {
        if (init.value - 1 <= 0) {
          emits('update:init', slots.length)
        } else {
          emits('update:init', init.value - 1)
        }
      }
    }, duration.value)
  }
  const el = olRef.value as HTMLOListElement
  contentRef.value.style.height = `${el.children[0].getBoundingClientRect().height}px`
})
</script>

<template>
  <div class="ui-carousel-wrap">
    <div class="ui-carousel-content" ref="contentRef">
      <ol ref="olRef">
        <TransitionGroup name="list">
          <li
            v-for="(item, index) in slots"
            :key="item"
            class="ui-carousel-item"
            v-show="init - 1 === index"
          >
            <Component :is="item" />
          </li>
        </TransitionGroup>
      </ol>
    </div>
  </div>
</template>

<style lang="scss">
.ui-carousel-wrap {
  display: flex;
  align-items: center;
  > .ui-carousel-content {
    width: 100%;
    position: relative;
    overflow: hidden;
    ol {
      list-style: none;
      width: 100%;
      > .ui-carousel-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 500ms;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
