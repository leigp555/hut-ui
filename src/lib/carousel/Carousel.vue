<script setup lang="ts">
import {
  withDefaults,
  defineProps,
  useSlots,
  toRefs,
  onMounted,
  ref,
  VNode,
  computed
} from 'vue'
import SvgIcon from '../common/SvgIcon.vue'

const emits = defineEmits(['change', 'update:init'])
const props = withDefaults(
  defineProps<{
    autoPlay?: boolean
    duration?: number
    init?: number
    quickJump?: boolean
    direction?: 'forward' | 'back'
    indicator?: boolean
  }>(),
  {
    autoPlay: false,
    duration: 3000,
    init: 0,
    quickJump: false,
    direction: 'forward',
    indicator: true
  }
)

let slots: VNode[] = []
if (useSlots().default) {
  slots = useSlots().default!()
}

const { init, direction, duration, autoPlay } = toRefs(props)

const olRef = ref<HTMLOListElement | null>(null)
const contentRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (autoPlay.value) {
    setInterval(() => {
      if (direction.value === 'forward') {
        if (init.value + 1 > slots.length) {
          emits('update:init', 1)
          emits('change', 1)
        } else {
          emits('update:init', init.value + 1)
          emits('change', init.value + 1)
        }
      } else if (direction.value === 'back') {
        if (init.value - 1 <= 0) {
          emits('update:init', slots.length)
          emits('change', slots.length)
        } else {
          emits('update:init', init.value - 1)
          emits('change', init.value - 1)
        }
      }
    }, duration.value)
  }
  const el = olRef.value as HTMLOListElement
  if (contentRef.value)
    contentRef.value.style.height = `${el.children[0].getBoundingClientRect().height}px`
})
const indicatorClick = (e: Event) => {
  const el = e.target as HTMLElement
  const spec = el.getAttribute('data-list')
  if (el.tagName.toLowerCase() === 'button' && spec === 'indicator') {
    let order = 0
    if (el && el.getAttribute('data-order')) {
      order = parseInt(el.getAttribute('data-order')!, 10)
    }
    emits('update:init', order)
    emits('change', order)
  }
}
const onBack = () => {
  if (init.value - 1 <= 0) {
    emits('update:init', slots.length)
    emits('change', slots.length)
  } else {
    emits('update:init', init.value - 1)
    emits('change', init.value - 1)
  }
}
const onForward = () => {
  if (init.value + 1 > slots.length) {
    emits('update:init', 1)
    emits('change', 1)
  } else {
    emits('update:init', init.value + 1)
    emits('change', init.value + 1)
  }
}
const actionName = computed(() => {
  if (direction.value === 'forward') {
    return 'carousel-forward'
  }
  return 'carousel-back'
})
</script>

<template>
  <div class="ui-carousel-wrap">
    <div class="ui-carousel-content" ref="contentRef">
      <ol ref="olRef" class="carousel-content">
        <TransitionGroup :name="actionName">
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
      <ol class="ui-carousel-indicator" v-if="indicator" @click="indicatorClick">
        <li v-for="(item, index) in slots.length" :key="item">
          <button
            :class="{ select: index + 1 === init }"
            data-list="indicator"
            :data-order="index + 1"
          />
        </li>
      </ol>
      <div class="carousel-left-icon" @click="onBack" v-if="quickJump">
        <SvgIcon name="left2" width="2em" height="2em" fill="rgba(255,255,255,0.3)" />
      </div>
      <div class="carousel-right-icon" @click="onForward" v-if="quickJump">
        <SvgIcon name="left2" width="2em" height="2em" fill="rgba(255,255,255,0.3)" />
      </div>
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
    > .carousel-content {
      list-style: none;
      width: 100%;
      > .ui-carousel-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
    > .ui-carousel-indicator {
      display: flex;
      justify-content: center;
      gap: 8px;
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      list-style: none;
      button {
        width: 16px;
        height: 3px;
        border-radius: 1px;
        outline: none;
        border: none;
        cursor: pointer;
        opacity: 0.3;
        transition: all 400ms;
        background-color: #ffffff;
        display: block;
        &.select {
          width: 24px;
          opacity: 1;
        }
      }
    }
    > .carousel-left-icon {
      position: absolute;
      cursor: pointer;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      z-index: 10;
    }
    > .carousel-right-icon {
      position: absolute;
      cursor: pointer;
      top: 50%;
      right: 10px;
      transform: translateY(-50%) rotate(180deg);
      z-index: 10;
    }
  }
}

.carousel-forward-enter-active,
.carousel-forward-leave-active {
  transition: all 500ms;
}
.carousel-forward-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.carousel-forward-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.carousel-back-enter-active,
.carousel-back-leave-active {
  transition: all 500ms;
}
.carousel-back-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.carousel-back-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
