<template>
	<div class="goodslist">
		<div class="header">
			<span class="logo"><img src="@/assets/images/fst/logo.png"></span>
		   <input type="text"  placeholder="请输入商品名称" id="search">
		   <span class="seek" id="seekd"><img src="@/assets/images/fst/seek.png"></span>
		   <span class="seek" id="seeks" @click="seek()"><img src="@/assets/images/fst/seek.png"></span>
		</div>
		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="@/assets/images/fst/f1.png" :onerror="defaultImg"/>
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="@/assets/images/fst/f2.png" :onerror="defaultImg"/>
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="@/assets/images/fst/f3.png" :onerror="defaultImg"/>
			</mt-swipe-item>
		</mt-swipe>
			<div class="head-nav">
			<ul>
				<li>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-pinpai"></use>
					</svg>
					自营品质保证
				</li>
				<li>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-tuihuo"></use>
					</svg>
					7天无忧退换
				</li>
				<li>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-tuikuan"></use>
					</svg>
					48小时快速退款
				</li>
			</ul>
		</div>
		<div class="activity">
			<img src="@/assets/images/fst/activity.png">
		</div>
		<div class="content">
			<h3>法塞特家族</h3>
			<ul class="container">
				<router-link  v-for="(arr,i) in home" :key='i' tag="li" :to="`/${company}/goodsdetail?goodId=${arr.goods_code}`">
					<img :src="arr.goods_image" :onerror="defaultImg">
					<div class="list-news">
						<span class="news-name">{{arr.goods_name}}</span>
					    <p>{{arr.goods_type_name}}</p>
				        <span class="news-retail">￥{{numberFormat(arr.retail_price,2)}}</span>
					</div>
				</router-link>
			</ul>
			<span class="more" @click="toggle()">
				更多 
				<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-more"></use>
				</svg>
			</span>
		</div>
		<div class="content">
			<h3>法塞特家族</h3>
			<ul class="container">
				<router-link  v-for="(arr,i) in home1" :key='i' tag="li" :to="`/${company}/goodsdetail?goodId=${arr.goods_code}`">
					<img :src="arr.goods_image" :onerror="defaultImg">
					<div class="list-news">
						<span class="news-name">{{arr.goods_name}}</span>
					    <p>{{arr.goods_type_name}}</p>
						<span class="news-retail">￥{{numberFormat(arr.retail_price,2)}}</span>
					</div>
				</router-link>
			</ul>
			<span class="more" @click="toggle2()">
				更多 
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-more"></use>
				</svg>
			</span>
		</div>
		<p class="foot-text">已无更多</p>
		<v-Footer/>
	</div>
</template>

<script>
import store from '@/mobile/store';
import numFormat from '@/assets/common/dom';  //金额格式化
const randomNum = ~~(Math.random() * 5);

export default {
	store,
	data() {
		return {
			company: store.state.company,
			numberFormat:numFormat.numberFormat  //金额格式化
		};
	},
	computed: {
		home: ()=> store.state.list.slice(randomNum,randomNum+4),
		home1: ()=> store.state.list.slice(randomNum+4,randomNum+8),
		defaultImg: () => store.state.defaultImg,
	},
	created() {
		store.commit('list');
	},
	methods: {
		toggle:function(){
			// this.home = store.state.home.slice(0,this.home.length+4);
			// if(this.home.length === store.state.home.length){
			// 	this.$el.querySelector('.more').innerText = '没有更多数据了';
			// }
		},
		toggle2:function(){
			// this.home1 = store.state.home1.slice(0,this.home1.length+4);
			// if(this.home.length === store.state.home1.length){
			// 	this.$el.querySelector('.more').innerText = '没有更多数据了';
			// }
		},
		seek:function(){
			document.getElementById('seekd').style.display='block';
			document.getElementById('search').style.display='block';
			document.getElementById('seeks').style.display='none';
		},
	},
}

