<template>
	<div class="lufa">
		<nav class="nav">
			<div class="footer">
				<ul>
					<router-link tag="li" :to="'/lufa'" exact>首页</router-link>
					<router-link tag="li" :to="'/lufa/sell'">营销</router-link>
					<router-link tag="li" :to="'/lufa/set'">设置</router-link>
					<router-link tag="li" :to="'/lufa/usercenter'">个人中心</router-link>
				</ul>
			</div>
		</nav>
		<router-view/>
	</div>
</template>

<script>

</script>

<style lang="scss" scoped>
	.nav {
		border-top: 1px solid #ccc;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;

		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			flex-direction: row;

			li {
				width: 25vw;
				height: 60px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 16px;

				&.active {
					color: red;
				}
			}
		}

	}
</style>
