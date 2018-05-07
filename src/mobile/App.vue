<template>
  <div class="wrap">
    <router-view/>
	</div>
</template>

<script>
import store from '@/mobile/store';
import router from '@/mobile/router';
export default {
  created(){
    window.app = this;
    window.store = store;
    window.router = router;
  }
}
</script>



<style lang="scss">
@import '~@/assets/common/common.scss';
// @import 'animate.css';
.wrap {
    width: 100%;
    overflow-x: hidden;
}
</style>
