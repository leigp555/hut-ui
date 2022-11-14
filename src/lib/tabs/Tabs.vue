<template>
  <div class="ui-tabs-wrap">
    <div class="ui-tabs-titles" @click="onChange">
      <div
        class="title-item"
        v-for="item in titleArr"
        :key="item"
        data-title="tabs"
        :data-key="item.key"
      >
        {{ item.title }}
      </div>
      <div class="indicator" ref="indicatorRef"></div>
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

<script setup lang="ts">
import { withDefaults, defineProps, useSlots, computed, ref } from 'vue'

const emits = defineEmits(['update:activeKey'])
withDefaults(defineProps<{ activeKey?: string }>(), {
  activeKey: '1'
})
const slots = useSlots().default()
const indicatorRef = ref<HTMLElement | null>(null)

const titleArr = computed(() => {
  const arr: { title: string; key: string }[] = []
  slots.forEach((item) => {
    arr.push({ title: item.props.tab, key: item.props.keyValue })
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
</script>

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
    transition: transform 0.3s;
    white-space: nowrap;
    > .indicator {
      position: absolute;
      width: 32px;
      bottom: 0;
      height: 2px;
      background-color: #1890ff;
    }
    > .title-item {
      display: inline-flex;
      align-items: center;
      padding: 12px 0;
      font-size: 14px;
      background: transparent;
      cursor: pointer;
      user-select: none;
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
