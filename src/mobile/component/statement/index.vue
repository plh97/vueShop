<template>
  <div class="statement">
    <v-Header title="确认订单" option="" :leftBackTo="-1" />
    <div class="content">
      <router-link class="address-select" tag="span" :to="`/${company}/address`">
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-address"></use>
          </svg>
          {{defaultAddress}}
        </span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrowright"></use>
        </svg>
      </router-link>

      <div class="pay-method">
        <p>支付方式</p>
        <form for="pay_type">
          <label class="li" for="balance">
            <input type="radio" name="radio" id="balance" value="true" checked="true"/>
            <div></div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-available"></use>
            </svg>
            <span>{{balance | currency}}</span>
          </label>
          <label class="li" for="wx">
            <input type="radio" name="radio" id="wx" value="true"/>
            <div></div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixinzhifu"></use>
            </svg>
            <span>微信钱包</span>
          </label>
          <label class="li" for="alipay">
            <input type="radio" name="radio" id="alipay" value="true"/>
            <div></div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhifubao"></use>
            </svg>
            <span>支付宝</span>
          </label>
          <label class="li" for="bank">
            <input type="radio" name="radio" id="bank" value="true"/>
            <div></div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinhang-yinlian-"></use>
            </svg>
            <span>银联</span>
          </label>
        </form>
      </div>

      <div class="good-list">
        <p>商品列表</p>
        <ul>
          <li v-for="(list, i) in detail.list" :key="i">
            <span>{{list.goods_name}}</span>
            <span>&times;{{list.num}}</span>
            <span>{{list.retail_price | currency}}</span>
          </li>
        </ul>
        <p>共{{totalNum}}件商品&nbsp;&nbsp;总计：<span class="total">{{detail.totalPrice | currency}}</span></p>
      </div>

      <div class="others">
        <ul>
          <li>
            <label>使用优惠券</label>
            <span>
              有<em>1</em>张优惠券可用
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-arrowright"></use>
              </svg>
            </span>
          </li>
          <li>
            <label>配送方式</label>
            <span>
              快递包邮<em>￥0.00</em>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-arrowright"></use>
              </svg>
            </span>
          </li>
          <li>
            <label>备注：</label>
            <textarea name="remarks" placeholder="买家留言（50字以内）" maxlength="50"></textarea>
          </li>
        </ul>
      </div>

      <!-- {{$store.state.orderTemp}} -->

    </div>

    <div class="footer">
      <div class="pay-amount">实付款：<em>{{detail.totalPrice | currency}}</em></div>
      <div @click="submitOrder" class="submit-order">提交订单</div>
    </div>
  </div>
</template>

