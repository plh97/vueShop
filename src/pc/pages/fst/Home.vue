<template>
	<div class="content">
		<audio controls type="audio/ogg" :src='require("../../../assets/mp3/bv.mp3")'></audio>
		<span class="pre">pre</span>
	</div>
</template>

<script>
import axios from 'axios';
import store from '../../store';
export default {
	store,
	mounted(e){
		const audioDOM = this.$el.children[0];
		this.init();
	},
	methods:{
		init(){
			//创建音频上下文
			var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
			var source;
			var oscillator = audioCtx.createOscillator();
			var filter = audioCtx.createBiquadFilter();

			axios.get('bv.mp3',{
				responseType: 'arraybuffer',
			}).then(res=>{
				console.log(res.data);
				audioCtx.decodeAudioData(res.data, function(buffer) {
					source.buffer = buffer;

					source.connect(audioCtx.destination);
					source.loop = true;
				});
			})
		}
	}
};


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
				min-height: 40vw;
				width: 100%;
			}
		}

	}
}
</style>
