<template>
	<div class="content">
		<h1>lufa pc 的首页内容</h1>
		<ul class="container">
			<li v-for="arr in $store.state.lufa">
				<img :src="`http://kingubo.com/daocheng/${arr.goods_image}`">
				<span>{{arr.goods_name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import store from '../../store';
export default {store};
</script>

<style lang="scss" scoped>
.content {
	ul.container {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		list-style: none;
		justify-content: space-between;

		li {
			text-align: center;
			flex: 0 0 45vw;
			img{
				width: 100%;
			}
		}

	}
}
</style>
db.createUser(
  {
    user: "pengliheng",
    pwd: "ewqewq",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
mongo --port 27017 -u "pengliheng" -p "ewqewq" --authenticationDatabase "admin"