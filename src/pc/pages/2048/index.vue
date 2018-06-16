<template>
  <div>
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
        :data-item="JSON.stringify(e)"
        :key="i"
        v-if="e!==null"
        :style="`
          transform: translate(${e.x * 150}px, ${e.y * 150}px);
        `"
      >
        <span 
          class="inner"
          :style="`backgroundColor: ${e.color}`"
        >
          {{e.num}}
        </span>
      </span>
    </div>
    <div class="show">
      <p v-for="(e,i) in rocks" :key="i">
        {{JSON.stringify(e)}}
      </p>
    </div>
  </div>
</template>

<script>
// import $ from '@pengliheng/jquery'
window.by = name => (o, p) => {
  const a = o[name];
  const b = p[name];
  return a < b ? -1 : 1;
};

class Stack {
  constructor() {
    this.item = [
      { x: 2, y: 2, num: 2, id: 6558, color: "#eee4da" },
      { x: 3, y: 2, num: 2, id: 8643, color: "#eee4da" },
      { x: 2, y: 3, num: 2, id: 3558, color: "#eee4da" },
      { x: 3, y: 3, num: 2, id: 4678, color: "#eee4da" }
    ];
    this.color = {
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
    };
  }
  random24() {
    return ~~(Math.random() * 2) * 2 + 2;
  }
  random0123() {
    // 随机0/1/2/3
    return ~~(Math.random() * 4);
  }
  // 生成随机数，如果重复了，就返回false
  num() {
    const num = this.random24();
    const result = {
      x: this.random0123(),
      y: this.random0123(),
      num,
      id: ~~(Math.random() * 10000),
      color: this.color[num]
    };
    const _isExist = this.isExist({
      x: result.x,
      y: result.y
    });
    if (_isExist) return;
    return result;
  }
  // 是否满了
  isFull() {
    return this.item.filter(e => e).length > 15;
  }
  // 随机生成1个点
  add(callback) {
    if (this.isFull()) {
      console.log("get out foolish,gameover!~");
      return false;
    }
    const a = this.num();
    if (a) {
      console.log("add");
      // this.item[this.getNull()]=a
      this.item.push(a);
      if (this.isFull()) {
        alert("游戏结束");
      }
    } else {
      this.add();
    }
  }
  remove({ x, y }) {
    const { id } = this.isExist({ x, y });
    const i = this.item.indexOf(e.id === id);
    this.item[i] = null;
  }
  getNull() {
    return this.item.indexOf(null);
  }
  isExist({ x, y }) {
    return this.item.filter(e => e).find(e => e.x === x && e.y === y);
  }
}

const stack = new Stack();

export default {
  data() {
    return {
      // 存储数字
      rocks: stack.item
    };
  },
  created() {
    window.app = this;
    window.stack = stack;
  },
  mounted() {
    // stack.add();
    // stack.add();
    document.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") {
        this.turnRight();
      }
    });
  },
  methods: {
    // 向右滑动，给keydown添加的绑定事件
    turnRight() {
      stack.item
        .filter(e => e)
        .sort(by("x"))
        .reverse()
        .filter(e => {
          // 将第四排排过滤
          if (e.x === 3) return false;
          return e;
        })
        // 将他们移到最右
        .forEach(e => {
          // 向右移动, 应该作为单独一个函数，用于穷举自身，直到移动到x >2 return;
          this.calcAxis({ e });
          console.log(e.id,e.num);
        });
      // 最后才生成2个新♦
      // stack.add();
      // stack.add();
    },
    // 处理移动距离的函数
    calcAxis({ e }) {
      let next = stack.isExist({ x: e.x + 1, y: e.y });
      // console.log(next);
      if (next && next.num !== e.num) {
        return false;
      } else if (next && next.num === e.num) {
        e.x++;
        e.num *= 2;
        e.color = stack.color[e.num];
        stack.item.filter(e => e).forEach((e, i) => {
          if (e.id === next.id) {
            this.rocks[i] = null;
          }
        });
      } else if (next === undefined) {
        if (e.x < 3) {
          e.x++;
          this.calcAxis({ e });
        }
      }
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

div {
  display: flex;
  justify-content: center;

  .background,
  .container {
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
    position: relative;

    .list {
      position: absolute;
      font-size: 55px;
      font-weight: bold;
      transition-property: transform;
      border-radius: 10px;
      overflow: hidden;
      transition: 100ms ease-in-out;

      .inner {
        width: 100%;
        height: 100%;
        color: #fff;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        animation-fill-mode: backwards;
        animation: appear 200ms ease-in-out;
      }
    }
  }
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
