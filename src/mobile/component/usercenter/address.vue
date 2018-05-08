<template>
  <div class="address">
    <v-Header title="收货地址" option="" :leftBackTo="-1"/>
    <div class="content">
      <ul>
        <li v-for="(address,i) in addressList" :key="i" @click="setDefault(i)" v-if="address.address">
          <div class="address-info">
            <div class="address-name">

              <span class="default-address" v-if="i === defaultAddress">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-htmal5icon14"></use>
                </svg>（默认）
              </span>

              <span class="address-detail">{{address.address}}</span>
              <div class="receiver-phone">
                <span>{{address.name}}</span>
                <span>{{address.phone}}</span>
              </div>

              <div class="option">
                <span class="select">选择</span>
                <span class="edit-del">
                  <router-link class="address-select" tag="label" :to="`/${company}/newaddress?id=${i}`">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-bianji"></use>
                    </svg>编辑
                  </router-link>
                  <label @click="deleted(i)">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-shanchu"></use>
                    </svg>删除 
                  </label>
                </span>
              </div>

            </div>
          </div>
        </li>

      </ul>
    </div>
    <router-link tag="div" class="btn-add-address" :to="`/${company}/newaddress`">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-add1"></use>
      </svg>
      新增地址
    </router-link>
  </div>
</template>

<script>
import store from "@/mobile/store";
export default {
  store,
  data() {
    return {
      myInfo: store.state.myInfo,
      company: store.state.company
    };
  },
  computed:{
    defaultAddress: () => store.state.myInfo.address.default,
    addressList: ()=> store.state.myInfo.address.container
  },
  methods: {
    setDefault(id){
      store.commit("syncState", {
        stateName: "myInfo",
        stateValue: {
          address: Object.assign({}, store.state.myInfo.address, {
            default: id
          })
        }
      });
      store.commit("syncSession", "myInfo");
    },
    deleted(id){
      store.commit("syncState", {
        stateName: "myInfo",
        stateValue: {
          address: Object.assign({}, store.state.myInfo.address, {
            container: store.state.myInfo.address.container.filter((arr,i) => i!== id)
          })
        }
      });
      store.commit("syncSession", "myInfo");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/common/dpr.scss";
.address {
  height: 100vh;
  background: #f5f5f5;
  .content {
    height: calc(100vh - 170rem/75);
    overflow-y: auto;
    ul {
      width: 100%;
      li + li{
        border-top: 0.04rem solid #eee;
      }
      li {
        height: auto;
        background: #fff;
        .address-info {
          margin: 0 3vw;
          padding: (10rem/75) 0;
          .address-name {
            @include dpr-fz(32px);
            .default-address {
              color: #b84747;
            }
            .address-detail {
              text-align: justify;
            }
            .receiver-phone {
              color: #999;
              @include dpr-fz(24px);
              margin: (20rem/75) 0;
            }
          }
          .option {
            color: #666;
            @include dpr-fz(28px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            .edit-del {
              width: (280rem/75);
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
        }
      }
    }
  }
  .btn-add-address {
    height: (90rem/75);
    background: #c83c3b;
    color: #fff;
    @include dpr-fz(32px);
    text-align: center;
    @include flex-center();
  }
}
</style>
