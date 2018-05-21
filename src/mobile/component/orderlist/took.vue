<template>
	<section class="took">
		<ul class="lists">
			<li class="list-item" v-for="(orderItem,i) in orderlist" :key='i' v-if="orderItem.status === '待收货'">
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
            <!-- <button class="delete">删除</button> -->
            <!-- <button class="pay">付款</button> -->
            <button class="return" @click="reback(orderItem)">退货</button>
            <button class="confirm">确认收货</button>
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
    },
    reback(args){
      this.$messagebox.confirm(`你确定要退订单${args.order_id}？`)
        .then(action => {
          this.$toast({
            message: '退货成功',
            position: 'top',
            duration: 1000
          });
          // 修改当前订单 为 退货状态
          store.commit("syncState", {
            stateName: "orderlist",
            stateValue: {
              arr: this.orderlist.map(e => {
                if(e.order_id === args.order_id){
                  return Object.assign({},e,{
                    status:'已退货'
                  })
                }
                return e
              })
            }
          });
          store.commit("syncSession", "orderlist");
          setTimeout(() => {
            router.push(`/${this.company}/orderlist/return`);
          }, 1000);
        },err => {
          this.$toast({
            message: '感谢您的信任~',
            position: 'top',
            duration: 1000
          });
        })
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