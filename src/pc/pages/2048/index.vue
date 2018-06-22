<template>
  <div class="layout">
    <header>
      <span class="scort">总分：{{scort}}</span>
      <button class="star" @click="init">New Game</button>
      <span class="sd"></span>
    </header>
    <div class="all-container">
      <div class="background">
        <span class="list-0-0"></span>
        <span class="list-0-1"></span>
        <span class="list-0-2"></span>
        <span class="list-0-3"></span>
        <span class="list-1-0"></span>
        <span class="list-1-1"></span>
        <span class="list-1-2"></span>
        <span class="list-1-3"></span>
        <span class="list-2-0"></span>
        <span class="list-2-1"></span>
        <span class="list-2-2"></span>
        <span class="list-2-3"></span>
        <span class="list-3-0"></span>
        <span class="list-3-1"></span>
        <span class="list-3-2"></span>
        <span class="list-3-3"></span>
      </div>
      <div class="container">
        <span 
          class="list"
          v-for="(e,i) in rocks" 
          :key="i"
          :style="`
            zIndex: ${e?e.num:0};
            transform: translate(${cssTransition(e)});
            display: ${e?'':'none'}
          `"
        >
          <span 
            class="inner"
            :id="`r${e&&e.id}`"
            :style="`backgroundColor: ${e ? e.color : ''}`"
          >
            {{e? e.num:''}}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from '@pengliheng/jquery'
const by = name => (o, p) => {
  const a = o[name];
  const b = p[name];
  return a < b ? -1 : 1;
};
const dely = ms => new Promise(res => setTimeout(res, ms));

export default {
  data() {
    return {
      scort:0,
      rocks: [
      ],
      color: {
        2: "#eee4da",
        4: "#ede0c8",
        8: "#f2b179",
        16: "#f59563",
        32: "#f67c5f",
        64: "#f65e3b",
        128: "#edcf72",
        256: "#edcc61",
        512: "#0444BF",
        1024: "#A79674",
        2048: "#282726"
      },
      directX: 30,
    };
  },
  mounted() {
    window.app = this;
    this.init();
    document.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") {
        this.turn('right');
      }else if(e.key === "ArrowLeft"){
        this.turn('left');
      }else if(e.key === "ArrowDown"){
        this.turn('down');
      }else if(e.key === "ArrowUp"){
        this.turn('up');
      }
    });
    document.addEventListener('touchstart',(start)=>{
      const moveFunc = (move) => {
        move && move.preventDefault();
        const dx = move.touches[0].clientX -  start.touches[0].clientX;
        const dy = move.touches[0].clientY -  start.touches[0].clientY;
        if(dx> this.directX){
          this.turn('right');
          document.removeEventListener('touchmove',moveFunc)
        }else if(dx<-this.directX){
          this.turn('left');
          document.removeEventListener('touchmove',moveFunc)
        }else if(dy>this.directX){
          this.turn('down');
          document.removeEventListener('touchmove',moveFunc)
        }else if(dy<-this.directX){
          this.turn('up');
          document.removeEventListener('touchmove',moveFunc)
        }
      }
      document.addEventListener('touchmove',moveFunc)
      document.addEventListener('touchend',()=>{
        document.removeEventListener('touchmove',moveFunc)
      })
    })
  },
  methods: {
    isMobile() {
      return window.navigator.userAgent.match(/Mobile/)
    },
    cssTransition(e) {
      if(this.isMobile()){
        return `${(e?e.x:0) * 23.5}vw, ${(e?e.y:0) * 23.5}vw`
      }else {
        return `${(e?e.x:0) * 150}px, ${(e?e.y:0) * 150}px`
      }
    },
    init(){
      this.rocks = [
        {x:0,y:0,num: 2,color: "#eee4da", id:'21' },
        // {x:1,y:0,num: 4,color: "#ede0c8", id:'23' },
        // {x:2,y:0,num: 2,color: "#eee4da", id:'20' },
        {x:3,y:0,num: 2,color: "#eee4da", id:'19' },
      ];
      this.scort = 0;
      // this.add();
      // this.add();
    },
    random24() {
      return ~~(Math.random() * 2) * 2 + 2;
    },
    random0123() {
      return ~~(Math.random() * 4);
    },
    num() {
      const num = this.random24();
      const result = {
        x: this.random0123(),
        y: this.random0123(),
        num,
        id: this.rocks.length + 1,
        color: this.color[num]
      };
      const _isExist = this.isExist({
        x: result.x,
        y: result.y
      });
      if (_isExist) return;
      return result;
    },
    // 是否游戏结束
    isGameOver() {
      const result = this.isFull() && this.rocks
        .filter(e=>e && (e.x!==3 || e.y !==3))
        .find(e=>{
          const nextX = this.isExist({x:e.x+1, y:e.y});
          const nextY = this.isExist({x:e.x, y:e.y+1});
          return e.num === (nextX&&nextX.num) ||
          e.num === (nextY&&nextY.num)
        })
      if(result === undefined){
        return true;
      }else{
        return false;
      }
    },
    // 是否满了
    isFull() {
      return this.rocks.filter(e => e).length > 15;
    },
    // 随机生成1个点
    add(callback) {
      if (this.isFull()) {
        console.log("满了不能再加了，但是游戏还没结束啊");
        return false;
      }
      const a = this.num();
      if (a) {
        this.rocks.push(a);
      } else {
        this.add();
      }
    },
    getNull() {
      return this.rocks.indexOf(null);
    },
    isExist({ x, y }) {
      return this.rocks.filter(e => e).find(e => e.x === x && e.y === y);
    },
    getIndex(id) {
      return this.rocks.findIndex(e => e && e.id === id);
    },
    handleDirect(direct) {
      if(direct === 'right'){
        return {
          handleArr: arr => arr
            .filter(e => e && e.x !== 3)
            .sort(by("x"))
            .reverse(),
          handleCondition: (e) => e.x < 3,
          next: (e)=>({ x: e.x + 1, y: e.y }),
          handleMove(e){e.x++}
        }
      } else if(direct === 'left'){
        return {
          handleArr: arr => arr
            .filter(e => e && e.x !== 0)
            .sort(by("x")),
          handleCondition: (e) => e.x > 0,
          next: (e)=>({ x: e.x - 1, y: e.y }),
          handleMove(e){e.x--}
        }
      } else if(direct === 'up'){
        return {
          handleArr: arr => arr
            .filter(e => e && e.y !== 0)
            .sort(by("y")),
          handleCondition: (e) => e.y > 0,
          next: (e)=>({ x: e.x, y: e.y - 1 }),
          handleMove(e){e.y--}
        }
      } else if(direct === 'down'){
        return {
          handleArr: arr => arr
            .filter(e => e && e.y !== 3)
            .sort(by("y"))
            .reverse(),
          handleCondition: (e) => e.y < 3,
          next: (e)=>({ x: e.x, y: e.y + 1 }),
          handleMove(e) {e.y++}
        }
      }
    },
    // 移动
    turn(direct) {
      this.rocks.forEach(e => e&&(e.canCalc = true));
      Promise.all(
        this.handleDirect(direct).handleArr(this.rocks)
          // 将他们移到最右
          .map(async e => {
            let next = this.isExist(this.handleDirect(direct).next(e));
            return this.calcAxis({ e ,direct});
          })
      ).then(res => {
        if (res.indexOf(true) > -1) {
          this.add();
          this.add();
        } else {
          console.log("没有移动，不用添加");
        }
        setTimeout(() => {
          if(this.isGameOver()){
            alert('游戏结束！')
            // this.init();
          }
        }, 0);
      });
    },
    // 处理移动距离的函数
    calcAxis({ e,direct }) {
      return new Promise(async (resolve, reject) => {
        let next = this.isExist(this.handleDirect(direct).next(e));
        if (next && next.num !== e.num) {
          resolve(false);
        } else if (next && next.canCalc && next.num === e.num) {
          // 3个条件，不为null，
          this.handleDirect(direct).handleMove(e)
          next.num*=2;
          this.scort+=e.num;
          next.canCalc = false;
          next.color=this.color[next.num]
          const dom = document.querySelector(`#r${e.id}`)
          const nextDom = document.querySelector(`#r${next.id}`)
          nextDom.animate([
            { transform: 'scale(0.95)' }, 
            { transform: 'scale(1.3)' }, 
            { transform: 'scale(1.03)' }, 
            { transform: 'scale(1)' } 
          ], { 
            duration: 200,
          });
          await dely(200);
          this.rocks.splice(this.getIndex(e.id), 1, null);

          resolve(true);
        } else if (next === undefined) {
          if (this.handleDirect(direct).handleCondition(e)) {
            this.handleDirect(direct).handleMove(e)
            await dely(0);
            this.calcAxis({ e,direct });
          }
          resolve(true);
        }
      });
    }
  }
};
</script>

