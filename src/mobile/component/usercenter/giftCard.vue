<template>
	<div class="giftCard">
		<v-Header title="我的礼品卡" backto="usercenter"/>
		<div class="content">
      <ul>
        <li>
          <div class="gift-box">
            <div class="gift-type">
              <h1>中秋礼卡</h1>
              <p>8854 5134 7412</p>
            </div>
            <em>×1</em>
          </div>
        </li>
        <li>
          <div class="gift-box">
            <div class="gift-type">
              <h1>元旦礼卡</h1>
              <p>5134 8854 7412</p>
            </div>
            <em>×2</em>
          </div>
        </li>
        <li>
          <div class="gift-box">
            <div class="gift-type">
              <h1>圣诞礼卡</h1>
              <p>7412 8854 5134</p>
            </div>
            <em>×3</em>
          </div>
        </li>
      </ul>
		</div>
	</div>
</template>

<script>

</script>
<style  lang="scss">
@import '~@/assets/common/dpr.scss';
.giftCard{
	.content{
		height: calc(100vh - 80rem/75);
		background: #c83c3b; 
		overflow-y: auto;
    ul{
      width: 94vw;
      margin: 0 3vw;
      li{
        width: 100%;
        height: (240rem/75);
        margin-top: 0.2rem;
        &:nth-child(3n+1){
          background: url('https://static.pipk.top/vueshop/public/images/gift_pic0.png') no-repeat center/100% 100%;
        }
        &:nth-child(3n+2){
          background: url('https://static.pipk.top/vueshop/public/images/gift_pic1.png') no-repeat center/100% 100%;
        }
        &:nth-child(3n){
          background: url('https://static.pipk.top/vueshop/public/images/gift_pic2.png') no-repeat center/100% 100%;
        }
        .gift-box{
          position: relative;
          top: 0.8rem;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .gift-type{
            width: (460rem/75);
            margin-left: 0.6rem;
            h1{
              @include dpr-fz(34px);
              color: #333;
            }
            p{
              @include dpr-fz(28px);
              color: #999;
            }
          }
          em{
            @include dpr-fz(50px);
            height: 100%;
            color: #999;
          }
        }
      }
    }
	}
}
</style>