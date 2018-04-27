<template>
    <header class="header">
        <router-link class="option" fst tag="span" :to="`/${company}/usercenter`">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou-copy"></use>
            </svg>
            返回
        </router-link>
        <span class="title">{{title}}</span>
        <router-link class="option" fst tag="span" :to="`/${company}/usercenter`">
            {{option}}
        </router-link>
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
      company: store.state.company,
      backto: this.$attrs.backto,
      option: this.$attrs.option
    };
  },
  methods: {
    go() {
      router.go(-1);
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
  }
}
</style>