<style lang="scss">
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

    .background {
      box-sizing: content-box;
      flex: 0 0 600px;
      background-color: #bbada0;
      display: inline-flex;
      flex-wrap: wrap;
      padding: 10px;
      justify-content: space-between;
      border-radius: 10px;
      width: 600px;
      position: absolute;
      z-index: -1;

      & > span {
        background-color: #eee4da59;
        margin: 10px;
        width: 130px;
        height: 130px;
        border-radius: 10px;
      }
    }

    .container {
      z-index: 0;
      padding: 10px;
      width: 620px;
      height: 620px;
      display: inline-flex;
      position: absolute;
      justify-content: flex-start;
      align-items: flex-start;
      -webkit-touch-callout: none;
      -ms-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -ms-touch-action: none;
      touch-action: none;

      .list {
        margin: 10px;
        width: 130px;
        height: 130px;
        border-radius: 10px;
        position: absolute;
        font-size: 55px;
        font-weight: bold;
        transition-property: transform;
        border-radius: 10px;
        // overflow: hidden;
        transition: 100ms ease-in-out;

        .inner {
          width: 100%;
          height: 100%;
          color: #fff;
          display: inline-flex;
          align-items: center;
          border-radius: 10px;
          justify-content: center;
          animation-fill-mode: backwards;
          animation: appear 200ms ease-in-out;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  html,body{
    overflow: hidden;
  }
  .layout{
    overflow: hidden;
    header {
      span{
        width: 70px;
      }
      button {
        padding: 10px 15px;
      }
    }
    .all-container {
      margin: 2vw;
      width: 96vw;
      height: 96vw;

      .background,.container {
        width: 96vw;
        height: 96vw;
        box-sizing: border-box;
        padding: 1vw;
        & > span,.list {
          width: 21vw;
          height: 21vw;
          margin: 1vw;
          font-size: 8vw;
        }
      }
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
