<template>
  <div class="ui-anchor-wrap">
    <div id="a" class="xx">
      <p v-for="item in 3" :key="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
        consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
        saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
      </p>
    </div>
    <div id="b" class="xx">
      <p v-for="item in 3" :key="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
        consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
        saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
      </p>
    </div>
    <div id="c" class="xx">
      <p v-for="item in 3" :key="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
        consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
        saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
      </p>
    </div>
    <div id="d" class="xx">
      <p v-for="item in 3" :key="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
        consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
        saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
      </p>
    </div>
    <div id="e" class="xx">
      <p v-for="item in 3" :key="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
        consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
        saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

withDefaults(defineProps<{}>(), {})
</script>

<style lang="scss">
.ui-anchor-wrap {
  p {
    line-height: 2em;
  }
}
</style>
