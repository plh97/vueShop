<template>
  <header class="header">
    <span class="option" @click="go(leftBackTo)">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-jiantou-copy"></use>
      </svg>
      返回
    </span>
    <span class="title">{{title}}</span>
    <span class="option" @click="go(rightBackTo)">
      {{option}}
    </span>
  </header>
</template>

<script>
import store from "@/mobile/store";
import router from "@/mobile/router";
export default {
  store,
  router,
  name: "v-Header",
  data() {
    return {
      title: this.$attrs.title,
      backto: this.$attrs.backto,
      option: this.$attrs.option,
      company: store.state.company,
      leftBackTo: this.$attrs.leftBackTo,
      rightBackTo: this.$attrs.rightBackTo,
    };
  },
  created() {},
  methods: {
    go(url) {
      if(url === undefined){
        router.push(
          `/${store.state.company}/usercenter`
        );
      }else{
        router.go(url);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/common/dpr.scss";
@import "~@/assets/common/color.scss";
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
</style>
