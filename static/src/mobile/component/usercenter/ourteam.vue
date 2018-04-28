<template>
	<div class="myteam">
		<v-Header title="我的团队" backto="usercenter"/>
		<div class="content">
      <div class="white-block">
        <h1>推荐注册分成说明</h1>
        <p>1、将上面二维码进行分享（微信好友、社群等）</p>
        <p>2、访问者长按二维码识别访问本站</p>
        <p>3、访问者在本站24小时注册，即认定该用户是您推荐的，您做为推荐者将获得奖励。</p>
        <p>4、该用户今后在本站的一切消费，您均能获得一定比例的提成。目前实行的提成总额为订单金额的1%、积分的5%，分配给您、推荐您的人等，具体分配规则请参阅 我推荐的会员。</p>
      </div>
      <div class="white-block">
        <h1>团队成员</h1>
        <table>
          <thead>
            <tr>
              <th>等级</th>
              <th>人数</th>
              <th>积分分成百分比(%)</th>
              <th>现金分成百分比(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>青铜</td>
              <td>13</td>
              <td>52</td>
              <td>44</td>
            </tr>
            <tr>
              <td>铂金</td>
              <td>14</td>
              <td>24</td>
              <td>66</td>
            </tr>
          </tbody>
        </table>
      </div>
		</div>
	</div>
</template>

<script>

</script>
<style  lang="scss">
@import '~@/assets/common/dpr.scss';
@import '~@/assets/common/common.scss';
.myteam{
    background: #F5F5F5;   
	.content{
		  height: calc(100vh - 80rem/75);
      .white-block{
        width: 94vw;
        margin: (75rem/75) 3vw;
        padding: 0.4rem 0;
        background: #FFF;
        border-radius: (10rem/75);
        h1{
          @include dpr-fz(32px);
          font-weight: 600;
          color: #333;
          text-align: center;
          margin: 0.2rem 0;
        }
        p{
          @include dpr-fz(28px);
          color: #666;
          text-align: justify;
          margin: 0 0.4rem;
          line-height: 0.6rem;
        }
        table{
          width: 94%;
          margin: 0.4rem 3%;
          @include dpr-fz(30px);
          thead{
            color: #333;
          }
          tbody{
            color: #999;
          }
          th,td{
            width: 25%;
            text-align: center;
            border: 0.01rem solid #CCC;
          }
        }
      }

	}
}
</style>