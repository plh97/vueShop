<template>
  <div class="nav-bar">
    <div class="toggle" v-if="show">
      <div class="mask" @click="toggle"></div>
      <div class="nav">
        <span class="left">选择赠品</span>
        <svg class="icon" aria-hidden="true" @click="toggle">
          <use xlink:href="#icon-guanbi2"></use>
        </svg>
      </div>
      <form>
        <label class="list" :for="`list${i}`" name="list" v-for="(list,i) in list" :key='i'>
          <input type="radio" :id="`list${i}`" name="select list">
          <img :src="list.goods_image">
          <span class="context">
            <span class="fir">{{list.goods_name}}</span>
            <span class="sec">
              <span class="price">
                {{ list.retail_price | currency }}
              </span>
              <span class="num">X{{list.num}}</span>
            </span>
          </span>
        </label>
      </form>
      <button @click="toggle" class="btn">确定</button>
    </div>
    <footer v-else>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-woyaotuijian"></use>
        </svg>
        我要推荐
      </span>
      <span @click="toggle">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
        购物车
      </span>
      <span @click="add">加入购物车</span>
      <span>立即购买</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/common/dpr.scss';
@import '~@/assets/common/color.scss';

.nav-bar {
  width: 100%;
  bottom: 0;
  position: fixed;

  .toggle {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: rgba(0,0,0,0.5);

    .mask {
      flex: 1;
    }

    .nav {
      background-color: #fff;
      padding: (25rem/75);
      height: (100rem/75);
	    @include flex-center();
      justify-content: space-between;
      @include dpr-fz(34px);
      color: #333333;
      font-weight: bold;

      svg {
        @include dpr-fz(52px);
        color: #ccc;
      }
    }

    form {
      background-color: #fff;
      height: (565rem/75);
      overflow-y: scroll;

      label + label {
        border-top: 1px solid #eee;
      }
      label:first-child {
        border-top: 1px solid #eee;
      }

      label {
        display: flex;
        margin: 0 (25rem/75);
        padding: (25rem/75) 0;
        height: (170rem/75);
        @include flex-center();
        justify-content: space-between;

        img {
          min-width: 1rem;
          height: 100%;
          margin: 0 (13rem/75);
        }
        
        .context {
          height: 100%;
          @include flex-center();
          flex-direction: column;
          // align-items: flex-start;
          align-items: stretch;
          flex: 1;

          .fir {
            @include dpr-fz(28px);
            text-align: justify;
          }

          .sec {
            display: flex;
            justify-content: space-between;
            @include dpr-fz(28px);

            .price {
              font-weight: bold;
              color: #E63131;
            }

            .num {
              color: #ccc;
            }
          }
        }
      }
    }

    .btn {
      background-color: #fff;
      height: (100rem/75);
      background-color: #E63131;
      width: 100%;
      color: #fff;
      @include dpr-fz(28px);
      border: 0;
    }
  }

  footer {
    background-color: #fff;
    display: flex;
    flex-direction: row;

    span {
      flex: 0 0 25vw;
      color: #999999;
      height: (100rem/75);
	    @include flex-center();
      flex-direction: column;
      @include dpr-fz(24px);

      svg.icon {
        font-size: 0.6rem;
      }

      &:nth-child(3){
        color: #FFF;
        background-color: #E69731;
	      @include dpr-fz(28px);
      }

      &:nth-child(4){
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

export default {
  store,
  props: {
    goodInfo: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      foo:'foo',
      show: false,
      list: store.state.selectList,
    }
  },
  methods: {
    toggle() {
      if (this.show) {
        this.show = false;
        document.body.style.overflow = 'scroll';
      } else {
        this.show = true;
        document.body.style.overflow = 'hidden';
      }
    },
    add(){
      const isExist = store.state.selectList.find(arr=> arr.goods_name === this.goodInfo.goods_name);
      if(isExist) {
        // +1
        isExist.num +=1
      } else {
        // 新增
        store.state.selectList.push(Object.assign({}, this.goodInfo, {
          num:1
        }))
      }
      this.message(`添加一件商品成功~！`);
      store.commit('sync','selectList')
    },
  }
}
</script>








