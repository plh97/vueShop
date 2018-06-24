<template>
  <div class="layout">
    <header>
      <span class="scort">步数：{{step}}</span>
      <button class="star" @click="init">New Game</button>
      <span class="sd"></span>
    </header>
    <div class="all-container" @click="addBlock">
      <span 
        :class="`circle ${e.fill ? 'block':''}`"
        :data-index="`${e.x}-${e.y}-${e.z}`" 
        :style="`transform: translate(${cssTransition(e)});`"
        v-for="(e,j) in map" 
        :key="j"></span>
      <span 
        class="cat"
        :style="`transform: translate(${cssTransition(cat)});`"
      >猫啊</span>
    </div>
  </div>
</template>

<script>
const dely = ms => new Promise(res=>setTimeout(res, ms))
import map from "./map";
class Stack {
  constructor(){
    this.map = map;
  }
  // 某个点是否存在
  isExist({x,y,z}){
    return this.map.find(e=> e.x ===x && e.y ===y && e.z ===z)
  }
  // 初始化棋盘，随机大约15个点
  init(){
    this.map.forEach((e,i)=>{
      e.fill = false;
      if(Math.random()>0.8 && i>0){
        e.fill = true;
      }
    })
  }
  // 为某个确定点添加点击事件
  add({x,y,z}){
    this.map.filter(e=>!e.fill).forEach(e=>{
      if(e.x==x&&e.y==y&&e.z==z){
        e.fill = true;
      }
    })
  }
  // 找出周围6个点坐标
  findAround({x,y,z}){
    const container = []
    container.push({x,y:y+1,z});
    container.push({x,y,z:z+1});
    container.push({x:x+1,y,z});
    container.push({x,y:y+1,z:z+1});
    container.push({x:x+1,y,z:z+1});
    container.push({x:x+1,y:y+1,z});
    return container.map(e=>{
      const {x,y,z} = e;
      if(x!==0&&y!==0&&z!==0){
        const min = Math.min(x,y,z);
        return {x:x-min,y:y-min,z:z-min}
      } else {
        return e
      }
    })
  }
  // 找出猫的下一步最可能靠近外面的那一步
  findNext({x,y,z}) {
    const canGo = this.findAround({x,y,z})
      .filter(e=>this.isExist(e) ? !this.isExist(e).fill: true)
    if(canGo.filter(e=>e.x>4||e.y>4||e.z>4).length>0){
      alert('神经🐱跑了 ')
      return canGo
    } else if (canGo.length===0) {
      return '神经猫被围住了';
    } else {
      // 只有一条路可走，不需要计算
      // 多条路可选，导出数组，交给path类来计算。
      return canGo
    }
  }
}
window.times = 0;

class Path {
  constructor(){
    this.root = null;
    this.pool = []
  }
  isStepInPathRepeat({
    coord,
    pathStack
  }){
    const {x,y,z} = coord;
    return pathStack.find(e=> e.x ===x && e.y ===y && e.z ===z)
  }
  findPath({
    coord,
    pathStack=[]
  }){
    const {x,y,z} = coord;
    const nextStep = stack.findNext({x,y,z})
    if(typeof nextStep === 'string'){
      if(this.pool.length>0){
        const minLen = Math.min(...this.pool.map(e=>e.length))
        if(pathStack.length < minLen){
          this.pool.push(pathStack)
        }
      } else {
        this.pool.push(pathStack)
      }
    }else{
      if(this.pool.length>0){
        const minLen = Math.min(...this.pool.map(e=>e.length))
        // 将路径池里面的路径，清除路径过长的那些。
        this.pool = this.pool.filter(e=> e.length <= minLen)
        // 如果本身步数已经比我的this.pool里面的某条已完成路径的步数还要多，则根本没有计算下去的必要。
        if (pathStack.length >= minLen) return
      }
      nextStep.forEach(e=>{
        if(pathStack.length > 0 && this.isStepInPathRepeat({pathStack,coord:e})) return
        window.times++;
        if(window.times>2000)return
        // console.log('计算次数',window.times);
        this.findPath({coord:e,pathStack:[...pathStack,e]})
      })
    }
  }
}

const stack = new Stack();
export default {
  data() {
    return {
      step: 0,
      cat: {
        x: 0,
        y: 0,
        z: 0
      },
      map: stack.map,
    };
  },
  mounted() {
    window.app = this;
    window.stack = stack;
  },
  created(){
    stack.init();
  },
  methods: {
    cssTransition(e) {
      return `${(-e.x+(e.y+e.z)/2) *55}px,${((e.y-e.z)*1.733/2 ) * 55}px`
    },
    addBlock(e) {
      window.times = 0;
      let index = e.target.dataset.index
      if (!index) return;
      index = index.split('-')
      stack.add({
        x: index[0],
        y: index[1],
        z: index[2]
      })
      const path = new Path();
      path.findPath({coord:this.cat,pathStack:[this.cat]});
      const pool = path.pool;
      const nextStep = stack.findNext(this.cat);
      if(typeof nextStep === 'string') {
        alert(nextStep);
        return
      }else if( pool.length === 0){
        console.log('crazy')
        this.cat = nextStep[0];
        // 没路了。神经猫要发神经了
      }else{
        // 有出路
        this.cat = pool[0][1];
        path.pool[0].forEach(e=>{
          document.querySelector(`span[data-index='${e.x}-${e.y}-${e.z}']`).style.backgroundColor='red';
          setTimeout(() => {
            document.querySelector(`span[data-index='${e.x}-${e.y}-${e.z}']`).style.backgroundColor='';
          }, 1000);
        })
      }
      this.step++;
    },
    init() {
      this.step = 0;
      this.cat = {x:0,y:0,z:0};
      stack.init();
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  .layout {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: auto;
    
    header {
      display: flex;
      max-width: 600px;
      width: 100%;
      padding: 20px;
      flex-direction: row;
      justify-content: space-around;
      
      button {
        border: none;
        background: #8f7a66;
        color: #fff;
        font-size: 20px;
        padding: 10px 30px;
        cursor: pointer;
        border-radius: 10px;
      }
      span {
        width: 100px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }

    .all-container {
      background-color: #666;
      width: 600px;
      height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;

      .circle {
        width: 50px;
        height: 50px;
        background-color: #b5b5b5;
        border-radius: 100%;
        position: absolute;
        cursor: pointer;
        &.block {
          background-color: #ff845e;
          cursor: no-drop;
        }
      }
      .cat {
        z-index: 1;
        cursor: no-drop;
      }
    }
  }
}
</style>
