<template>
  <div class="newaddress">
    <header class="header">
      <span class="option" @click="back">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou-copy"></use>
        </svg>
        返回
      </span>
      <span class="title">编辑/新增 地址</span>
      <span class="option" @click="save">
        保存
      </span>
    </header>
    <div class="content">
      <ul>
        <li>
          <label>收货人</label>
          <input id="name" type="text" placeholder="不少于两个字">
        </li>
        <li>
          <label>手机号码</label>
          <input maxlength="11" id="phone" type="text" placeholder="11手机号码">
        </li>
        <li>
          <label>地区</label>
          <input id="zone" type="text" placeholder="省份 城市 县区">
        </li>
        <li>
          <label>详细地址</label>
          <input id="address" type="text" placeholder="5~60字，且不能全都是数字">
        </li>
        <li>
          <label>邮政编码</label>
          <input id="email" type="text" placeholder="6位邮政编码">
        </li>
        <li>
          <label for="default">
            <input id="default" type="checkbox">设为默认地址
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import router from "@/mobile/router";
import store from "@/mobile/store";
export default {
  router,
  store,
  methods: {
    save(){
      let address = {
        id: ~~(Math.random()*100000000)
      };
      [...document.querySelectorAll('input')].forEach( dom => {
        if(dom.id === 'default'){
          if(dom.checked){
            // to set default address
            
            store.commit("syncState", {
              stateName: "myInfo",
              stateValue: {
                address: Object.assign({}, store.state.myInfo.address,{
                  default: address.id
                }),
              }
            });
          }
        } else {
          address[dom.id] = dom.value;
        }
      });

      store.commit("syncState", {
        stateName: "myInfo",
        stateValue: {
          address:[...store.state.myInfo.address,address],
        }
      });
      
      store.commit("syncSession", "myInfo");
      
      this.message({
        type: "info",				
        time: 1000,					
        content: `地址保存成功！`,
        next: function(){
          // to do something
          router.go(-1);
        }
      })
    },
    back(){
      //
      router.go(-1);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~@/assets/common/dpr.scss";
@import "~@/assets/common/color.scss";

.newaddress {
  height: 100vh;

  .header {
    background-color: $fst-red;
    // position: fixed;
    left: 0;
    height: (80rem/75);
    top: 0;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 0 0.2rem;
    @include dpr-fz(28px);

    .title {
      @include dpr-fz(38px);
    }
    .option {
      min-width: (86rem/75);
      @include flex-center();

      svg {
        @include dpr-fz(30px);
      }
    }
  }

  .content {
    height: calc(100vh - 80rem/75);
    overflow-y: scroll;
    background: #f5f5f5;

    ul {
      background: #fff;

      li {
        width: 94vw;
        height: (80rem/75);
        margin: 0 3vw;
        border-bottom: 0.04rem solid #eee;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        label {
          width: (160rem/75);
          @include dpr-fz(32px);
          margin-right: (20rem/75);
        }

        label[for="default"] {
          width: auto;
        }

        input {
          border: none;
          background: none;
        }
      }
    }
  }
}
</style>
