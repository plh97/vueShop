<template>
	<div class="fst">
		<nav class="nav">
			<div class="footer">
				<ul>
					<router-link tag="li" :to="'/fst'" exact>首页</router-link>
					<router-link tag="li" :to="'/fst/sell'">营销</router-link>
					<router-link tag="li" :to="'/fst/set'">设置</router-link>
					<router-link tag="li" :to="'/fst/usercenter'">个人中心</router-link>
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
		background-color: #fff;
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
				height: 50px;
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
