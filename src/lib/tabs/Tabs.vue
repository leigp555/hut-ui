<script setup lang="ts">
import {
  withDefaults,
  defineProps,
  useSlots,
  computed,
  ref,
  onMounted,
  watchEffect
} from 'vue'

const emits = defineEmits(['update:activeKey'])
const props = withDefaults(defineProps<{ activeKey?: string }>(), {
  activeKey: '1'
})
const slots = useSlots().default()
const titleRef = ref<HTMLElement | null>(null)
const indicatorRef = ref<HTMLElement | null>(null)

const titleArr = computed(() => {
  const arr: { title: string; key: string; disabled: boolean }[] = []
  slots.forEach((item) => {
    arr.push({
      title: item.props.tab,
      key: item.props.keyValue,
      disabled: item.props.disabled !== undefined
    })
  })
  return arr
})

const onChange = (e: Event) => {
  const el = e.target as HTMLElement
  const spec = el.getAttribute('data-title')
  if (el.tagName.toLowerCase() === 'div' && spec === 'tabs') {
    const newKey = el.getAttribute('data-key')
    emits('update:activeKey', newKey)
  }
}

onMounted(() => {
  watchEffect(() => {
    const { left: left1 } = titleRef.value!.getBoundingClientRect()
    Array.from(titleRef.value!.children).forEach((item) => {
      const key = item.getAttribute('data-key')
      if (item.tagName.toLowerCase() === 'div' && key && key === props.activeKey) {
        const { width: width2, left: left2 } = item!.getBoundingClientRect()
        indicatorRef.value!.style.width = `${width2}px`
        indicatorRef.value!.style.left = `${left2 - left1}px`
        item.classList.add('select')
      } else {
        item.classList.remove('select')
      }
    })
  })
})
</script>

<template>
  <div class="ui-tabs-wrap">
    <div class="ui-tabs-titles" @click="onChange" ref="titleRef">
      <div
        class="title-item"
        :class="{ disabled: item.disabled }"
        v-for="item in titleArr"
        :key="item"
        data-title="tabs"
        :data-key="item.key"
      >
        {{ item.title }}
      </div>
      <span class="indicator" ref="indicatorRef"></span>
    </div>
    <div class="ui-tabs-contents">
      <TransitionGroup name="tab">
        <div
          class="tab-item"
          v-for="item in slots"
          :key="item"
          :class="{ show: item.props.keyValue === activeKey }"
        >
          <Component :is="item" />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss">
.ui-tabs-wrap {
  display: flex;
  flex-direction: column;
  color: #000000d9;
  line-height: 1.5em;
  font-size: 14px;
  gap: 16px;
  > .ui-tabs-titles {
    position: relative;
    display: flex;
    white-space: nowrap;
    > .indicator {
      display: inline-block;
      position: absolute;
      bottom: 0;
      height: 2px;
      background-color: #1890ff;
      transition: all 0.3s;
    }
    > .title-item {
      display: inline-flex;
      align-items: center;
      padding: 12px 0;
      font-size: 14px;
      background: transparent;
      cursor: pointer;
      user-select: none;
      &.select {
        color: #1890ff;
      }
      &.disabled {
        pointer-events: none;
        color: #00000040;
        cursor: default;
      }
      &:not(:first-child) {
        margin-left: 32px;
      }
    }
  }
  > .ui-tabs-contents {
    > .tab-item {
      display: none;
      &.show {
        display: block;
      }
    }
  }
}

.tab-enter-active,
.tab-leave-active {
  transition: all 0.5s ease;
}
.tab-enter-from,
.tab-leave-to {
  opacity: 0;
}
</style>
