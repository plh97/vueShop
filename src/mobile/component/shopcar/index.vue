<template>
	<div class="shopcar">
    <h3>
      <span class="option"></span>
      <span class="title">购物车</span>
      <span @click="deleted" class="option">删除</span>
    </h3>
    <div class="content">
      <v-label
        :key="i"
        :id="i"
        class="left-part"
        v-model="selected"
        v-for="(item,i) in $store.state.selectList"
      >
        <img class="good-img" :src="item.goods_image" :onerror="defaultImg" >
        <div class="right-part">
          <div class="good-name">{{item.goods_name}}</div>
          <div class="good-info">
            <span>{{item.standard_name}}</span>
            <span>{{item.goods_type_name}}</span>
          </div>
          <div class="good-price-nums">
            <span class="good-price">{{item.retail_price * item.num | currency}}</span>
            <InputNum 
              @add="add"
              @reduce="reduce"
              :value='item.num'
              :index='i'
            />
          </div>
        </div>
      </v-label>
    </div>
    <div class="balance-bar">
      <label class="left-part" for="all">
        <input @click="selectAll" type="checkbox" name="radio" id="all" value="true"/>
        全选
      </label>
      <div class="account">
        <div class="total-tips">
          <div class="total">合计：</div>
          <div class="tips">不含运费</div>
        </div>
        <span class="sum">
          {{totalPrice | currency}}
        </span>
      </div>
      <div class="btn-account" @click="toPay">去结算</div>
    </div>
		<v-Footer/>
	</div>
</template>

<script>
import store from '@/mobile/store';
export default {
  store,
  data(){
    return {
      store,
      selected: [],
    }
  },
  watch: {
    // 如果 `selected` 发生改变，这个函数就会运行
    selected: function (next, pre ) {
      
      if(next.length === document.querySelectorAll('.content > label').length) {
        // 点击全选
        this.$el.querySelector('.balance-bar .left-part input').checked = true;
      } else {
        this.$el.querySelector('.balance-bar .left-part input').checked = false;
      }
    }
  },
  computed: {
    defaultImg: () => store.state.defaultImg,
    totalPrice: function(e) {
      return store.state.selectList
        .filter((arr,i)=> this.selected.map(i=>(Number(i))).includes(i))
        .reduce((total , arr) => total + arr.num * arr.retail_price , 0)
    } 
  },
  methods: {
    add(num) {
      store.state.selectList[num].num += 1;
      store.commit('syncSession','selectList');
    },
    reduce(num){
      if (store.state.selectList[num].num === 1) return;
      store.state.selectList[num].num -= 1;
      store.commit('syncSession','selectList');
    },
    selectAll(e,a) {
      if(e.target.checked){
        // 选中的，再点
        [...this.$el.querySelectorAll(`.content input[type=checkbox]:not(:checked)`)]
          .forEach(dom => dom.click());
        this.selected = [...this.$el.querySelectorAll(`.content input[type=checkbox]`)]
          .map(dom=>dom.id);
      } else {
        [...this.$el.querySelectorAll(`.content input[type=checkbox]:checked`)]
          .forEach(dom => dom.click());
        this.selected = [];
      }
    },
    toPay() {

    },
    deleted(e) {
      store.state.selectList = store.state.selectList.filter( (e,i) => !this.selected.includes(i) );
      // this.selected = [];
      store.commit('syncSession','selectList');
      // store.commit("syncState", {
      //   stateName: "selectList",
      //   stateValue: [...store.state.selectList].filter( (e,i) => !that.selected.includes(i) ),
      // });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/common/common.scss";
@import "~@/assets/common/dpr.scss";
//checkbox样式
  .magic-radio {
    position: absolute;
    display: none;
  }
  .magic-radio + span {
    display: inline-block;
    @include flex-center();
    @include dpr-fz(28px);
    color: #999;
    margin: 10px;
    position: relative;
  }
  .magic-radio + span:before {
    display: inline-block;
    width: (36rem/75);
    height: (36rem/75);
    content: "";
    border: 0.02rem solid #c0c0c0;
    border-radius: 50%;
  }
  .magic-radio + span:after {
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
  .magic-radio:checked + span:before {
    border: 0.02rem solid #e63131;
  }
  .magic-radio:checked + span:after {
    display: block;
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
    

    label {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #FFF;
      height: (240rem/75);
      
      img {
        display: block;
        width: (200rem/75);
        height: (200rem/75);
        border-radius: 0.2rem;
        border: 0.02rem solid #EEE;
      }
      .right-part {
        width: (450rem/75);
        display: flex;
        flex-direction: column;
        height: 80%;

        .good-name {
          flex: 5;
          color: #333;
          @include dpr-fz(28px);
        }

        .good-info {
          flex: 3;
          span{
            @include dpr-fz(24px);
            color: #999;
            margin-right: (45rem/75);
          }
        }
        .good-price-nums {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .good-price {
            color: #B84747;
            @include dpr-fz(28px);
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
      @include flex-center();
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



