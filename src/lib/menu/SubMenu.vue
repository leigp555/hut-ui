<script setup lang="ts">
import {
  withDefaults,
  defineProps,
  ref,
  useSlots,
  Ref,
  inject,
  toRefs,
  VNode,
  computed
} from 'vue'
import SvgIcon from '../common/SvgIcon.vue'

const props = withDefaults(
  defineProps<{
    keyValue: string
    paddingLeft?: number
    totalTitle?: string[]
    collapsible: boolean
  }>(),
  {
    paddingLeft: 24,
    totalTitle: () => [],
    collapsible: true
  }
)
const { keyValue } = toRefs(props)
const shouldShow = ref<boolean>(!props.collapsible)
const isActionStart = ref<boolean>(!props.collapsible)
const underSelected = ref<boolean>(!props.collapsible)

const timeId = ref<number | null>(null)
const timeId2 = ref<number | null>(null)

let slots: VNode[] | []
if (useSlots().default) {
  slots = useSlots().default!()
}

const mode = inject<Ref<'column' | 'horizontal'>>('ui_menu_mode')
const selectedKeys = inject<Ref<string[]>>('ui_menu_selectedArr')

// title的hover事件
const onMouseEnter = () => {
  if (mode?.value === 'horizontal') {
    // 先清除定时器这一步很重要不然可能会出现打开弹出层后又自动关闭
    timeId2.value && window.clearTimeout(timeId2.value)
    timeId.value && window.clearTimeout(timeId.value)
    timeId.value = null
    timeId2.value = null
    timeId.value = null
    shouldShow.value = true
    isActionStart.value = true
  }
}
// title的离开事件
const onMouseLeave = () => {
  if (mode?.value === 'horizontal') {
    timeId.value = setTimeout(() => {
      if (!underSelected.value) {
        isActionStart.value = false
        timeId2.value = setTimeout(() => {
          shouldShow.value = false
          timeId2.value && window.clearTimeout(timeId2.value)
        }, 250)
      }
      timeId.value && window.clearTimeout(timeId.value)
    }, 250)
  }
}

// content-inner的hover事件
const innerOnMouseEnter = () => {
  if (mode?.value === 'horizontal') {
    // 先清除定时器这一步很重要不然可能会出现打开弹出层后又自动关闭
    timeId2.value && window.clearTimeout(timeId2.value)
    timeId.value && window.clearTimeout(timeId.value)
    timeId.value = null
    timeId2.value = null
    underSelected.value = true
    shouldShow.value = true
    isActionStart.value = true
  }
}
// content-inner的离开事件
const innerOnMouseLeave = () => {
  if (mode?.value === 'horizontal') {
    underSelected.value = false
    isActionStart.value = false
    const id = setTimeout(() => {
      shouldShow.value = false
      window.clearTimeout(id)
    }, 250)
  }
}

const onClick = () => {
  if (mode?.value !== 'column') return
  if (shouldShow.value) {
    isActionStart.value = false
    const id = setTimeout(() => {
      shouldShow.value = false
      window.clearTimeout(id)
    }, 250)
  } else {
    shouldShow.value = true
    isActionStart.value = true
  }
}

const shouldLight = (item: VNode) => {
  if (selectedKeys?.value && item.props) {
    return selectedKeys?.value.indexOf(item.props.keyValue) >= 0
  }
  return false
}
const shouldTileLight = computed<boolean>(() => {
  if (selectedKeys?.value) {
    return selectedKeys.value.indexOf(keyValue.value) >= 0
  }
  return false
})
</script>

<template>
  <div
    class="ui-subMenu-wrap"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    :class="{ 'ui-subMenu-wrap-column': mode === 'column' }"
  >
    <div
      class="ui-subMenu-title-wrap"
      @click="onClick"
      :style="{ paddingLeft: mode === 'column' ? `${paddingLeft}px` : 0 }"
    >
      <div class="ui-subMenu-title-inner">
        <span v-if="$slots.icon" class="ui-subMenu-icon">
          <slot name="icon" />
        </span>
        <span
          v-if="$slots.title"
          class="ui-subMenu-title"
          :class="{
            'subMenu-no-icon': !$slots.icon,
            'ui-subMenu-title-selected': shouldTileLight
          }"
        >
          <slot name="title" />
        </span>
      </div>

      <span
        v-if="mode === 'column' && collapsible"
        class="ui-subMenu-content-open-icon"
        :class="{ 'subMenu-content-open': isActionStart }"
      >
        <SvgIcon name="down" height="1em" width="1em" />
      </span>
    </div>

    <div class="ui-subMenu-content" v-show="shouldShow">
      <Transition name="subMenu">
        <div
          class="ui-subMenu-content-inner"
          v-show="isActionStart"
          @mouseenter="innerOnMouseEnter"
          @mouseleave="innerOnMouseLeave"
        >
          <div
            v-for="item in slots"
            :key="item"
            :class="{
              'ui-subMenu-item-selected': shouldLight(item)
            }"
          >
            <Component
              :is="item"
              :paddingLeft="paddingLeft + 24"
              :totalTitle="[...totalTitle, keyValue]"
            />
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss">
.ui-subMenu-wrap {
  display: flex;
  align-items: center;
  line-height: 46px;
  text-align: left;
  background: #fff;
  position: relative;
  > .ui-subMenu-title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .ui-subMenu-content-open-icon {
      transform: rotate(-180deg);
      transition: all 250ms linear;
      &.subMenu-content-open {
        transform: rotate(0);
        fill: #1890ff;
      }
    }
    > .ui-subMenu-title-inner {
      display: flex;
      align-items: center;
      > .ui-subMenu-icon {
        min-width: 14px;
        font-size: 14px;
        display: flex;
        align-items: center;
      }
      > .ui-subMenu-title {
        margin-left: 10px;
        white-space: nowrap;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        &.ui-subMenu-title-selected {
          color: #1890ff;
        }
        &.subMenu-no-icon {
          margin-left: 0;
        }
      }
    }
  }

  > .ui-subMenu-content {
    position: absolute;
    bottom: -7px;
    left: 0;
    z-index: 100;
    color: #000000d9;
    background-color: #fff;
    min-width: 160px;
    width: 100%;
    max-height: calc(100vh - 100px);
    transform: translateY(100%);
    transform-origin: top;
    > .ui-subMenu-content-inner {
      border-radius: 2px;
      overflow-x: hidden;
      overflow-y: auto;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
        0 9px 28px 8px #0000000d;
      transform-origin: top;
      > .ui-subMenu-item-selected {
        background-color: #e6f7ff;
      }
    }
  }
}
.subMenu-enter-from,
.subMenu-leave-to {
  opacity: 0;
  transform: scale(1, 0.6);
}
.subMenu-enter-active,
.subMenu-leave-active {
  transition: all 250ms;
}

//垂直菜单样式
.ui-subMenu-wrap {
  &.ui-subMenu-wrap-column {
    flex-direction: column;
    .ui-subMenu-title-wrap {
      width: 100%;
      padding: 0 24px 0 24px;
    }
    .ui-subMenu-content {
      position: relative;
      top: 0;
      left: 0;
      transform: none;
      > .ui-subMenu-content-inner {
        box-shadow: none;
        background: #fafafa;
      }
    }
  }
}
</style>
