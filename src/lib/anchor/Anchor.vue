<template>
  <div class="ui-anchor-wrap">
    <div class="xx">
      <h3 id="a">我是a导航</h3>
      <p v-for="item in 3" :key="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
        consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
        saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
      </p>
    </div>
    <div class="xx">
      <h3 id="b">我是b导航</h3>
      <p v-for="item in 3" :key="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
        consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
        saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
      </p>
    </div>
    <div class="xx">
      <h3 id="c">我是c导航</h3>
      <p v-for="item in 6" :key="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
        consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
        saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
      </p>
    </div>
    <div class="xx">
      <h3 id="d" ref="dRef">我是d导航</h3>
      <p v-for="item in 3" :key="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
        consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
        saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
      </p>
    </div>
    <div class="xx">
      <h3 id="e">我是e导航</h3>
      <p v-for="item in 3" :key="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
        consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
        saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
      </p>
    </div>
    <button class="button" @click="onClick">导航</button>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref, onMounted } from 'vue'

withDefaults(defineProps<{}>(), {})

const dRef = ref<HTMLElement | null>(null)

// 滑动元素
const onClick = () => {
  dRef.value.scrollIntoView({ behavior: 'smooth' })
}
onMounted(() => {
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Add 'active' class if observation target is inside viewport
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('active')
        }
        // Remove 'active' class otherwise
        else {
          entry.target.classList.remove('active')
        }
      })
    },
    {
      rootMargin: '0px',
      threshold: 0
    }
  )
  // start observing
  intersectionObserver.observe(document.querySelector('#e'))
})
</script>

<style lang="scss">
.ui-anchor-wrap {
  .xx {
    margin-bottom: 40px;
    padding: 10px 50px;
  }
  p {
    line-height: 2em;
  }
  .button {
    position: fixed;
    top: 100px;
    left: 50px;
  }
}
</style>
