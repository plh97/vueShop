<template>
	<div class="content">
		<canvas width="1000px" height="700px" class="background"/>
		<canvas width="1000px" height="700px" class="animate"/>
	</div>
</template>

<script>
import axios from 'axios';
import store from '../../store';
import map from './map.js'



export default {
	store,
	data(){
		return {
			ball:[],
			cache: [],
			numArray: [1,2,3],
			colorArray:  ["#3BE","#09C","#A6C","#93C","#9C0","#690","#FB3","#F80","#F44","#C00"],
			R: 4,
			W: 700,
			H: 1000,
		}
	},
	created(){
		window.app = this;
	},
	mounted(e){
		this.init();
	},
	methods:{
		renderBalls(){
			this.ballCxt.clearRect( 0, 0 ,1000, 700);
			//
			this.ball.forEach(arr=>{
				this.ballCxt.beginPath();
				this.ballCxt.arc(arr.x,arr.y,this.R,0,2*Math.PI);
				this.ballCxt.fillStyle = arr.color;
				this.ballCxt.closePath();
				this.ballCxt.fill();                
			})
		},
		updateBalls(){
			// console.log(this.ball);
			const canvas = document.querySelector('canvas.animate');
			this.ballCxt = canvas.getContext('2d');
			const canvasBound = canvas.getBoundingClientRect();
			this.ball.forEach(arr=>{


				if(arr.y> 650){
					arr.stepY = -arr.stepY*0.7
					arr.y += arr.stepY - 10;
				}
				arr.stepY += arr.disY;
				arr.x += arr.stepX;
				arr.y += arr.stepY;
			})
		},



		init(){
			//更新时钟
			setInterval(()=>{
        this.drawClock();
			},1000);

			//更新小球
			setInterval(()=>{
        //更新小球状态
        this.updateBalls();
        // //渲染
        this.renderBalls();
	    },50);
		},





		drawClock(){
			const canvas = document.querySelector('canvas.background');
			const ctx = canvas.getContext('2d');
			this.ctx = ctx;
			const canvasBound = canvas.getBoundingClientRect();
			const time = Intl.DateTimeFormat('en-US',{
				hour: 'numeric', minute: 'numeric', second: 'numeric',
				hour12: false
			}).format()

			this.ctx.clearRect( 0, 0 ,canvasBound.width, canvasBound.height);
			this.ctx.fillStyle = '#123';
			this.ctx.fillRect( 0, 0 ,canvasBound.width, canvasBound.height);

			this.drawTime(time);
			// ctx.fillText(time,500,350 );
			this.ctx.stroke();
		},

		drawTime(time){
			time.split('').forEach((letter,index)=>{
				// if(this.cache[index]!== letter){
					this.drawWord({
						letter,
						index
					})
				// }
			})
			this.cache = time.split('');
			if(this.ball.length > 500) {
				this.ball.splice(0, 200)
			}
		},
		drawWord({
			letter,index
		}){
			map[letter].forEach((arr1,i)=>{
				arr1.forEach((arr2,j)=>{
					if(arr2 === 1){
						this.drawBall({
							x: (j*10 + index*100) + 100,
							y: i*10 + 300
						})
					}
				})
			})
			if(letter !== this.cache[index]){
				map[letter].forEach((arr1,i)=>{
					arr1.forEach((arr2,j)=>{
						if(arr2 === 1){
							this.ball.push({
								x: (j*10 + index*100) + 100,
								y: i*10 + 300,
								stepX: Math.floor(Math.random() * 4 -2) + (Math.random() - 0.5)*5,
								stepY: -2*this.numArray[Math.floor(Math.random()*this.numArray.length)],
								color: this.colorArray[Math.floor(Math.random()* this.colorArray.length)],
								disY:1
							})
						}
					})
				})
			}
		},
		drawBall({x,y}){
			this.ctx.beginPath();
			this.ctx.arc(x,y,3,0,2*Math.PI);
			this.ctx.closePath();
			this.ctx.fillStyle="red";
			this.ctx.fill();
		},
	}
};













</script>

<style lang="scss" scoped>
canvas.background {
	position: absolute;
}

canvas.animate {
	position: absolute;
}
</style>
