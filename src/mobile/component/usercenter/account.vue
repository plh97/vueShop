<template>
	<div class="account">
		<v-Header title="我的账号" backto="usercenter"/>
		<div class="dashboard">
			<div class="balance">
				<span class="balance-title">余额（元）</span>
				<span id="balance" class="balance-content">0.00</span>
			</div>
			<div style="visibility: hidden;" class="free-balance">
				<span class="free-balance-title">赠送余额（元）</span>
				<span class="free-balance-content">2,000.00</span>
			</div>
		</div>
		<div class="aisle">
			<div onclick="recharge();" class="recharge">
				<span class="left">充值</span>
				<span class="right">
					????
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-arrowright"></use>
					</svg>
				</span>
			</div>
			<div class="integral">
				<span class="left">积分</span>
				<span class="right">
					<span id="integral">????</span> 
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-arrowright"></use>
					</svg>
				</span>
			</div>
			<div class="free" onclick='window.location.href="${ctx}/mall/21249542390/coupon"'>
				<span class="left">优惠券</span>
				<span class="right">????
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-arrowright"></use>
					</svg>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
</script>
<style  lang="scss">
@import "~@/assets/common/dpr.scss";
.account {
  .dashboard {
    @include dpr-fz(28px);
    color: #ffc9c9;
    font-family: HiraginoSansGB-W3;
    background-color: #c83c3b;
    padding: (24rem/75);
    display: flex;
    flex-direction: column;

    .balance {
      display: flex;
      flex-direction: column;
      padding: 5px;

      .balance-content {
        @include dpr-fz(78px);
        font-weight: 500;
        color: #fff;

        .balance-title {
          @include dpr-fz(28px);
        }
      }
    }
    .free-balance {
      display: flex;
      font-family: Hiragino Sans GB;
      flex-direction: column;
      padding: 5px;
      .free-balance-title {
        @include dpr-fz(24px);
        color: #ffffa7a7;
      }
      .free-balance-content {
        @include dpr-fz(34px);
        color: #ffffaeae;
        font-weight: 100;
      }
    }
  }
  .aisle {
    padding: 0 0.3rem;
    @include dpr-fz(34px);
    font-family: HiraginoSansGB-W3;
    background: #ffffff;

    .recharge {
      .left {
        font-weight: bolder;
      }
    }
    .left {
      color: #333333;
    }
    .right {
      color: #999999;
    }
    i {
      @include dpr-fz(34px);
    }
  }
  .aisle .recharge,
  .aisle .integral,
  .aisle .free {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eeeeee;
    padding: (24rem/75) 0;
    justify-content: space-between;
  }
}
</style>