<template>
	<div class="usercenter">
		<div class="user-header">
			<div class="header-set">
				<router-link tag="span" :to="`/${company}/vipcard`">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-erweima"></use>
					</svg> 
				</router-link>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-tuichu1"></use>
				</svg>  
			</div>
			<div class="header-cen">
				<router-link tag="span" :to="`/${company}/message`">
					<img :src="myInfo.avatarUrl" :onerror="defaultImg">
				</router-link>
				<span>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-set"></use>
					</svg>  
				</span>
				<span>{{myInfo.name}}</span>
			</div>
		</div>
		<div class="user-account">
			<div class="acco-mess">
				<h3>我的账号</h3>
				<router-link tag="em" :to="`/${company}/account`">
					查看
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-arrowright"></use>
					</svg>
				</router-link>
			</div>
			<div class="acco-age">
				<ul>
					<li>
						<em>0</em>
						<span>余额</span>
					</li>
					<li>
						<em>0</em>
						<span>容积分</span>
				
					</li>
					<router-link tag="li" :to="`/${company}/ourcoupon`">
						<em>0</em>
						<span>优惠券</span>
					</router-link>
				</ul>
			</div>

			<div class="acco-mess">
				<h3>我的订单</h3>
				<router-link tag="em" :to="{ path: `/${company}/orderlist/all` }">
					查看
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-arrowright"></use>
					</svg>
				</router-link>
			</div>
			<div class="acco-age">
				<ul>
					<router-link tag="li" :to="{ path: `/${company}/orderlist/being` }">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-moban"></use>
						</svg>
						<span>待付款</span>
					</router-link>
					<router-link tag="li" :to="{ path: `/${company}/orderlist/took` }">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-daishouhuo1"></use>
						</svg>
						<span>待收货</span>
					</router-link>
					<router-link tag="li" :to="{ path: `/${company}/orderlist/return` }">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-huowu1"></use>
						</svg>
						<span>已退货</span>
					</router-link>
				</ul>
			</div>
			<div class="acco-mess">
				<h3>分销推广</h3>
				<router-link tag="em" :to="`/${company}/earnlist`">
					查看
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-arrowright"></use>
					</svg>
				</router-link>
			</div>
			<div class="acco-age">
				<ul>
					<router-link tag="li" :to="`/${company}/scanQrcode`">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-zizhutuiguang"></use>
						</svg>
						<span>我要推广</span>
					</router-link>
					<router-link tag="li" :to="`/${company}/ourteam`">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-tubiao-"></use>
						</svg>
						<span>我的团队</span>
					</router-link>
					<router-link tag="li" :to="`/${company}/earnlist`">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-Performance"></use>
						</svg>
						<span>推广业绩</span>
					</router-link>
				</ul>
			</div>

			<div class="acco-mess">
				<h3>我的礼品卡</h3>
				<router-link tag="em" :to="`/${company}/giftcard`">
					查看
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-arrowright"></use>
					</svg>
				</router-link>
			</div>
		</div>
		<v-Footer/>
	</div>
</template>

<script>
import store from "@/mobile/store";
export default {
  store,
  data() {
    return {
      defaultImg: store.state.defaultImg,
			myInfo: store.state.myInfo,
      company: store.state.company
    };
  },
};
</script>

<style  lang="scss">
@import "~@/assets/common/dpr.scss";
.usercenter {
  background-color: #f5f5f5;
  width: 100%;
  min-height: calc(100vh - 1.333rem);
  margin-bottom: 1.3333rem;

  .user-header {
    height: (380rem/75);
    background: url("~@/assets/images/fst/bu_cen.png") no-repeat center;
    background-size: 100%;
    .header-set {
      padding: (24rem/75) (24rem/75) 0 (24rem/75);
      display: flex;
      justify-content: space-between;
      svg.icon {
        @include dpr-fz(48px);
        color: #9d9a9a;
      }
    }
    .header-cen {
      @include dpr-fz(38px);
      color: #fff;
      font-family: HiraginoSansGB-W3;
      display: flex;
      align-items: center;
      flex-direction: column;

      span:nth-of-type(1) {
        width: (180rem/75);
        height: (180rem/75);
        display: inherit;
        margin: auto;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      span:nth-of-type(2) {
        position: relative;
        top: (-45rem/75);
        right: (-70rem/75);
        svg.icon {
          @include dpr-fz(50px);
          background: #fff;
          color: #999;
          border-radius: 50%;
        }
      }
      span:nth-of-type(3) {
        margin-top: (-45rem/75);
      }
    }
  }
  .user-account {
    font-family: HiraginoSansGB-W3;
    margin-bottom: (6rem/75);
    background-color: #fff;
    // height: calc(100vh - 480rem/75);
    // overflow-y: scroll;
    .acco-mess {
      height: (100rem/75);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 (24rem/75);
      border-bottom: 0.01rem solid #eee;
      h3 {
        height: (46rem/75);
        padding-left: (15rem/75);
        @include dpr-fz(34px);
        color: #333333;
        line-height: (46rem/75);
        border-left: (8rem/75) solid #f9ecde;
      }
      em {
        @include dpr-fz(24px);
        color: #999;
      }
    }
  }
  .acco-age {
    border-bottom: 0.1rem solid #f5f5f5;
    ul {
      align-items: center;
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: (120rem/75);
      li {
        // height: (70rem/75);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      em {
        color: #333333;
        @include dpr-fz(28px);
      }
      svg.icon {
        @include dpr-fz(56px);
      }
      span {
        color: #666666;
        @include dpr-fz(24px);
      }
    }
  }
}
</style>


