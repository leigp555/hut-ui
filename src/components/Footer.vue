<template>
  <div class="footer">
    <div class="footer-main">
      <h4 class="title">资源</h4>
      <ul>
        <li>
          <a href="https://cn.vuejs.org/guide/introduction.html">Vue</a>
        </li>
        <li>
          <a href="https://cn.vitejs.dev/guide/">Vite</a>
        </li>
        <li>
          <a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html">
            Vue-Router
          </a>
        </li>
        <li>
          <a href="https://pinia.web3doc.top/introduction.html">Pinia</a>
        </li>
      </ul>
    </div>
    <div class="footer-main">
      <h4 class="title">讨论</h4>
      <ul>
        <li>
          <a href="mailto:907090585@qq.com">联系我</a>
        </li>
        <li>
          <a href="mailto:907090585@qq.com">提建议</a>
        </li>
        <li>
          <a href="https://github.com/leigp555/vue-ui/issues/new">报告Bug</a>
        </li>
      </ul>
    </div>
    <div class="footer-main">
      <h4 class="title">社区</h4>
      <ul>
        <li>
          <a href="https://github.com/leigp555/vue-ui">GitHub</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 40px;
  background-color: #f5f7fa;
  padding: 42px 60px;
  display: flex;
  gap: 130px;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 30px;
  }
  > .footer-main {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 3px;
    > .title {
      font-size: 18px;
      font-weight: 500;
    }
    > ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      a {
        text-decoration: none;
        color: inherit;
        white-space: nowrap;
        &:hover {
          color: #1890ff;
        }
      }
    }
  }
}
</style>
