<template>
	<div class="earnlist">
		<v-Header title="分销推广" backto="usercenter"/>
		<div class="earnlist-body">
			<div class="total">
				合计：18人
			</div>
			<ul class="earnlist-list">
				<li>
					<label>姓名</label>
					<label>手机号</label>
				</li>
				<li>
					<label>张三</label>
					<label>13169607416</label>
				</li>
				<li>
					<label>张三</label>
					<label>13169607416</label>
				</li>
				<li>
					<label>张三</label>
					<label>13169607416</label>
				</li>
				<li>
					<label>张三</label>
					<label>13169607416</label>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

</script>
<style  lang="scss">
@import '~@/assets/common/dpr.scss';
.earnlist{
	.earnlist-body{
		.total{
			@include dpr-fz(32px);
			position: relative;
			text-align: right;
			width: 94vw;
			margin: 0.2rem 3vw;
			border-bottom: 0.02rem solid #CCC;
		}
		.earnlist-list{
			
			li{
				width: 94vw;
				height: (70rem/75);
				margin: 0.2rem 3vw;
				display: flex;
				justify-content: space-around;
				border-bottom: 0.02rem solid #EEE;
				label{
					@include dpr-fz(32px);
					width: (240rem/75);
					text-align: center;
				}
			}
		}
	}
}
</style>