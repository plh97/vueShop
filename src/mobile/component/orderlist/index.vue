<template>
	<div class="orderlist">
    <v-Header title="我的订单" option=""/>
		<ul class="header">
      <router-link tag="li"  :to="`/${company}/orderlist/all`" exact>
        全部
      </router-link>
      <router-link tag="li" :to="`/${company}/orderlist/being`">
        待付款
      </router-link>
      <router-link tag="li" :to="`/${company}/orderlist/took`">
        待收货
      </router-link>
      <router-link tag="li" :to="`/${company}/orderlist/return`">
        已退货
      </router-link>
		</ul>
<transition name="fade1">
  <router-view></router-view>
</transition>
	</div>
</template>
<script>
import store from "@/mobile/store";
import numFormat from "@/assets/common/dom"; //金额格式化
export default {
  store,
  data() {
    return {
      company: store.state.company,
    };
  },
  mounted() {
    store.commit("orderlist");
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/common/common.scss";
@import "~@/assets/common/dpr.scss";
@import "~@/assets/common/color.scss";
.orderlist {
  @include dpr-fz(20px);
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;

  ul.header {
    background-color: $fst-red;
    color: #fff;
    width: 100%;
    height: (80rem/75);
    padding: 0 0.5rem;
    box-shadow: 0 6px 9px -4px #cdcdcd;
    @include flex-center();
    @include dpr-fz(32px);
    align-items: stretch;
    justify-content: space-around;
    position: relative;
    li {
      width: 1.5rem;
      @include flex-center();
      box-sizing: border-box;
      margin: 0 0.4rem;
      opacity: 0.5;

      &.active {
        opacity: 1;
        border-bottom: 0.10666667rem solid #ffffff;
      }
    }
  }
}
</style>
