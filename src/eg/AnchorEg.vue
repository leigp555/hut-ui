<template>
  <div class="ui-template-wrap">
    <Anchor style="height: 500px">
      <template #nav>
        <AnchorLink href="#a" title="A" />
        <AnchorLink href="#b" title="B" />
        <AnchorLink href="#c" title="C" />
        <AnchorLink href="#d" title="D">
          <AnchorLink href="#d_a" title="D_A" />
          <AnchorLink href="#d_b" title="D_B" />
        </AnchorLink>
        <AnchorLink href="#e" title="E" />
      </template>
      <section>
        <div class="xx">
          <h3 id="a">我是a导航</h3>
          <p v-for="item in 2" :key="item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
            consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia
            officiis saepe sunt tempore voluptas voluptate? A beatae dolores eveniet
            tempora totam?
          </p>
        </div>
        <div class="xx">
          <h3 id="b">我是b导航</h3>
          <p v-for="item in 4" :key="item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
            consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia
            officiis saepe sunt tempore voluptas voluptate? A beatae dolores eveniet
            tempora totam?
          </p>
        </div>
        <div class="xx">
          <h3 id="c">我是c导航</h3>
          <p v-for="item in 4" :key="item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
            consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia
            officiis saepe sunt tempore voluptas voluptate? A beatae dolores eveniet
            tempora totam?
          </p>
        </div>
        <div class="xx">
          <h3 id="d">我是d导航</h3>
          <p v-for="item in 4" :key="item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
            consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia
            officiis saepe sunt tempore voluptas voluptate? A beatae dolores eveniet
            tempora totam?
          </p>
          <div class="xx">
            <h3 id="d_a">我是d_a导航</h3>
            <p v-for="item in 4" :key="item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
              consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia
              officiis saepe sunt tempore voluptas voluptate? A beatae dolores eveniet
              tempora totam?
            </p>
            <h3 id="d_b">我是d_b导航</h3>
            <p v-for="item in 4" :key="item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
              consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia
              officiis saepe sunt tempore voluptas voluptate? A beatae dolores eveniet
              tempora totam?
            </p>
          </div>
        </div>
        <div class="xx">
          <h3 id="e">我是e导航</h3>
          <p v-for="item in 4" :key="item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis
            consequuntur deserunt dicta, ex, impedit incidunt laboriosam, officia
            officiis saepe sunt tempore voluptas voluptate? A beatae dolores eveniet
            tempora totam?
          </p>
        </div>
      </section>
    </Anchor>
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
    padding: 10px 50px;
  }
}
</style>
