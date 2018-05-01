<template>
	<div @click="handleAllEventProxy" class="sell">
		<nav>
			<h3>
				<span>商品列表</span>
				<span  class="select_ico" id="select_ico">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-shaixuan"></use>
					</svg>
					筛选
				</span>
			</h3>
			<div class="toggle">
				<div class="sortList">
					<p>品类:</p>
					<ul>
						<li 
							:key='i' 
							:data-id="ti.id" 
							:class="{'active': ti.id == act}"
							@click="getList " 
							v-for="(ti,i) in title" 
						>
							{{ti.name}}
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<ul class="good-list">
			<router-link
				:key='i'
				:data-id="list.id"
				tag="li"
				v-for="(list,i) in good_list"
				:to="`/${company}/goodsdetail?goodId=${list.id}`"
			>
				<img :src="list.goods_image" :onerror="defaultImg">
				<div class="goods-detail">
					<h4>{{list.goods_name}}</h4>
					<p>13.5%vol干型红酒...</p>
					<p class="price">
						{{list.retail_price | currency}}
					</p>
				</div>
			</router-link>
		</ul>
		<v-Footer/>
		<li v-for="(list,i) in list" :key='i+1212' :data-id="list.id" style="display:none"/>
	</div>
	
</template>

<style lang="scss" scoped>
@import '~@/assets/common/mobile.scss';
@import '~@/assets/common/color.scss';
@import './sell.scss';

.sell {
	overflow: hidden;
	// margin-top: 1.2rem;
	margin-bottom: 1.3333rem;
	display: flex;
	flex-direction: column;

	nav {
		background-color: $fst-red;
		color: #fff;
		height: 1rem;
		// position: fixed;
		// top: 0;
		height: 1rem;
		
		h3 {
			background-color: $fst-red;
			@include flex-center();
			padding: 0 0.3rem;
			width:100%;
			justify-content: space-between;
			height: 1rem;
			@include dpr-fz(28px);
			z-index: 1;
			position: fixed;
		
			.select_ico {
				flex-direction: row;
				width: 1.86666667rem;
				height: 0.61333333rem;
				border-radius: 0.06666667rem;
				@include flex-center();
				
				svg.icon {
					@include dpr-fz(45px);
				}
				&.on {
					background-color: #fff;
					color: $fst-red;
				}
			}
		}
		.toggle {
			color: #000;
			position: fixed;
			z-index: 0;
			background: rgba(0,0,0,0.5);
			width: 100%;
			top: 1rem;
			left: 0;
			height: 100%;
		}
	}

	.good-list {
		li {
			width: 32%;
			margin: 1.5% 0.6%;
			border: 1px solid #eee;
			border-radius: 5px;
			overflow: hidden;
			float: left;
			display: block;
			img {
				width: 100%;
				height: 2.8rem;
				float: left;
			}
			.goods-detail {
					background-color: #f7f7f7;
					padding: 0 0.2rem;
					float: left;
					width: 100%;
					h4 {
						padding-top: 0.13333333rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						@include dpr-fz(26px);
						color: #333;
					}
					p {
						color: #999;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						padding: 0.13333333rem 0; 
						@include dpr-fz(24px);

						&.price {
							color: $fst-red;
							border-top: 1px solid #ccc;
							@include dpr-fz(28px);
						}
					}
				}
			}
		}
	}
</style>

<script>
import store from '@/mobile/store';
import domjs from '@/assets/common/dom';//金额格式化
const {
	getPath,
	isIdInPathFunc,
} = domjs;
	export default {
		data() {
			return {
				source_list:[],
				good_list:[],
				company: store.state.company,
				title:[],
				act:null,
			}
		},
		computed: {
			defaultImg: () => store.state.defaultImg,
			list: ()=> store.state.list
		},
		mounted() {
			this.source_list = store.state.list
			this.good_list = this.source_list
			this.getti()
			this.act = "all"
		},
		created() {
			store.commit('list');
		},
		methods: {
			getti(){
				let cal=[]
				let cateList = []
				cal.push({
					id:"all",
					name:"全部"
				})
				this.source_list.forEach((item,index)=>{
					const key = item.goods_type_name
					if(cateList.indexOf(key) == -1){
						cateList.push(key);
						cal.push({
							name:item.goods_type_name,
							id:item.goods_type_id
						})
					}
				})
				this.title = cal
			},
			getList(e) {
				let dataId = e.target.getAttribute('data-id')
				this.act = dataId
				if(dataId === "all"){
					return this.good_list = this.source_list
				}
				const assortList = [];
				this.source_list.forEach((item,index)=>{
					if(item.goods_type_id == dataId){
						assortList.push(item)
					}
				})
				
				console.log(dataId)
				this.good_list = assortList
			},





			handleAllEventProxy(e){
				const isToggleDom = isIdInPathFunc({
					id: 'select_ico',
					path: getPath(e),
				});
				const toggleBtn = document.querySelector('.select_ico');
				const toggleDOM = document.querySelector('.toggle');
				const isShow = toggleBtn.classList.contains('on');
				if(isToggleDom){
					if(!isShow){
						toggleBtn.classList.add('on')
						toggleDOM.animate([
							{ transform: 'translateY(-100%)' } ,
							{ transform: 'translateY(0)' },
						], { 
							duration: 300,
							iterations: 1,
							fill: 'forwards',
						})
					} else {
						toggleBtn.classList.remove('on')
						toggleDOM.animate([
							{ transform: 'translateY(0)' },
							{ transform: 'translateY(-100%)' }
						], { 
							duration: 300,
							iterations: 1,
							fill: 'forwards',
							easing: 'ease',
						})
					}
				} else {
					if(isShow){
						toggleBtn.classList.remove('on')
						toggleDOM.animate([
							// keyframes
							{ transform: 'translateY(0)' },
							{ transform: 'translateY(-100%)' },
						], { 
							duration: 300,
							iterations: 1,
							fill: 'forwards',
							easing: 'ease',
						})
					}
				}
			}
		}
	}
</script>
