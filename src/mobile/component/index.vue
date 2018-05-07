<template>
	<div class="index">
		<h1>vue 版本 商城 入口</h1>
		<span>
			<span @click="go('fst')" :to="'/fst'">法塞特</span>
			<span @click="go('lufa')" :to="'/lufa'">鹭发商城</span>
			<span @click="go('zhuogao')" :to="'/lufa'">卓高商城</span>
		</span>
	</div>
</template>

<script>
import store from "@/mobile/store";
import router from "@/mobile/router";
export default {
  methods: {
    go(url) {
      store.state.company = url;
      router.push(`/${url}`);
    }
  }
};
</script>


<style lang="scss">
@import "~@/assets/common/dpr.scss";
.index {
  @include dpr-fz(20px);
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1rem;
  }
  span {
    display: inline-flex;
    flex-direction: row;

    span {
      font-size: 0.5rem;
      padding: 0.3rem;
      border: 1px solid red;
      border-radius: 0.4rem;
      margin: 0.3rem;
    }
  }
}
</style>
