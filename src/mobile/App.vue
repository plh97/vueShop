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
@import "~@/assets/common/common.scss";
@import "~@/assets/common/dpr.scss";
// @import 'animate.css';
.wrap {
    width: 100%;
    overflow-x: hidden;
}
.mint-msgbox {
  @include dpr-fz(32px);
  .mint-msgbox-title{
    @include dpr-fz(34px);
  }
  .mint-msgbox-content {
    height: 1.8rem;
    padding: 0.3rem 0.5rem;
    .mint-msgbox-message {
      line-height: 1rem;
    }
  }
  .mint-msgbox-btns {
    height: 1rem;
    
    button {
      @include dpr-fz(32px);
      // height: 1rem;
    }
  }
}

.mint-toast-text {
  @include dpr-fz(28px);
}
</style>