</script>

<style lang="scss">
.mint-swipe-indicators {
	.mint-swipe-indicator {
		width:0.2rem;
		height:0.2rem;
		margin: 0 0.1rem;
	}
}
</style>
<style lang="scss" scoped>
@import '~@/assets/common/dpr.scss';
.goodslist{
	background: #F5F5F5;
	margin-bottom: 1.3333rem;

	.header{
		z-index: 3;
		width: 100vw;
		height: (80rem/75);
		background: #C83C3B;
		position: fixed;
		top: 0;
		left: 0;
		@include flex-center();
		input{
			width: 75%;
		    height: 0.8rem;
			@include dpr-fz(28px);
			color: #fff;
		    border-radius: (40rem/75);
			background: #de8a89;
			outline: none;
			border: none;
			padding-left: (20rem/75);
			display: none;
		}
		#seekd{
			display: none;
			right: (45rem/75);
		}
		.logo{
			width: (161rem/75);
			height: (65rem/75);
		}
		.seek{
			width: (37rem/75);
			height: (36rem/75);
			position: absolute;
            right: (24rem/75);
		}
		img{
			width: 100%;
			height: 100%;
		}
	}
	.mint-swipe{
		height: (400rem/75);
		margin-top:  (80rem/75);
		img {
			width: 100%;
		}
	}
    .head-nav{
		background: #fff;
		ul{ height: (118rem/75);
			@include flex-center();
			li{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				flex: 1;
				@include dpr-fz(22px);
				color: #999999;
				line-height:(15rem/75);
				svg.icon{
					@include dpr-fz(70px);
					color: #FF8080;
				}
			}
		}
	}
	.activity{
		width: 100%;
		height: (235rem/75);
		padding: (7rem/75) (24rem/75);
		background: #fff;
		margin-top: (6rem/75);

		img {
			width: 100%;
		}
	}
	.content {
		   margin-top: (20rem/75);
		   background: #fff;
		h3{
			height:(120rem/75);
			line-height: (120rem/75);
			@include dpr-fz(38px);
			color: #333333;
			text-align: center;
			font-family: HiraginoSansGB-W3;
			font-weight: bold;
			background: url('~@/assets/images/fst/mb-title.png') no-repeat center;
			background-size: contain;
			width: 70%;
			margin: 0 auto;
		}
		ul{
			margin: 0;
			padding: 0;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			list-style: none;
			justify-content: space-around;
			margin: 0 (14rem/75);
            padding-bottom: (30rem/75);
            border-bottom: 1px solid #EEEEEE;
			li {
				text-align: left;
				width: 48%;
				height: (492rem/75);
				border: (2rem/75) solid #EEEEEE;
                margin-bottom: (10rem/75);
				img{
					min-height: 30vw;
					width: 100%;
					height: (300rem/75);
				}
				.list-news{
					height: (180rem/75);
					padding: (20rem/75);
					@include dpr-fz(28px);
					background: #F5F5F5;
					font-family: HiraginoSansGB-W3;
                    .news-name{
						color: #333333;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						display: inherit;
				    }
				   p{
						@include dpr-fz(22px);
						color: #999999;
				   }
				   .news-retail{
						color: #B84747;
						display: inherit;
						margin-top: (17rem/75);
						padding-top: (16rem/75);
						width: 100%;
						border-top: 1px solid #D9D9D9;
				    }
				}
			}
		}
		.more{
			height: (79rem/75);
			@include dpr-fz(28px);
			color: #B84747;
			line-height: (79rem/75);
			text-align: center;
			display: inherit;
			svg {
				@include dpr-fz(28px);
			}
		}
	}
	.foot-text{
		height: (93rem/75);
		padding-top: (13rem/75);
		text-align: center;
		@include dpr-fz(20px);
		@include flex-center();
		color: #aaa;
		font-family: HiraginoSansGB-W3;
	}
}


</style>
