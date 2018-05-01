<template>
	<div class="home" >
		<div class="header" :class="{srcollTop:searchBarFixed}">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-saoma"></use>
      </svg>
      <input type="text" placeholder="o   搜索化妆品关键字" id="search">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liaotian"></use>
      </svg>
      <!-- <span class="seek" id="seekd"><img src="@/assets/images/lufa/seek.png"></span>
      <span class="seek" id="seeks" @click="seek()"><img src="@/assets/images/lufa/seek.png"></span> -->
		</div>
		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<img :src="require(`@/assets/images/lufa/一周恋味${dpr}.png`)" :onerror="defaultImg"/>
			</mt-swipe-item>
			<mt-swipe-item>
				<img :src="require(`@/assets/images/lufa/一周恋味${dpr}.png`)" :onerror="defaultImg"/>
			</mt-swipe-item>
			<mt-swipe-item>
				<img :src="require(`@/assets/images/lufa/一周恋味${dpr}.png`)" :onerror="defaultImg"/>
			</mt-swipe-item>
		</mt-swipe>
		<div class="head-nav">
			<ul>
				<li>
					<div class="icon-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-xinpinshoufaicon1"></use>
						</svg>
					</div>
					<div class="text-box">
						<p class="title">新品首发</p>
            <p class="context">精品妆品全新上市</p>
          </div>
				</li>
				<li>
					<div class="icon-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-lipinicon1"></use>
						</svg>
					</div>
					<div class="text-box">
						<p class="title">新品首发</p>
            <p class="context">精品妆品全新上市</p>
          </div>
				</li>
				<li>
					<div class="icon-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-tips"></use>
						</svg>
					</div>
					<div class="text-box">
						<p class="title">今日专题</p>
            <p class="context">不能错过的化妆品</p>
          </div>
				</li>
				<li>
					<div class="icon-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-xinpinshoufaicon1"></use>
						</svg>
					</div>
					<div class="text-box">
						<p class="title">达人美妆</p>
            <p class="context">达人手把手教你化妆</p>
          </div>
				</li>
			</ul>
		</div>
		
    <div class="categories">
      <div class="title">
        <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-add-circle"></use>
				</svg>
				<p>&nbsp;唯/美/热/门/分/类</p>
        <svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-add-circle"></use>
				</svg>
      </div>
      <div class="sort-lists">
        <img class="cover" src="@/assets/images/lufa/倾国倾城.png" :onerror="defaultImg">
				<ul>
					<li>
						<img src="@/assets/images/lufa/眉采飞扬.png" :onerror="defaultImg">
					</li>
					<li>
						<img src="@/assets/images/lufa/极致美肤.png" :onerror="defaultImg">
					</li>
					<li>
						<img src="@/assets/images/lufa/唇语诱惑.png" :onerror="defaultImg">
					</li>
					<li>
						<img src="@/assets/images/lufa/更多分类.png" :onerror="defaultImg">
					</li>
				</ul>
      		</div>  
			
			<div class="activity">
				<img src="@/assets/images/lufa/横图.png" :onerror="defaultImg">
			</div>     
    </div>

		<div class="content">
			<h3>鹭发商贸</h3>
			<ul class="container">
        <router-link  v-for="(arr,i) in home" :key='i' tag="li" :to="`/${company}/goodsdetail?goodId=${arr.id}`">
				<!-- <li v-for="(arr,i) in home" :key='i'> -->
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
			<h3>眉彩飞扬</h3>
			<ul class="container">
				<router-link  v-for="(arr,i) in home1" :key='i' tag="li" :to="`/${company}/goodsdetail?goodId=${arr.id}`">
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
import numFormat from '@/assets/common/dom'  //金额格式化
const randomNum = ~~(Math.random() * 5);

