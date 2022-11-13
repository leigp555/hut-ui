<template>
  <div class="ui-template-wrap">
    <Empty>
      <template #icon>
        <SvgIcon name="empty1" width="3em" height="3em" />
      </template>
      <template #description>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti
          dolores dolorum ducimus, eos, impedit
        </p>
      </template>
      <template #actions>
        <Button type="primary">back</Button>
      </template>
    </Empty>
    <Empty>
      <template #icon>
        <SvgIcon name="empty2" width="3em" height="3em" />
      </template>
      <template #description>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti
          dolores dolorum ducimus, eos, impedit
        </p>
      </template>
      <template #actions>
        <Button type="primary">back</Button>
      </template>
    </Empty>
    <Empty>
      <template #icon>
        <SvgIcon name="empty3" width="3em" height="3em" />
      </template>
      <template #description>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti
          dolores dolorum ducimus, eos, impedit
        </p>
      </template>
      <template #actions>
        <Button type="primary">back</Button>
      </template>
    </Empty>
  </div>
</template>

<script setup lang="ts">
import Empty from '@/lib/empty/Empty.vue'
import SvgIcon from '@/lib/common/SvgIcon.vue'
import Button from '@/lib/button/Button.vue'
</script>

<style lang="scss">
.ui-template-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
}
</style>
