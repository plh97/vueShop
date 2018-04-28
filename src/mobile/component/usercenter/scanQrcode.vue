<template>
	<div class="scanQrcode">
		<v-Header title="我要推广" backto="usercenter"/>
		<div class="content"></div>
	</div>
</template>

<script>

</script>
<style  lang="scss">
@import '~@/assets/common/dpr.scss';
.scanQrcode{
	.content{
    width: 100vw;
    height: calc(100vh - 80rem/75);
		background: url('~@/assets/images/affiliate.jpg') no-repeat center/100% 100%;
	}
}
</style>