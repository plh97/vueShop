<template>
	<section class="return">

		<ul class="lists">
			<li class="list-item" v-for="(orderItem,i) in orderlist" :key='i' v-if="orderItem.status === '已退货'">
				<div class="lists-box">
          <div class="order-info">
            <div class="id-time">
              <label class="order-id">订单号：{{orderItem.order_id}}</label>
              <span class="order-time">下单时间：</span>
            </div>
            <label class="order-status">{{orderItem.status}}</label>
          </div>
          <ul class="goods-list">
            <li class="good-item" v-for="(goodItem,i) in orderItem.list" :key='i'>
              <img class="goodImg" :src="goodItem.goods_image" :onerror="defaultImg">
              <div class="good-info">
                <h1>{{goodItem.goods_name}}</h1>
                <p>{{goodItem.weight}}&nbsp;&nbsp;{{goodItem.type}}</p>
              </div>
              <div class="price-num">
                <p class="current-cost">{{goodItem.primary_dealer_price*goodItem.num | currency}}</p>
                <p class="prime-cost">{{goodItem.retail_price*goodItem.num | currency}}</p>
                <p class="good-num">×{{goodItem.num}}</p>
              </div>
            </li>
          </ul>
          <div class="amount">
            共件商品 合计：￥<span></span>
          </div>
          <div class="options">
            

            <router-link class="detail" tag="button" :to="`/${company}/orderdetail?orderid=${orderItem.order_id}`">
              查看订单
            </router-link>
            <button class="delete">删除</button>
            <!-- <button class="pay">付款</button> -->
            <!-- <button class="return">退货</button> -->
            <!-- <button class="confirm">确认收货</button> -->
          </div>
				</div>
			</li>
		</ul>
		
	</section>
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
  computed: {
    defaultImg: () => store.state.defaultImg,
    orderlist: () => store.state.orderlist.arr
  },
  methods: {
    delList(id) {
      store.commit("syncState", {
        stateName: "orderlist",
        stateValue: {
          arr: this.orderlist.filter(arr => arr.order_id !== id)
        }
      });
      store.commit("syncSession", "orderlist");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/common/common.scss";
@import "~@/assets/common/dpr.scss";
@import "~@/assets/common/color.scss";
@import "./orderlist.scss";
</style>