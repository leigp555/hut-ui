<template>
  <ol class="ui-rate-wrap" @click="onClick">
    <li :class="{ selected: value >= 5 }" data-star="5">
      <Icon_star name="star" width="1em" height="1em" />
    </li>
    <li :class="{ selected: value >= 4 }" data-star="4">
      <Icon_star name="star" width="1em" height="1em" />
    </li>
    <li :class="{ selected: value >= 3 }" data-star="3">
      <Icon_star name="star" width="1em" height="1em" />
    </li>
    <li :class="{ selected: value >= 2 }" data-star="2">
      <Icon_star name="star" width="1em" height="1em" />
    </li>
    <li :class="{ selected: value >= 1 }" data-star="1">
      <Icon_star name="star" width="1em" height="1em" />
    </li>
  </ol>
</template>

<script setup lang="ts">
import { defineProps, toRefs, withDefaults } from 'vue'
import { Icon_star } from '@hut-ui/icons-vue'

const emits = defineEmits(['update:value', 'change'])
const props = withDefaults(defineProps<{ value: number }>(), { value: 1 })
const { value } = toRefs(props)

const onClick = (e: Event) => {
  const el = e.target as HTMLLIElement
  if (el.tagName.toLowerCase() === 'li' && el.getAttribute('data-star')) {
    const count = parseInt(el.getAttribute('data-star')!, 10)
    emits('update:value', count)
    emits('change', count)
  }
}
</script>

<style lang="scss">
$start_color: #fadb14;
$normal_color: #f0f0f0;
.ui-rate-wrap {
  list-style: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  flex-flow: row-reverse;
  svg {
    fill: #f0f0f0;
  }
  li {
    transition: all 250ms;
    padding: 0 4px;
    fill: $normal_color;
    font-size: 18px;
    &.selected {
      svg {
        fill: $start_color;
      }
    }
    svg {
      pointer-events: none;
    }
  }
  li:hover {
    svg {
      fill: $start_color;
    }
    transform: scale(1.4);
  }
  > li:hover ~ li {
    svg {
      fill: $start_color;
    }
  }
}
</style>
