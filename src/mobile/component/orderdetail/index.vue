<template>
  <div class="statement" v-if="detail">
    <v-Header title="订单详情" option="" :leftBackTo="-1"/>
    <div class="content">
      <div class="address">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-address"></use>
        </svg>
        <div>
          <span>广东省珠海市香洲区香洲区府阳光大厦二楼2112室 (香洲区府)</span>
          <p> {{detail.order_owner}} &nbsp;&nbsp; {{detail.phone}} </p> 
        </div>
      </div>
      <div class="lists-box">
        <ul class="goods-list">
          <li class="good-item" v-for="(list,i) in detail.list" :key="i">
            <img class="goodImg" :src="list.goods_image" :onerror="defaultImg">
            <div class="good-info">
              <h1>{{list.goods_name}}</h1>
              <p>{{list.weight}}&nbsp;&nbsp;{{list.wine_type}}</p>
            </div>
            <div class="price-num">
              <p class="current-cost">{{list.real_price | currency}}</p>
              <p class="prime-cost">{{list.price | currency}}</p>
              <p class="good-num">×{{list.num}}</p>
            </div>
          </li>
        </ul>
        <div class="amount">
          共件商品 合计：￥<span></span>
        </div>
        <div class="options">
          <label class="order-status">{{detail.status}}</label>
          
          <button class="delete">
            删除
          </button>
          
          <router-link class="pay" tag="button" :to="`/${company}/statement`">
            付款
          </router-link>

          <!-- <button class="pay">付款</button> -->
          <!-- <button class="return">退货</button>
          <button class="confirm">确认收货</button> -->
        </div>
      </div>

      <div class="balance">
        <ul>
          <li>
            <label>商品总价</label>
            <span>￥62,800.00</span>
          </li>
          <li>
            <label>运费（快递）</label>
            <span>￥0.00</span>
          </li>
          <li>
            <label>优惠金额</label>
            <span>￥62,800.00</span>
          </li>
          <li class="last-line">
            <label>实付款</label>
            <span>￥62,800.00</span>
          </li>
        </ul>
      </div>
      <div class="id-time">
        <ul>  
          <li class="first-line">
            <label>订单号：</label>
            <span>{{detail.order_id}}</span>
          </li>
          <li>
            <label>创建时间：</label>
            <span>2017-11-20  17:30:45</span>
          </li>
          <li>
            <label>付款时间：</label>
            <span>2017-11-20  17:30:45</span>
          </li>
          <li>
            <label>发货时间：</label>
            <span>2017-11-20  17:30:45</span>
          </li>
          <li>
            <label>成交时间：</label>
            <span>2017-11-20  17:30:45</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import store from "@/mobile/store";
import numFormat from "@/assets/common/dom"; //金额格式化
export default {
  store,
  data() {
    return {
      company: store.state.company
    };
  },
  computed: {
		detail: () => store.state.orderlist.find(arr => arr.order_id == router.currentRoute.query.orderid),
    orderlist: () => store.state.orderlist,
    defaultImg: () => store.state.defaultImg,
  },
	created() {
		store.commit('orderlist');
	},
};
</script>

<style lang="scss" scoped>
@import "~@/assets/common/common.scss";
@import "~@/assets/common/dpr.scss";
.statement {
  .content {
    background: #f5f5f5;
    height: calc(100vh - 80rem/75);
    overflow-y: auto;
    .address {
      height: (160rem/75);
      background: #fff;
      margin-bottom: 0.4rem;
      padding: 0.2rem 3vw;
      @include dpr-fz(32px);
      display: flex;
      justify-content: center;
      align-items: flex-start;
      svg {
        color: #c83c3b;
        margin: 0.1rem;
      }
      p {
        @include dpr-fz(26px);
        color: #999;
      }
    }

    .lists-box {
      padding: 0 3vw;
      background: #fff;
      margin-bottom: 0.4rem;
      .goods-list {
        .good-item {
          border-bottom: 0.03rem solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 0.2rem 0;

          img {
            width: (150rem/75);
            height: (150rem/75);
            border: 0.03rem solid #eee;
            border-radius: 0.1rem;
          }
          .good-info {
            width: (340rem/75);
            h1 {
              @include dpr-fz(32px);
              color: #666;
            }
            p {
              @include dpr-fz(26px);
              color: #999;
            }
          }
          .price-num {
            width: (176rem/75);
            text-align: right;
            .current-cost {
              @include dpr-fz(30px);
              color: #666;
            }
            .prime-cost {
              @include dpr-fz(26px);
              color: #999;
              text-decoration: line-through;
            }
            .good-num {
              @include dpr-fz(26px);
              color: #666;
            }
          }
        }
      }
      .amount {
        text-align: right;
        @include dpr-fz(26px);
        color: #666;
        padding: 0.2rem 0;
        border-bottom: 0.03rem solid #eee;
        span {
          @include dpr-fz(30px);
        }
      }
      .options {
        text-align: right;
        padding: 0.2rem 0;
        button {
          width: (150rem/75);
          height: (60rem/75);
          border: 0.03rem solid #ccc;
          border-radius: 0.1rem;
          background: none;
          @include dpr-fz(26px);
          color: #666;
          margin-left: 0.1rem;
          &.pay,
          &.return {
            border: 0.03rem solid #e63131;
            color: #e63131;
          }
          &.confirm {
            border: 0.03rem solid #d9a656;
            color: #d9a656;
          }
        }
        .order-status {
          @include dpr-fz(34px);
          color: #c83c3b;
          float: left;
        }
      }
    }
    .balance {
      background: #fff;
      ul {
        width: 94vw;
        margin: 0.4rem 3vw;
        padding: 0.2rem 0;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          @include dpr-fz(24px);
          color: #999;
          margin: 0.1rem 0;
          &.last-line {
            @include dpr-fz(28px);
            label {
              color: #333;
            }
            span {
              color: #c83c3b;
            }
          }
        }
      }
    }
    .id-time {
      background: #fff;
      ul {
        width: 94vw;
        margin: 0.4rem 3vw;
        padding: 0.2rem 0;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          @include dpr-fz(24px);
          color: #999;
          margin: 0.1rem 0;
          &.first-line {
            @include dpr-fz(28px);
            color: #333;
          }
        }
      }
    }
  }
}
</style>
