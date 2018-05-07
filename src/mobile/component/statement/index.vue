<template>
  <div class="statement">
    <v-Header title="确认订单" option="" :leftBackTo="-1" />
    <div class="content">
      <router-link class="address-select" tag="span" :to="`/${company}/address`">
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-address"></use>
          </svg>
          选择收货地址
        </span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrowright"></use>
        </svg>
      </router-link>

      <div class="pay-method">
        <p>支付方式</p>
        <ul>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-available"></use>
            </svg>
            <span>￥120,000.00</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixinzhifu"></use>
            </svg>
            <span>微信钱包</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhifubao"></use>
            </svg>
            <span>支付宝</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinhang-yinlian-"></use>
            </svg>
            <span>银联</span>
          </li>
        </ul>
      </div>

      <div class="good-list">
        <p>商品列表</p>
        <ul>
          <li>
            <span>无色界离开洒家打开垃圾可怜见看来</span>
            <span>&times;1</span>
            <span>￥1231</span>
          </li>
          <li>
            <span>dadad</span>
            <span>&times;1</span>
            <span>￥1231</span>
          </li>
          <li>
            <span>dadad</span>
            <span>&times;1</span>
            <span>￥1231</span>
          </li>
        </ul>
        <p>共件商品&nbsp;&nbsp;总计：<span class="total">￥12444</span></p>
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

    </div>

    <div class="footer">
      <div class="pay-amount">实付款：<em>￥1,644.00</em></div>
      <div class="submit-order">提交订单</div>
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
      company: store.state.company,
    };
  },
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
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.2rem 0;
        li {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          justify-content: space-around;
          svg {
            @include dpr-fz(60px);
            margin: 0.2rem 0;
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
      height: (320rem/75);
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
          border: none;
          float: right;
        }
      }
      ul {
        @include dpr-fz(32px);
        border-bottom: 0.03rem solid #eee;
        margin: 0.1rem 0;
        li {
          display: flex;
          justify-content: space-between;
          margin: 0.1rem 0;
          color: #666;
          span {
            &:first-child {
              width: (420rem/75);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
    .others {
      background: #fff;
      padding: 0 3vw;
      margin-bottom: 1rem;
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
