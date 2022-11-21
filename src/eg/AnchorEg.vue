<template>
  <div class="ui-template-wrap">
    <Anchor>
      <AnchorLink href="#a" title="A" />
      <AnchorLink href="#b" title="B" />
      <AnchorLink href="#c" title="C" />
      <AnchorLink href="#d" title="D" />
      <AnchorLink href="#d_a" title="D_A" />
      <AnchorLink href="#d_b" title="D_B" />
      <AnchorLink href="#e" title="E" />
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
import Anchor from '@/lib/anchor/Anchor.vue'
import AnchorLink from '@/lib/anchor/AnchorLink.vue'
</script>

<style lang="scss">
.ui-template-wrap {
  p {
    line-height: 2em;
  }
  .xx {
    margin-bottom: 40px;
    padding: 0 50px;
  }
}
</style>
