<template>
  <div class="ui-template-wrap scroll-container" ref="wrap">
    <Anchor
      customClass="customClass"
      style="top: 100px; right: 20px"
      :scroll-container="() => wrap"
    >
      <AnchorLink href="#a" title="Lorem" />
      <AnchorLink href="#b" title="Dolor" />
      <AnchorLink href="#c" title="Voluptas" />
      <AnchorLink href="#d" title="Sunt" />
      <AnchorLink href="#d_a" title="Amet" />
      <AnchorLink href="#d_b" title="Totam" />
      <AnchorLink href="#e" title="Officia" />
    </Anchor>
    <section>
      <div class="xx" id="a">
        <h3>我是a导航</h3>
        <p v-for="item in 2" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>
      <div class="xx" id="b">
        <h3>我是b导航</h3>
        <p v-for="item in 4" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>
      <div class="xx" id="c">
        <h3>我是c导航</h3>
        <p v-for="item in 4" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>

      <div id="d" class="xx">
        <h3>我是d导航</h3>
        <p v-for="item in 4" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>
      <div id="d_a" class="xx">
        <h3>我是d_a导航</h3>
        <p v-for="item in 4" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>

      <div id="d_b" class="xx">
        <h3>我是d_b导航</h3>
        <p v-for="item in 4" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>
      <div class="xx" id="e">
        <h3>我是e导航</h3>
        <p v-for="item in 10" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Anchor from '@/lib/anchor/Anchor.vue'
import AnchorLink from '@/lib/anchor/AnchorLink.vue'

const wrap = ref<HTMLElement | null>(null)
</script>

<style lang="scss">
.ui-template-wrap {
  overflow-y: auto;
  max-height: 100%;
  scroll-behavior: smooth;
  p {
    line-height: 2em;
  }
  .xx {
    margin-bottom: 40px;
    padding: 0 50px;
  }
}
</style>
