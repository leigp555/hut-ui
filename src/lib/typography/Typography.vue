<template>
  <div class="ui-typography-wrap">
    <slot />
  </div>
</template>

<style lang="scss">
.ui-typography-wrap {
  padding: 10px;
  blockquote {
    border-left: 4px solid rgba(100, 100, 100, 0.2);
    padding-left: 0.6em;
  }
  pre {
    width: 100%;
    line-height: 1.5em;
    background-color: #f4f4f4;
    padding: 0.4em 0.6em;
    border-radius: 4px;
  }
  a {
    color: #1890ff;
  }
  ol {
    list-style-type: lower-alpha;
  }
  ul {
    list-style-type: square;
  }
  ol,
  ul {
    margin: 0 0 0 14px;
    padding: 0 0 0 4px;

    > li {
      padding-left: 4px;
    }
  }
}
</style>