export default {
	store,
	data() {
		return {
      company: store.state.company,
			dpr: dpr === 1 ? "" : `@${dpr}x`,
			searchBarFixed: false,
			numberFormat:numFormat.numberFormat  //金额格式化
		};
	},
	methods: {
		toggle:function(){
			// this.lufa = store.state.lufa.slice(0,this.lufa.length+4);
			// if(this.lufa.length === store.state.lufa.length){
			// 	this.$el.querySelector('.more').innerText = '没有更多数据了';
			// }
		},
		toggle2:function(){
			// this.lufa1 = store.state.lufa1.slice(0,this.lufa1.length+4);
			// if(this.lufa.length === store.state.lufa1.length){
			// 	this.$el.querySelector('.more').innerText = '没有更多数据了';
			// }
		},
		seek:function(){
			document.getElementById('seekd').style.display='block';
			document.getElementById('search').style.display='block';
			document.getElementById('seeks').style.display='none';
		},
		// _.debounce(function (){
			handleScroll (e) {
				if(this._routerRoot._route.fullPath === '/lufa'){
					const scrollTop = window.pageYOffset ||  document.documentElement.scrollTop || document.body.scrollTop
					if(scrollTop<180){
						document.querySelector('.header').style.backgroundColor = `rgba(255, 50, 103, ${scrollTop/200})`;
					}else{
						document.querySelector('.header').style.backgroundColor = `rgba(255, 50, 103, 0.9)`;
					}
				}
			}
		// },100)
	},
	computed: {
		defaultImg: () => store.state.defaultImg,
		home: ()=> store.state.list.slice(randomNum,randomNum+4),
		home1: ()=> store.state.list.slice(randomNum+4,randomNum+8),
	},
	created() {
		store.commit('list');
		window.addEventListener('scroll', this.handleScroll,5);
	}
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
.home {
	background: #F5F5F5;
	
	.header{
		@include flex-center();
		z-index: 3;
		width: 100vw;
		height: (80rem/75);
		position: fixed;
		top: 0;
		left: 0;
		justify-content: space-between;
		color: #fff;
		font-size: 26px;
		padding: 0 0.2rem;
		background-color: rgba(255, 50, 103, 0);

		input{
			text-align: center;
			width: (520rem/75);
			height: (50rem/75);
			@include dpr-fz(28px);
			color: #fff;
			border-radius: (20rem/75);
			background-color: rgba(255, 255, 255, 0.5);
			outline: none;
			border: none;
			padding-left: (20rem/75);
			&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
				color: #fff;
			}
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
		margin-top: 0;
		width: 100vw;
		img {
			width: 100%;
		}
	}
  .head-nav{
    background: #fff;
    ul{ 
      height: (236rem/75);
      margin-bottom: (20rem/75);
      display: inline-flex;
      flex-wrap: wrap;
      width: 100vw;
      @include flex-center();
      li{
        display: flex;
        flex-direction: inherit;
        justify-content: flex-start;
        align-items: center;
        flex: 1 0 50vw;
        @include dpr-fz(22px);
        color: #999999;
        line-height:(15rem/75);
        &:nth-child(2n+1){
          border-right: 1px solid #EEE;
        }
        .icon-box{
          margin: 0 0.4rem; 
        }
        .text-box{

          .title {
						height: 0.6rem;
            color: #333;
            font-weight:600;
            @include dpr-fz(30px);
					}
					.context {
						height: 0.3rem;
					}
        }
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
  .categories{
    margin-top: (20rem/75);
    background: #fff;
    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FF3267;
			height: (100rem/75);
			
      svg{
				@include dpr-fz(16px);
      }
      p{
				@include dpr-fz(32px);
        letter-spacing: 0.2rem;
      }
		}
		.sort-lists{
			@include flex-center();
			.cover{
				width: (230rem/75);
				height: (340rem/75);
			}
			ul{
				width: (450rem/75);
				height: (340rem/75);
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				li{
					img{
						width: (200rem/75);
						height: (168rem/75);
					}
				}
			}
		}
  }

	.content {
		   margin-top: (20rem/75);
		   background: #fff;
		h3 {
			height:(120rem/75);
			line-height: (120rem/75);
			@include dpr-fz(38px);
			color: #333333;
			text-align: center;
			// font-family: HiraginoSansGB-W3;
			font-weight: bold;
			background: url('~@/assets/images/lufa/mb-title.png') no-repeat center;
			background-size: contain;
			width: 70%;
			margin: 0 auto;
		}
		ul {
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
				img {
					min-height: 30vw;
					width: 100%;
					height: (300rem/75);
				}
				.list-news {
					height: (180rem/75);
					padding: (20rem/75);
					@include dpr-fz(28px);
					background: #F5F5F5;
					font-family: HiraginoSansGB-W3;
					.news-name {
						color: #333333;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						display: inherit;
					}
					p {
						@include dpr-fz(22px);
						color: #999999;
						margin: 0.2rem 0;
					}
					.news-retail {
						color: #B84747;
						display: inherit;
						padding: 0.2rem 0;
						width: 100%;
						border-top: 1px solid #D9D9D9;
					}
				}
			}
		}
		.more{
			@include flex-center();
			height: (79rem/75);
			@include dpr-fz(28px);
			color: #B84747;
		}
	}
	.foot-text{
		height: (93rem/75);
		padding-top: (13rem/75);
		@include dpr-fz(20px);
		@include flex-center();
		color: #AAAAAA;
		font-family: HiraginoSansGB-W3;
	}
}


</style>
