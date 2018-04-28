<template>
  <div class="address">
    <v-Header title="收货地址" option="" />
    <div class="content">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="btn-add-address">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrowright"></use>
      </svg>
      新增地址
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "~@/assets/common/dpr.scss";
.address{
  height: 100vh;
  background: #F5f5f5;
  .content{
    height: calc(100vh - 170rem/75);
    overflow-y: auto;
    ul{
      width: 100%;
      li{
        height: (180rem/75);
        background: #FFF;
        border: 0.02rem solid #EEE;
      }
    }
  }
  .btn-add-address{
    height: (90rem/75);
    background: #c83c3b;
    color: #FFF;
    @include dpr-fz(32px);
    text-align: center;
    @include flex-center();
  }
}
</style>
