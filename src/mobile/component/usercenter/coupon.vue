<template>
	<div class="coupon">
		<v-Header title="我的优惠券" backto="usercenter"/>
    <div class="content">
      <ul>
        <li class="coupon-item">
          
          <div class="item-box">
            <div class="selected">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-duigou"></use>
              </svg>
            </div>
            <div class="info-box">
              <div class="coupon-sum">￥10</div>
              <div class="coupon-msg">
                <p class="condition">使用门槛</p>
                <p class="deadline">使用期限</p>
                <!-- 优惠券不可用时才显示的提示信息 -->
                <p class="tips" v-if="true">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jianhao"></use>
                  </svg>
                  <span>优惠券不可用的原因</span>
                  </p>
              </div>
              <div class="coupon-num">&times;&nbsp;&nbsp;10</div>
            </div>
          </div>
        </li>
      </ul>
      <p class="disabled-coupon">不可用优惠券</p>
      <ul>
        <li class="coupon-item" :style="{opacity: 0.6}">
          <div class="item-box">
            <div class="info-box">
              <div class="coupon-sum">￥10</div>
              <div class="coupon-msg">
                <p class="condition">使用门槛</p>
                <p class="deadline">使用期限</p>
                <!-- 优惠券不可用时才显示的提示信息 -->
                <p class="tips" v-if="true">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jianhao"></use>
                  </svg>
                  <span>优惠券不可用的原因</span>
                  </p>
              </div>
              <div class="coupon-num">&times;&nbsp;&nbsp;10</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
</script>
<style  lang="scss">
@import "~@/assets/common/dpr.scss";
.coupon {
  background: #f5f5f5;
  .content {
    height: calc(100vh - 80rem/75);
    overflow-y: auto;
    .disabled-coupon {
      margin: 0 3vw;
      @include dpr-fz(24px);
      color: #999;
    }
    ul {
      li.coupon-item {
        .item-box {
          width: 94vw;
          height: (150rem/75);
          position: relative;
          margin: 0.2rem 3vw;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          // align-items: center;
          justify-content: center;
          background-color: #fff;
          // border: 1px solid #e5004f;
          &:before {
            content: "";
            position: absolute;
            left: -1vw;
            width: 0.4rem;
            height: 0.4rem;
            top: 50%;
            transform: translate(-30%, -50%);
            box-shadow: 3px 0 0 #eee;
            border-radius: 80%;
            background-color: #f5f5f5;
          }
          &:after {
            content: "";
            position: absolute;
            right: -4vw;
            width: 0.4rem;
            height: 0.4rem;
            top: 50%;
            transform: translate(-30%, -50%);
            box-shadow: -3px 0 0 #eee;
            border-radius: 80%;
            background-color: #f5f5f5;
          }

          .info-box {
            flex: 1;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .coupon-sum {
              @include dpr-fz(40px);
              color: #c83c3b;
            }
            .coupon-msg {
              .condition {
                color: #666;
                @include dpr-fz(32px);
              }
              .deadline {
                color: #999;
                @include dpr-fz(24px);
              }
              .tips {
                color: #b84747;
                @include dpr-fz(24px);
                display: flex;
                justify-content: flex-start;
                align-items: center;
              }
            }
            .coupon-num {
              @include dpr-fz(36px);
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
.selected {
  width: 0;
  height: 0;
  border-top: (50rem/75) solid #c83c3b;
  border-left: (70rem/75) solid transparent;
  position: absolute;
  // top: 0;
  right: 0;
  z-index: 2;
  svg {
    color: #fff;
    position: relative;
    top: -(48rem/75);
    left: -(40rem/75);
  }
}
</style>