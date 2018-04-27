<template>
	<div class="login">
    <header class="header">
      <span @click="go">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-copy"></use>
        </svg>
        返回
      </span>
      <span class="title">登录</span>
      <span class="option"></span>
    </header>
    <img class="logo" src="~@/assets/images/fst/fst_logo.png" alt="">
    <div class="login-box">
      <p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gerenzhongxin"></use>
        </svg>
        <input type="text" name="username" id="username" placeholder="请输入账号">
      </p>
      <p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tubiao202"></use>
        </svg>
        <input type="password" name="password" id="password" placeholder="请输入密码">
      </p>
    </div>
    <button class="btn-login" @click="login">登录</button>
    <p class="support">道成科技 提供技术支持</p>
	</div>
</template>

<script>
import store from '@/mobile/store';
import router from '@/mobile/router';

export default {
  router,
  store,
  data() {
    return {};
  },

  methods: {
    go() {
      router.push(`/fst`);
    },
    login(e){
      store.state.myInfo = {
        name:'你猜？？',
        userName: document.querySelector('#username').value,
        passWord: document.querySelector('#password').value,
      }
      store.commit('sync','myInfo')
      console.log(router);
      router.push(`/fst`)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/common/dpr.scss";
.login {
  @include dpr-fz(20px);
  background: url("~@/assets/images/fst/bg_login.png") no-repeat center/100%
    100%;
  min-height: 100vh;
  .header {
    left: 0;
    height: (80rem/75);
    top: 0;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #666;
    padding: 0 0.2rem;
    @include dpr-fz(28px);
    .title {
      @include dpr-fz(38px);
    }
    .option {
      min-width: (86rem/75);
    }
  }
  .logo {
    width: (300rem/75);
    height: (360rem/75);
    margin: 1rem 3rem;
  }
  .login-box {
    width: (560rem/75);
    height: (240rem/75);
    margin: 1rem auto;
    background: #fff;
    border-radius: 0.1rem;
    p {
      width: (500rem/75);
      height: (100rem/75);
      margin: 0 (30rem/75);
      padding: 0.4rem 0;
      @include dpr-fz(32px);
      border-bottom: 0.02rem solid #eee;
      svg {
        width: (60rem/75);
        border-right: 0.02rem solid #eee;
      }
      input {
        @include dpr-fz(32px);
        border: none;
        width: (400rem/75);
        height: (60rem/75);
        background: none;
        padding: 0 0.2rem;
      }
    }
  }
  .btn-login {
    width: (560rem/75);
    height: (90rem/75);
    margin: 0 auto;
    display: block;
    color: #b84747;
    background: #fff;
    border: none;
    border-radius: 0.1rem;
    @include dpr-fz(32px);
  }
  .support {
    @include dpr-fz(24px);
    color: #666;
    text-align: center;
    position: absolute;
    bottom: 0.4rem;
    width: (750rem/75);
  }
}
</style>
