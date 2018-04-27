<template>
	<div class="shopcar">
    <h3>
        <span class="option"></span>
				<span class="title">购物车</span>
				<span class="option">删除</span>
    </h3>
    <ul class="content">
      <li v-for="(item,i) in selectList" :key="i">
        <div class="opt">
          <input class="magic-radio" type="checkbox" name="radio" id="r1" value="option1">
          <label for="r1"></label>
        </div>
        <img class="good-img" :src="item.goods_image" alt="">
        <div class="right-part">
          <div class="good-name">{{item.goods_name}}</div>
          <div class="good-info">
            <span>{{item.standard_name}}</span>
            <span>{{item.goods_type_name}}</span>
          </div>
          <div class="good-price-nums">
            <span class="good-price">{{item.retail_price}}</span>
            <div>{{item.num}}</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="balance-bar">
      <div class="left-part">
        <div class="opt">
          <input class="magic-radio" type="checkbox" name="radio" id="r" value="option">
          <label for="r">全选</label>
        </div>
      </div>
      <div class="account">
        <div class="total-tips">
          <div class="total">合计：</div>
          <div class="tips">不含运费</div>
        </div>
        <span class="sum">￥5,800.00 </span>
      </div>
      <div class="btn-account" @click="toPay()">去结算</div>
    </div>
		<v-Footer/>
	</div>
</template>

<script>
import store from '@/mobile/store';
export default {
  data(){
    return{
      store,
      selectList: store.state.selectList,
    }
  },
  created(){
    
  },
  methods: {
    toPay() {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/common/common.scss";
@import "~@/assets/common/dpr.scss";
//checkbox样式
.opt {
  height: (40rem/75);
  margin: (30rem/75) 0;
  .magic-radio {
    position: absolute;
    display: none;
  }
  .magic-radio + label {
    position: relative;
    display: block;
    padding-left: 30px;
    @include flex-center();
    @include dpr-fz(28px);
    color: #999;
  }
  .magic-radio + label:before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: (36rem/75);
    height: (36rem/75);
    content: "";
    border: 0.02rem solid #c0c0c0;
    border-radius: 50%;
  }
  .magic-radio + label:after {
    position: absolute;
    display: none;
    content: "";
    top: (6rem/75);
    left: (6rem/75);
    width: (24rem/75);
    height: (24rem/75);
    border-radius: 50%;
    background: #e63131;
  }
  .magic-radio:checked + label:before {
    border: 0.02rem solid #e63131;
  }
  .magic-radio:checked + label:after {
    display: block;
  }
}
.shopcar {
  height: 100vh;
  width: 100vw;
  background: #f5f5f5;
  h3 {
    height: (75rem/75);
    background: #c83c3b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    @include dpr-fz(32px);
    span {
      min-width: (90rem/100);
      @include dpr-fz(32px);
      &.option {
        @include dpr-fz(26px);
        color: #efc5c5;
      }
    }
  }
  .content {
    height: calc(100vh - 275rem/75);
    overflow-y: scroll;
    li{
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #FFF;
      .opt{

      }
      img{
        display: block;
        width: (150rem/75);
        height: (150rem/75);
        border-radius: 0.2rem;
        border: 0.02rem solid #EEE;
      }
      .right-part{
        width: (450rem/75);
        .good-name{
          color: #333;
          @include dpr-fz(32px);
        }
        .good-info{
          span{
            @include dpr-fz(24px);
            color: #999;
            margin-right: (45rem/75);
          }
        }
      }
    }
  }
  .balance-bar {
    height: (100rem/75);
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-part {
      width: (160rem/75);
      height: 100%;
      padding-left: 0.2rem;
    }
    .account {
      width: (400rem/75);
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .total-tips{
        text-align: center;
        width: 2rem;
        flex: 2;
        .total{
          color: #666;
          @include dpr-fz(32px);
        }
        .tips{
          color: #999;
          @include dpr-fz(20px);
        }
      }
      .sum{
        flex: 3;
        // width: 2rem;
        text-align: center;
        @include dpr-fz(28px);
        color: #b84747;
      }
    }
    .btn-account {
      width: (200rem/75);
      height: (100rem/75);
      @include flex-center();
      @include dpr-fz(28px);
      color: #fff;
      background: #e63131;
    }
  }
}
</style>



