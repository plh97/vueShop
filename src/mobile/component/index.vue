<template>
	<div class="index">
		<router-link tag="li" :to="'/fst'">fst</router-link>
		<router-link tag="li" :to="'/lufa'">lufa</router-link>
	</div>
</template>

<style lang="scss">
@import '~@/assets/common/dpr.scss';
.index {
	@include dpr-fz(20px);
	height: 70vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
