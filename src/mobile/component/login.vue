<template>
	<div class="login" :style = "styles">
    <header class="header">
      <span class="back-btn" @click="go">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-copy"></use>
        </svg>
        返回
      </span>
      <span class="title">{{company}}登录</span>
      <span class="option"></span>
    </header>
    <img class="logo" src="https://static.pipk.top/vueshop/public/images/fst/fst_logo.png">
    <form v-on:submit.prevent>
      <div class="login-box">
        <label>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wode"></use>
          </svg>
          <input type="text" name="username" id="username" placeholder="请输入账号">
        </label>
        <label>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tubiao202"></use>
          </svg>
          <input type="password" name="password" id="password" placeholder="请输入密码">
        </label>
      </div>
      <button class="btn-login" @click="login">登录</button>
    </form>

    <div class="footer">
      <p class="support">&copy;道成科技 提供技术支持</p>
    </div>
	</div>
</template>

<script>
import store from "@/mobile/store";
import router from "@/mobile/router";
import api from "@/api";

let h =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

export default {
  router,
  store,
  data() {
    return {
      company: store.state.company,
      h,
      styles: {
        height: h + "px"
      }
    };
  },
  mounted() {
    // console.log(document.querySelector(".login"));
    // document.querySelector(".login").style.height = h;
    console.log("窗口高度" + h);
  },
  methods: {
    go() {
      router.push(`/${this.company}`);
    },
    async login(e) {
      const myInfo = await api.auth({
        userName: document.querySelector("#username").value,
        passWord: document.querySelector("#password").value
      });
      store.commit("syncState", {
        stateName: "myInfo",
        stateValue: {
          name: "你猜??",
          userName: document.querySelector("#username").value,
          passWord: document.querySelector("#password").value,
          avatarUrl: "",
          address: {
            default: '',
            container: [],
          },
          account: {
            balance: 1000
          }
        }
      });
      store.commit("syncSession", "myInfo");
      router.push(`/${this.company}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/common/dpr.scss";
body {
  display: flex;
  display: -webkit-flex;
  min-height: 100vh;
  flex-direction: column;
}
.login {
  @include dpr-fz(20px);
  background: url("https://static.pipk.top/vueshop/public/images/fst/bg_login.png") no-repeat center/100% 100%;
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

    .back-btn {
      @include flex-center();

      svg {
        @include dpr-fz(24px);
      }
    }

    .title {
      @include dpr-fz(38px);
    }
    .option {
      width: (90rem/75);
    }
  }
  .logo {
    display: block;
    width: (300rem/75);
    height: (360rem/75);
    margin: 0.4rem auto;
  }
  form {
    height: auto;
    .login-box {
      width: (620rem/75);
      height: (300rem/75);
      margin: 1rem auto;
      background: #fff;
      border-radius: 0.1rem;
      display: flex;
      align-items: center;
      flex-direction: column;

      label {
        display: inline-flex;
        width: (500rem/75);
        height: (100rem/75);
        margin: 0.3rem 0.4rem 0;
        // padding: 0.4rem 0;
        align-items: center;
        @include dpr-fz(32px);
        border-bottom: 0.03rem solid #eee;
        svg {
          @include dpr-fz(44px);
          color: #ccc;
          width: (60rem/75);
          border-right: 0.03rem solid #eee;
        }
        input {
          @include dpr-fz(28px);
          border: none;
          width: (400rem/75);
          height: (60rem/75);
          background: none;
          padding: 0 0.2rem;
        }
      }
    }
  }
  .btn-login {
    width: (620rem/75);
    height: (100rem/75);
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
    width: 100%;
    position: relative;
    top: 1.6rem;
  }
}
</style>
