<template>
  <div class="layout">
    <header>
      <span class="scort">步数：{{step}}</span>
      <button class="star" @click="init">New Game</button>
      <span class="sd"></span>
    </header>
    <div class="all-container">
      <div @click="addBlock" class="background">
        <span 
          :class="e&&'active'" 
          :style="`transform: translate(${cssTransition(e)});`"
          v-for="(e,j) in map" 
          :key="j"></span>
      </div>
      <span 
        class="block" v-for="(e,i) in block" 
        :key="i"
        :style="`transform: translate(${cssTransition(e)});`"
      ></span>
      <span class="cat">猫啊</span>
    </div>
    <!-- <div class="show">
      <p v-for="(e,i) in rocks" :key="i">
        {{JSON.stringify(e)}}
      </p>
    </div> -->
  </div>
</template>

<script>
class Stack {
  constructor(){
    this.map = [
      {x:0,y:0,z:0, fill: false},
    ]
  }
  isExist({x,y,z}){
    return this.map.find(e=> e.fill && e.x ===x && e.y ===y && e.z ===z)
  }
  add(){
    // 随机添加
    const xyz = {
      x: (Math.random()*4) ,
      y: (Math.random()*4) ,
      z: (Math.random()*4)
    }
    if(this.isExist(xyz)) {
      this.add()
    }else{
      this.block.push(xyz)
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
  },
  created(){
    // new Array(15).fill().forEach(arr=>{
    //   this.add();
    // })
  },
  methods: {
    cssTransition(e) {
      return `${(-e.x+(e.y+e.z)/2) *100}px,${((e.y-e.z)*1.733/2 ) * 100}px`
    },
    addBlock(e) {
      console.log(e);
    },
    init() {
      // 123
    }
  }
};
</script>

<style lang="scss" scoped>
.show {
  position: fixed;
  bottom: 50vh;
  left: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: -27%;
}

body {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
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
    height: 620px;
    width: 620px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .background {
      position: absolute;
      box-sizing: content-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #676567;
      padding: 50px;
      z-index: -1;
      width: 100%;
      height: 100%;

      span {
        margin: 0 2px;
        width: 50px;
        height: 50px;
        background-color: #b5b5b5;
        border-radius: 200px;
        display: inline-block;
        &.active {
          background-color: #ff845e;
        }
      }
    }

    .block {
      margin: 0 2px;
      width: 50px;
      height: 50px;
      border-radius: 200px;
      display: inline-block;
      background-color: #ff845e;
    }

    .cat {
      background-color: pink;
      width: 34px;
      height: 22px;
      text-align: center;
      position: absolute;
    }
  }
}


@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  80% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
