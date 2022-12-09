<script setup lang="ts">
import { ref, toRefs, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{ trigger?: 'hover' | 'click' | 'contextmenu' }>(),
  {
    trigger: 'hover'
  }
)
const { trigger } = toRefs(props)
const isOpen = ref<boolean>(false)
const isEnterPop = ref<boolean>(false)
const dropdown_pop_wrap = ref<HTMLElement | null>(null)
const dropdown_wrap_ref = ref<HTMLElement | null>(null)

// 监听click事件
const onClick = () => {
  if (trigger.value === 'click') isOpen.value = !isOpen.value
  if (trigger.value === 'contextmenu') isOpen.value = false
}
const hide = () => {
  if (trigger.value === 'click') {
    const id = setTimeout(() => {
      isOpen.value = false
      window.clearTimeout(id)
    }, 100)
  }
}
// 监听hover事件
const onMouseenter = () => {
  if (trigger.value === 'hover') isOpen.value = true
}
const onMouseleave = () => {
  const outerId = setTimeout(() => {
    if (trigger.value === 'hover' && !isEnterPop.value) {
      const innerId = setTimeout(() => {
        isOpen.value = false
        window.clearTimeout(innerId)
      }, 100)
    }
    window.clearTimeout(outerId)
  }, 100)
}

const onPopMouseenter = () => {
  if (trigger.value === 'hover') isEnterPop.value = true
}
const onPopMouseleave = () => {
  if (trigger.value === 'hover') {
    const id = setTimeout(() => {
      isOpen.value = false
      isEnterPop.value = false
      window.clearTimeout(id)
    }, 100)
  }
}

// 监听contextmenu
const onContextmenu = (e: MouseEvent) => {
  e.preventDefault()
  if (isOpen.value) {
    isOpen.value = false
    setTimeout(() => {
      isOpen.value = true
    }, 50)
  } else {
    isOpen.value = true
  }

  const x = e.clientX - dropdown_wrap_ref.value!.offsetLeft
  const y = e.clientY - dropdown_wrap_ref.value!.getBoundingClientRect().top
  dropdown_pop_wrap.value!.style.top = `${y}px`
  dropdown_pop_wrap.value!.style.left = `${x}px`
}
const popClick = () => {
  const id = setTimeout(() => {
    isOpen.value = false
    window.clearTimeout(id)
  }, 100)
}
</script>

<template>
  <div
    class="ui-dropdown-wrap"
    ref="dropdown_wrap_ref"
    :class="{ 'dropdown-wrap-contextmenu': trigger === 'contextmenu' }"
  >
    <div
      tabindex="-1"
      class="ui-dropdown-tip"
      @click="onClick"
      @blur="hide"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
      @contextmenu="onContextmenu"
    >
      <div style="pointer-events: none">
        <slot />
      </div>
    </div>
    <div
      class="ui-dropdown-pop"
      @mouseenter="onPopMouseenter"
      @mouseleave="onPopMouseleave"
      ref="dropdown_pop_wrap"
      :class="{ 'dropdown-pop-contextmenu': trigger === 'contextmenu' }"
    >
      <Transition name="drawer">
        <div
          class="dropdown-pop-content ui-scroll-container"
          v-show="isOpen"
          @click="popClick"
        >
          <slot name="pop" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
@import '../common/scrollBar.scss';

.ui-dropdown-wrap {
  position: relative;
  color: #000000d9;
  display: inline-block;
  &.dropdown-wrap-contextmenu {
    display: block;
  }
  .ui-dropdown-tip {
    font-size: 14px;
    cursor: pointer;
    user-select: none;
  }
  .ui-dropdown-pop {
    position: absolute;
    bottom: -2px;
    left: 0;
    z-index: 10;
    transform: translateY(100%);
    display: inline-block;
    &.dropdown-pop-contextmenu {
      transform: translateY(0);
      bottom: auto;
      display: block;
    }
    > .dropdown-pop-content {
      min-width: 80px;
      max-height: 180px;
      overflow-y: auto;
      white-space: nowrap;
      padding: 8px 0;
      border-radius: 2px;
      background-color: white;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
        0 9px 28px 8px #0000000d;
      transform-origin: top;
    }
  }
}
.drawer-enter-from,
.drawer-leave-to {
  transform: scale(1, 0.5);
  opacity: 0;
}
.drawer-enter-active,
.drawer-leave-active {
  transition: all 250ms;
}
</style>
