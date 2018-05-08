<template>
	<div class="goodsdetail">
		<header class="header">
			<span @click="go">
				<svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou-copy"></use>
				</svg>
				返回
			</span>
    </header>
		<div class="container" v-if="detail">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="(img,i) in detail.goods_image_list" :key="i">
					<img :src="img" />
				</mt-swipe-item>
			</mt-swipe>
			<div class="context">
				<div class="fir">
					<span class="left">
						{{detail.goods_name}}
					</span>
					<span class="right">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-woyaotuijian"></use>
						</svg>
						我要分享
					</span>
				</div>
				<div class="sec">
					<span class="title">活动</span>
					<span class="content">圣诞元旦酬宾大优惠...</span>
				</div>
				<div class="thr">
					<span class="title">市场价：<del class="content">￥345</del></span>
					<span class="relly-price">
						￥555
					</span>
				</div>
				<div class="forth">
					<span class="left">
						销量：254
					</span>
					<span class="right">
						当前库存：1,000
					</span>
				</div>
			</div>
			<div class="size" @click="show('size')">
				<span class="left">
					选择规格
				</span>
				<span class="right">
					>
				</span>
			</div>
			<div class="detail">
				<div class="title">
					商品详情
				</div>
				<hr />
				<div class="content" v-for="(img,i) in detail.goods_image_list" :key="i">
					<img :src="img" />
				</div>
			</div>
			<p class="foot-text">已无更多</p>
			<Navbar :goodInfo="detail" />
			<NavbarSize :goodInfo="detail" v-if="$store.state.showWhat==='size'" />
		</div>
		<div class="container" v-else>
			<h1>加载中...</h1>
		</div>
	</div>
</template>

<script>
import store from "@/mobile/store";
import router from "@/mobile/router";
import Navbar from "./Navbar.vue";
import NavbarSize from "./NavbarSize.vue";
export default {
  store,
  router,
  components: {
    Navbar,
    NavbarSize
  },
  data() {
    return {
      showWhat: null,
      company: store.state.company,
      defaultImg: store.state.defaultImg
    };
  },
  computed: {
    home: () => store.state.list,
    detail: () => store.state.list.find(arr => arr.id == router.currentRoute.query.goodId)
  },
  created() {
    store.commit("list");
  },
  methods: {
    go() {
      router.go(-1);
    },
    show(what) {
      store.state.showWhat = what;
    }
  }
};
</script>
<style lang="scss">
.mint-swipe-indicators {
  .mint-swipe-indicator {
    width: 0.2rem;
    height: 0.2rem;
    margin: 0 0.1rem;
  }
}
</style>
<style lang="scss" scoped>
@import "~@/assets/common/dpr.scss";
@import "~@/assets/common/color.scss";

.slash {
  width: 2px;
  background-color: #ccc;
}

.goodsdetail {
  margin-top: (80rem/75);
  margin-bottom: 1rem;
  @include dpr-fz(20px);
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 100vh;

  .header {
    top: 0;
    left: 0;
    z-index: 1;
    color: #999;
    width: 100%;
    position: fixed;
    padding: 0 0.2rem;
    height: (80rem/75);
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    justify-content: space-between;
    @include dpr-fz(28px);

    span {
      svg {
        @include dpr-fz(28px);
        width: 0.1rem;
      }
    }
  }

  .container {
    .mint-swipe {
      height: (400rem/75);
      img {
        width: 100%;
      }
    }

    .context {
      margin-top: 0.1rem;
      padding: (26rem / 75) 0 (26rem / 75) (26rem / 75);
      background-color: #fff;

      .fir {
        @include dpr-fz(34px);
        display: flex;
        flex-direction: row;
        align-items: center;

        .left {
          flex: 1 0 1rem;
          padding-right: (30rem/75);
          border-right: 1px solid #eee;
          color: #333;
        }

        .right {
          color: #999;
          flex: 0 1 2rem;
          @include flex-center();
          flex-direction: column;
          @include dpr-fz(24px);

          svg.icon {
            @include dpr-fz(50px);
          }
        }
      }

      .sec {
        color: #999;
        padding: (10rem/75) 0 (20rem/75);

        .title {
          color: $fst-red;
          font-weight: bold;
        }
      }
      .thr {
        color: #999;
        display: inline-flex;
        flex-direction: column;

        .relly-price {
          color: $fst-red;
          @include dpr-fz(50px);
        }
      }

      .forth {
        @include dpr-fz(22px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .left {
          padding-right: (30rem/75);
          border-right: 1px solid #ccc;
          color: #333;
        }

        .right {
          color: #999;
          @include flex-center();
          flex-direction: column;
          margin-right: (26rem / 75);
        }
      }
    }

    .size {
      margin-top: 0.1rem;
      padding: (26rem / 75);
      background-color: #fff;
      justify-content: space-between;
    }

    .detail {
      margin-top: 0.1rem;
      padding: (26rem / 75);
      background-color: #fff;

      .title {
        //
        display: inline-flex;
        align-items: center;
        height: (46rem/75);
        padding-left: (16rem/75);
        border-left: (8rem/75) solid #f9ecde;
      }

      hr {
        display: block;
        height: 1px;
        border: 0;
        margin: 1em 0;
        padding: 0;
        border-bottom: 1px solid #eeeeee;
      }

      .content {
        img {
          width: 100%;
        }
      }
    }

    .foot-text {
      height: (93rem/75);
      padding-top: (13rem/75);
      text-align: center;
      @include dpr-fz(20px);
      color: #aaaaaa;
      font-family: HiraginoSansGB-W3;
    }
  }
}
</style>