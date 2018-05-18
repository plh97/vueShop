<template>
	<div class="vip-card">
		<v-Header title="我的会员卡" backto="usercenter"/>
		<div class="code-body">
			<div class="bg-border">
        <img class="card" src="https://static.pipk.top/vueshop/public/images/lufa/shareus_vip.png" alt="">
        <div class="vip-info-box">
          <div class="vip-info">
            <img class="avator-img" :src="myInfo.avatarUrl" :onerror="defaultImg">
            <div class="name-integral">
              <h1 class="user-name">{{myInfo.name}}</h1>
              <label>积分：120,000</label>
            </div>
            <div>
              <label>等级</label>
              <h1 class="grade">青铜</h1>
            </div>
          </div>
          <div class="qr-code"></div>
          <p>扫码识别</p>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
import store from "@/mobile/store";

export default {
  data() {
    return {
      myInfo: store.state.myInfo,
      defaultImg: store.state.defaultImg
    };
  }
};
</script>


<style  lang="scss">
@import "~@/assets/common/dpr.scss";
@import "~@/assets/common/common.scss";
.vip-card {
  .code-body {
    height: calc(100vh - 80rem/75);
    background: #c83c3b;
    overflow: hidden;
    .bg-border {
      max-height: (1150rem/75);
      width: (700rem/75);
      margin: 0 auto;
      background: url("~@/assets/images/lufa/bu_shareus.png") no-repeat
        center/100% 100%;
      .card {
        display: block;
        width: (680rem/75);
        height: (500rem/75);
        margin: 0 auto;
        padding: 0.5rem;
      }
      .vip-info-box {
        width: (400rem/75);
        height: (640rem/75);
        margin: 0.5rem auto;
        .vip-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          .avator-img {
            width: (80rem/75);
            height: (80rem/75);
            border-radius: 50%;
            border: 1px solid #ccc;
          }
          .name-integral {
          }
        }
        .qr-code {
          width: (400rem/75);
          height: (400rem/75);
          border: 1px solid #ccc;
          margin: 0.3rem 0;
        }
        div {
          label {
            @include dpr-fz(24px);
            color: #999;
            float: right;
          }
          .user-name {
            @include dpr-fz(28px);
            color: #333;
          }
          .grade {
            @include dpr-fz(28px);
            color: #c47b3a;
          }
        }
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>