<script>
import store from "@/mobile/store";
import router from "@/mobile/router";
import numFormat from "@/assets/common/dom"; //金额格式化
export default {
  store,
  data() {
    return {
      company: store.state.company,
      detail: store.state.orderTemp,
      myInfo: store.state.myInfo,
    };
  },
  computed: {
    defaultImg: () => store.state.defaultImg,
    totalNum: ()=> store.state.orderTemp.list
      .reduce((total , arr) => total + arr.num , 0),
    defaultAddress: () => {
      return (typeof store.state.myInfo.address.default === "number" && store.state.myInfo.address.default>=0) ?
        store.state.myInfo.address.container[store.state.myInfo.address.default].address : '点击选择收货地址'
    },
    balance: () => store.state.myInfo.account.balance,
  },
  methods:{
    submitOrder() {
      let selectType = document.querySelector('input:checked').id;
      if(selectType ==='balance'){ // 选择余额支付
        if(store.state.myInfo.account.balance > this.detail.totalPrice){
          // 当余额足够
          this.$messagebox.confirm('确定要用余额支付吗？')
            .then(action => {
              // 按确认
              store.commit("syncState", {
                stateName: "myInfo",
                stateValue: {
                  account: Object.assign({},store.state.myInfo.account,{
                    balance: store.state.myInfo.account.balance - this.detail.totalPrice
                  })
                }
              });
              store.commit("syncSession", "myInfo");
              this.$toast({
                message: '余额支付成功',
                position: 'top',
                duration: 1000
              });
              // 添加订单
              this.addOrder({status: '待收货'});
              router.push(`/${this.company}/orderlist/took`);
            },err=>{
              this.addOrder({status: '待付款'});
              router.push(`/${this.company}/orderlist/being`);
            })
        } else {
          this.$toast({
            message: '余额不足',
            position: 'top',
            duration: 1000
          });
          this.addOrder({status: '待付款'});
          return false;
        }
      } else if (selectType === 'wx') {
        this.$messagebox.confirm('确定要用微信支付吗？')
          .then(action => {
            this.$toast({
              message: '微信支付成功',
              position: 'top',
              duration: 1000
            });
            // 添加订单
            this.addOrder({status: '待收货'});
            router.push(`/${this.company}/orderlist/took`);
          },err=>{
            this.addOrder({status: '待付款'});
            router.push(`/${this.company}/orderlist/being`);
          })
      } else if (selectType === 'alipay') {
        this.$messagebox.confirm('确定要用支付宝支付吗？')
          .then(action => {
            this.$toast({
              message: '支付宝支付成功',
              position: 'top',
              duration: 1000
            });
            // 添加订单
            this.addOrder({status: '待收货'});
            router.push(`/${this.company}/orderlist/took`);
          },err =>{
            this.addOrder({status: '待付款'});
            router.push(`/${this.company}/orderlist/being`);
          })
      } else if (selectType === 'bank') {
        this.$messagebox.confirm('确定要用银联支付吗？')
          .then(action => {
            this.$toast({
              message: '银联支付成功',
              position: 'top',
              duration: 1000
            });
            // 添加订单
            this.addOrder({status: '待收货'});
            router.push(`/${this.company}/orderlist/took`);
          },err => {
            this.addOrder({status: '待付款'});
            router.push(`/${this.company}/orderlist/being`);
          })
      }
    },
    addOrder({status}){
      // 给订单详情添加一段数据
      const isExist = store.state.orderlist.arr.find(a => a.order_id === this.detail.order_id);
      if(isExist){
        // 如果存在
        store.commit("syncState", {
          stateName: "orderlist",
          stateValue: {
            arr: store.state.orderlist.arr.map(e=>{
              if(e.order_id === this.detail.order_id){
                return Object.assign({},e,{
                  status
                })
              }
              return e
            })
          }
        });
      } else {
        // 如果不存在
        store.commit("syncState", {
          stateName: "orderlist",
          stateValue: {
            arr: [
              Object.assign({}, this.detail, {
                status,
                createTime: new Date(),
                payTime: new Date(),
                sendTime: '未定',
                getTime: '未定',
              }),
              ...store.state.orderlist.arr
            ]
          }
        });
      }
      store.commit("syncSession", "orderlist");
      // 清空确认订单缓冲内容
      store.commit("syncState", {
        stateName: "orderTemp",
        stateValue: {
          list:[],
          order_id:'',
          order_owner:'',
          phone:'',
          status:'',
          time:'',
          totalPrice:'',
        }
      });
      store.commit("syncSession", "orderTemp");
    }
  },
  created(){
    const list = store.state.orderTemp.list;
    if(list.length===0){
      router.back(-1)
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~@/assets/common/common.scss";
@import "~@/assets/common/dpr.scss";
.statement {
  .content {
    background: #f5f5f5;
    height: calc(100vh - 180rem/75);
    overflow-y: auto;
    .address-select {
      @include dpr-fz(32px);
      padding: 0 3vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: (90rem/75);
      margin-bottom: 0.4rem;
      background: #fff;
      svg {
        color: #999;
      }
      span {
        svg {
          color: #c83c3b;
        }
      }
    }
    .pay-method {
      padding: 0 3vw;
      margin-bottom: 0.4rem;
      background: #fff;
      height: (240rem/75);
      p {
        color: #999;
        @include dpr-fz(28px);
        padding: 0.2rem;
        border-bottom: 0.03rem solid #eee;
      }
      form {
        display: flex;
        height: 2.26rem;
        // margin: 0.2rem 0;
        align-items: center;
        justify-content: space-between;
        label {
          flex: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;

          input {
            display: none;
          }

          input:checked + div:after {
            content: " ";
            position: absolute; left: 0; right: 0; top: 0; bottom: 0; 
            z-index: -1;
            background: linear-gradient(to top, #ffd2d2, white);
          }

          svg {
            @include dpr-fz(80px);
            // margin: 0.2rem 0;
          }
          span {
            display: block;
            white-space: nowrap;
          }
        }
      }
    }

    .good-list {
      padding: 0 3vw;
      margin-bottom: 0.4rem;
      background: #fff;
      min-height: (320rem/75);

      p {
        color: #999;
        @include dpr-fz(28px);
        padding: 0.2rem 0;
        border-bottom: 0.03rem solid #eee;
        .total {
          color: #c83c3b;
          @include dpr-fz(28px);
        }
        &:last-child {
          text-align: right;
        }
      }

      ul {
        @include dpr-fz(32px);
        border-bottom: 0.03rem solid #eee;
        margin: 0.3rem 0 0;

        li {
          color: #666;
          margin: 0.3rem 0;
          display: flex;
          justify-content: space-between;

          span:first-child {
            overflow: hidden;
            width: (420rem/75);
            white-space: nowrap;
            @include dpr-fz(28px);
            text-overflow: ellipsis;
          }
        }
      }
    }
    
    .others {
      background: #fff;
      padding: 0 3vw;
      // margin-bottom: 1rem;
      ul {
        li {
          border-bottom: 0.03rem solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.2rem 0;
          &:last-child {
            flex-direction: column;
            border: none;
            label {
              width: 100%;
            }
            textarea {
              width: 100%;
              border: 0.02rem solid #ddd;
              @include dpr-fz(24px);
              color: #666;
              padding: 0.1rem;
              margin: 0.1rem 0;
              height: (240rem/75);
              &::-webkit-input-placeholder {
                color: #999;
              }
            }
          }
          label {
            @include dpr-fz(32px);
            color: #333;
          }
          span {
            @include dpr-fz(28px);
            color: #999;
            em {
              color: #c83c3b;
            }
          }
        }
      }
    }
  }
  .footer {
    height: (100rem/75);
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 0.02rem solid #eee;
    .pay-amount {
      @include dpr-fz(28px);
      color: #ccc;
      margin-left: 3vw;
      em {
        @include dpr-fz(32px);
        color: #c83c3b;
      }
    }
    .submit-order {
      width: (210rem/75);
      height: 100%;
      background: #e63131;
      color: #fff;
      @include dpr-fz(28px);
      @include flex-center();
    }
  }
}
</style>
