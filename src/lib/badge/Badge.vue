<template>
  <div class="ui-badge-wrap">
    <div class="ui-badge-count"><slot name="count" /></div>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.ui-badge-wrap {
  position: relative;
  display: inline-block;
  > .ui-badge-count {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    font-size: 12px;
    height: 20px;
    min-width: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 0 6px;
    background-color: #ff4d4f;
    border: 1px solid #ffffff;
    max-width: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
