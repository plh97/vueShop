<template>
  <div class="container">
    <div class="mask" @click="toggle"></div>
    <div class="nav">
      <span class="left">选择规格</span>
      <svg class="icon" aria-hidden="true" @click="toggle">
        <use xlink:href="#icon-guanbi2"></use>
      </svg>
    </div>
    <form>
      <p>净重</p>
      <label class="list" :for="`w1`">
        <input type="radio" :id="`w1`" name="select" checked="checked">
        <span>1KG</span>
      </label>
      <label class="list" :for="`w2`">
        <input type="radio" :id="`w2`" name="select">
        <span>1.5KG</span>
      </label>
      <label class="list" :for="`w3`">
        <input disabled type="radio" :id="`w3`" name="select">
        <span>2KG</span>
      </label>
    </form>
    <form>
      <p>容量</p>
      <label class="list" :for="`l1`">
        <input type="radio" :id="`l1`" name="select" checked="checked">
        <span>1ML</span>
      </label>
      <label class="list" :for="`l2`">
        <input type="radio" :id="`l2`" name="select">
        <span>1.5ML</span>
      </label>
      <label class="list" :for="`l3`">
        <input type="radio" :id="`l3`" name="select">
        <span>2ML</span>
      </label>
    </form>
    <form class="num">
      <span>购买数量</span>
      <InputNum 
        @add="add"
        @reduce="reduce"
        :value='num'
      />
    </form>

    <footer>
      <span @click="addToShopCar">加入购物车</span>
      <span>立即购买</span>
    </footer>
  </div>
</template>



<style lang="scss" scoped>
@import '~@/assets/common/dpr.scss';
@import '~@/assets/common/color.scss';


.container {
  width: 100%;
  bottom: 0;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;


  .mask {
    flex: 1;
    background-color: rgba(0,0,0,0.5);
  }

  .nav {
    color: #333;
    font-weight: bold;
    padding: (25rem/75);
    height: (100rem/75);
    @include dpr-fz(34px);
    @include flex-between();
    background-color: #fff;

    svg {
      @include dpr-fz(52px);
      color: #ccc;
    }
  }

  form {
    background-color: #fff;
    margin: 0 (24rem/75);
    // padding-bottom: (30rem/75);
    border-top: 1px solid #eee;
    height: (148rem/75);

    p {
      color: #999;
      @include dpr-fz(28px);
      margin: 0.2rem 0;
    }

    label {
      display: inline-flex;
      input {
        display: none;
      }
      span {
        color: #666;
        background-color: #eee;
        padding: (10rem/75) (25rem/75);
        border-radius: (5rem/75);
      }
      input[type="radio"]:checked + span {
        background-color: #B84747;
        color: #fff;
      }
      input[type="radio"]:disabled + span {
        background-color: #eee;
        color: #ccc;
      }
    }
  }

  .num {
    display: flex;
    @include flex-between();
    
  }

  footer {
    background-color: #fff;
    display: flex;
    flex-direction: row;

    span {
      flex: 0 0 50vw;
      color: #999999;
      height: (100rem/75);
	    @include flex-center();
      flex-direction: column;
      @include dpr-fz(24px);


      &:nth-child(1){
        color: #FFF;
        background-color: #E69731;
	      @include dpr-fz(28px);
      }

      &:nth-child(2){
        color: #FFF;
        background-color: #E63131;
	      @include dpr-fz(28px);
      }
    }
  }
}
</style>


<script>
import store from '@/mobile/store';
import router from '@/mobile/router';
import InputNum from './InputNum.vue';

export default {
  store,
  components:{
    InputNum
  },
  props: {
    goodInfo: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      num: 1,
      foo:'foo',
      list: store.state.selectList,
    }
  },
  methods: {
    add(){
      this.num += 1;
    },
    reduce(){
      if(this.num === 1) return
      this.num -= 1;
    },
    toggle() {
      store.state.showWhat = '';
      document.body.style.overflow = 'scroll';
    },
    created(){
      document.body.style.overflow = 'hidden';
    },
    addToShopCar(){
      const isExist = store.state.selectList.find(arr=> arr.id === this.goodInfo.id);
      if(isExist){
        // +1
        isExist.num += this.num;
      } else {
        // 新增
        store.state.selectList.push(Object.assign({}, this.goodInfo, {
          num: this.num
        }))
      }
      this.message(`添加${this.num}件商品成功~！`);
      store.commit('sync','selectList')
      store.state.showWhat = '';
      document.body.style.overflow = 'scroll';
    },
  }
}
</script>








