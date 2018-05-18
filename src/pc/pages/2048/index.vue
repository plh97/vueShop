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
    <div class="list"></div>
    <div class="element"></div>
  </div>
</template>

<script>
import store from "../../store";
import $ from "@pengliheng/jquery";
import axios from "axios";

const by = name => (o, p) => {
  const a = o[name];
  const b = p[name];
  return a < b ? -1 : 1;
};

class Trash {
  constructor({ container }) {
    this.container = container;
    this.rock = [...container.children];
    this.color = {
      2: "#F3CD05",
      4: "#36688D",
      8: "#F49F05",
      16: "#F18904",
      32: "#BDA589",
      64: "#A7414A",
      128: "#563838",
      256: "#A37C27",
      512: "#0444BF",
      1024: "#A79674",
      2048: "#282726"
    };
    this.map = [
      [0, 0, 0, 0], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0], 
      [0, 0, 0, 0]
    ];
  };
  randomRock(){
    //
  }
  init(){
    this.randomRock();
    this.randomRock();

  }
}

export default {
  store,
  created() {
    window.app = this;
  },
  mounted() {
    const container = this.$el.querySelector(".list");
    const trash = new Trash({ container });
    trash.init();
    $(window).on("keydown", e => {
      if (e.key === "ArrowRight") {
        trash.right();
      }
    });

    document.body.addEventListener('click',()=>{
      axios({
        method: 'post',
        // url: '/auth',
        url: 'http://localhost:9090/auth',
        params: {
          name:'peng'
        },
        withCredentials: true,
        // xsrfCookieName: 'XSRF-TOKEN', // default
  
      }).then(res=>{
        console.log(res.data);
      })
    })





  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;

  .background {
    box-sizing: content-box;
    flex: 0 0 600px;
    background-color: #ccc;
    display: inline-flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
    border-radius: 10px;

    span {
      background-color: #fff;
      margin: 5px;
      width: 140px;
      height: 140px;
      border-radius: 10px;
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

<style lang="scss">
  .list {
    position: absolute;
    width: 600px;
    height: 600px;
    padding: 5px;

    span {
      position: absolute;
      left:0;
      top:0;
      // background-color: #fff;
      font-size: 70px;
      color: #fff;
      font-weight: 600;
      font-family: sans-serif;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
      width: 140px;
      height: 140px;
      border-radius: 10px;
      background: red;
    }
  }

</style>



