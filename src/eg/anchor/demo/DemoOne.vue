<demo>
示例一
</demo>

<template>
  <div class="ui-template-wrap" ref="wrap">
    <Anchor
      customClass="customClass"
      :scroll-container="() => wrap"
      style="top: 100px; left: 50%"
    >
      <AnchorLink href="#a" title="A_nav" />
      <AnchorLink href="#b" title="B_nav" />
      <AnchorLink href="#c" title="C_nav" />
      <AnchorLink href="#d" title="D_nav" />
      <AnchorLink href="#d_a" title="D_A_nav" nested />
      <AnchorLink href="#d_b" title="D_B_nav" nested />
      <AnchorLink href="#e" title="E_nav" />
    </Anchor>
    <section>
      <div id="a">
        <h3>我是a导航</h3>
        <p v-for="item in 2" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>
      <div id="b">
        <h3>我是b导航</h3>
        <p v-for="item in 4" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>
      <div id="c">
        <h3>我是c导航</h3>
        <p v-for="item in 4" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>

      <div id="d">
        <h3>我是d导航</h3>
        <p v-for="item in 4" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>
      <div id="d_a">
        <h3>我是d_a导航</h3>
        <p v-for="item in 4" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>

      <div id="d_b">
        <h3>我是d_b导航</h3>
        <p v-for="item in 4" :key="item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
          consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia officiis
          saepe sunt tempore voluptas voluptate? A beatae dolores eveniet tempora totam?
        </p>
      </div>
      <div id="e">
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
import { Anchor, AnchorLink } from '@/lib'

const wrap = ref<HTMLElement | null>(null)
</script>

<style lang="scss" scoped>
.ui-template-wrap {
  height: 400px;
  overflow-y: scroll;
  p {
    line-height: 2em;
  }
}
</style>
