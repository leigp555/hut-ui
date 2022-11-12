<script setup lang="ts">
import { withDefaults, defineProps, toRefs, ref, watch } from 'vue'
import SvgIcon from '../common/SvgIcon.vue'

const emits = defineEmits(['change'])
const props = withDefaults(
  defineProps<{ keyValue: string; header: string; currentKey?: string[] }>(),
  {}
)
const { keyValue, currentKey } = toRefs(props)

const divRef = ref<HTMLDivElement>(null)
const divRef2 = ref<HTMLDivElement>(null)

const headerClick = () => {
  if (currentKey?.value[0] !== keyValue.value) {
    emits('change', [keyValue.value])
  } else {
    emits('change', [])
  }
}

watch(currentKey, () => {
  if (currentKey?.value[0] === keyValue.value) {
    divRef2.value.style.height = `${divRef.value.getBoundingClientRect().height}px`
  } else {
    divRef2.value.style.height = `${0}px`
  }
})
</script>

<template>
  <div class="ui-panel-wrap">
    <div class="ui-panel-header" @click="headerClick">
      <span :class="{ 'icon-down': currentKey[0] === keyValue }">
        <SvgIcon name="down" width="1em" height="1em" />
      </span>
      <p>{{ header }}</p>
    </div>
    <div
      class="ui-panel-content"
      ref="divRef2"
      :class="{ 'content-open': currentKey[0] === keyValue }"
    >
      <div class="panel-content" ref="divRef">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ui-panel-wrap {
  display: flex;
  flex-direction: column;
  > .ui-panel-header {
    padding: 12px 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 10px;
    align-items: center;
    background-color: #fafafa;
    > span {
      display: flex;
      align-items: center;
      transform: rotate(-90deg);
      transition: all 250ms;
      &.icon-down {
        transform: rotate(0deg);
      }
    }
  }
  > .ui-panel-content {
    line-height: 1.5em;
    background-color: #ffffff;
    height: 0;
    overflow: hidden;
    transition: height 300ms;
    > .panel-content {
      padding: 16px;
    }
  }
}
</style>
