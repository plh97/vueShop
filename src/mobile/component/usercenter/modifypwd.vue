<template>
  <div class="modifypwd">
    <v-Header title="修改密码" option="" :leftBackTo="-1"/>
    <div class="content">
      <p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tubiao202"></use>
        </svg>
        <input type="password" placeholder="原密码">
      </p>
      <p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tubiao202"></use>
        </svg>
        <input type="password" placeholder="8~16位新密码">
      </p>
      <p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tubiao202"></use>
        </svg>
        <input type="password" placeholder="请确认一遍新密码">
      </p>
      <button @click="savepwd()">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    savepwd() {}
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/common/dpr.scss";
.modifypwd {
  height: 100vh;
  background: #f5f5f5;
  .content {
    background: #fff;
    p {
      width: 94vw;
      height: (75rem/75);
      margin: 0.1rem 3vw;
      border-bottom: 0.04rem solid #eee;
      @include flex-center();
      svg {
        @include dpr-fz(36px);
        color: #ccc;
        margin: 0 0.4rem 0 0.1rem;
      }
      input {
        width: (600rem/75);
        height: (60rem/75);
        color: #ccc;
        border: none;
        @include dpr-fz(32px);
        padding: 0 0.4rem;
        border-left: 0.04rem solid #eee;
      }
    }
    button {
      @include dpr-fz(32px);
      width: 94vw;
      height: 1rem;
      background: #c83c3b;
      color: #fff;
      border: none;
      border-radius: 0.1rem;
      margin: 0.5rem 3vw;
    }
  }
}
</style>
