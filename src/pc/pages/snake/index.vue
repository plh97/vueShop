<template>
  <div class="container">
  </div>
</template>

<script>
import store from '../../store';
import map from './map.js'
import $ from '@pengliheng/jquery';






class Trash {
  constructor({ container }) {
    this.container = container;
    this.direct = 'ArrowRight';
    this.border = {
      width: map[0].length - 1,
      height: map.length - 1,
    };
    this.snake = [
      { x: 1, y: 5 },
      { x: 2, y: 5 },
    ];
    this.food = {
      x: Math.floor(Math.random() * this.border.width),
      y: Math.floor(Math.random() * this.border.height),
    };
  }

  draw() {
    // 清空画板
    const activeDom = document.querySelectorAll('.active');
    if (activeDom) {
      activeDom.forEach(dom => dom.classList.remove('active'));
    }
    this.snake.forEach(({ x, y }) => {
      document.querySelector(`.list-${y}-${x}`).classList.add('active');
    });
    document.querySelector(`.list-${this.food.y}-${this.food.x}`).classList.add('food');
  }

  isEat() {
    const top = this.snake[this.snake.length - 1];
    if (
      top.x === this.food.x &&
      top.y === this.food.y
    ) {
      document.querySelector(`.list-${this.food.y}-${this.food.x}`).classList.remove('food');
      this.food = {
        x: Math.floor(Math.random() * this.border.width),
        y: Math.floor(Math.random() * this.border.height),
      };
      return true;
    }
    return false;
  }

  move({ time }) {
    if (this.direct === 'ArrowRight') {
      if (this.snake[this.snake.length - 1].x === this.border.width) {
        this.snake.push({
          x: 0,
          y: this.snake[this.snake.length - 1].y,
        });
      } else {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x + 1,
          y: this.snake[this.snake.length - 1].y,
        });
      }
    } else if (this.direct === 'ArrowLeft') {
      if (this.snake[this.snake.length - 1].x === 0) {
        this.snake.push({
          x: this.border.width,
          y: this.snake[this.snake.length - 1].y,
        });
      } else {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x - 1,
          y: this.snake[this.snake.length - 1].y,
        });
      }
    } else if (this.direct === 'ArrowDown') {
      if (this.snake[this.snake.length - 1].y === this.border.height) {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x,
          y: 0,
        });
      } else {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x,
          y: this.snake[this.snake.length - 1].y + 1,
        });
      }
    } else if (this.direct === 'ArrowUp') {
      if (this.snake[this.snake.length - 1].y === 0) {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x,
          y: this.border.height,
        });
      } else {
        this.snake.push({
          x: this.snake[this.snake.length - 1].x,
          y: this.snake[this.snake.length - 1].y - 1,
        });
      }
    }
    if (!this.isEat()) {
      this.snake.shift();
    }
    this.draw();
    setTimeout(() => {
      this.move({ time });
    }, time);
  }

  turn({ direct }) {
    if (this.direct === 'ArrowUp' && direct === 'ArrowDown') {
      return;
    } else if (this.direct === 'ArrowDown' && direct === 'ArrowUp') {
      return;
    } else if (this.direct === 'ArrowLeft' && direct === 'ArrowRight') {
      return;
    } else if (this.direct === 'ArrowRight' && direct === 'ArrowLeft') {
      return;
    }
    if (direct === 'ArrowUp' ||
      direct === 'ArrowDown' ||
      direct === 'ArrowRight' ||
      direct === 'ArrowLeft') {
      this.direct = direct;
    }
  }

  init({ time }) {
    this.draw();
    this.move({ time });
  }
}


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

    const container = document.querySelector('.container');

    container.innerHTML = map
      .map((arr1, i) => arr1.map((arr2, j) => `<span class="list-${i}-${j}"></span>`))
      .map(arr1 => arr1.join('')).join('');


      const trash = new Trash({ container });
      trash.init({ time: 100 });
      $(window).on('keydown', (e) => {
        trash.turn({ direct: e.key });
      });
  },
  methods:{}
};







</script>

<style lang="scss">
.container {
  width: 672px;
  background-color: #ccc;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;

  span {
    background-color: #fff;
    width: 30px;
    height: 30px;
    margin: 1px;

    &.active {
      background-color: blue;
    }
    &.food {
      background-color: red;
    }
  }
}
</style>
