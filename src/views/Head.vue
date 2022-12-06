<template>
  <div class="wrap">
    head
    <router-link to="/home">go home</router-link>
    <router-link to="/components">go components</router-link>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  display: flex;
  gap: 100px;
  background: orange;
}
</style>
