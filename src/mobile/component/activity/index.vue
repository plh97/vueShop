<template>
  <div class="activity">
    <v-Header title="活动列表" option=""/>
    <div class="content">
      <ul>
        <router-link class="activity-item" tag="li" :to="`/${company}/activitydetail`">
          <div class="">
            <img class="activity-img" src="" alt="">
            <div class="activity-info">
              <p>圣诞大酬宾指定商品满减优惠，买得越多，优惠越多</p>
              <span>2017-12-12</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/mobile/store";
export default {
  store,
  data() {
    return {
      company: store.state.company
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/common/common.scss";
@import "~@/assets/common/dpr.scss";
.activity {
  .content {
    background: #f5f5f5;
    height: calc(100vh - 80rem/75);
    overflow-y: auto;
    ul {
      li {
        width: 94vw;
        height: (150rem/75);
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fff;
        padding: 0 3vw;
        margin-bottom: 0.2rem;
        .activity-img {
          border: 0.03rem solid #eee;
          width: (140rem/75);
          height: (140rem/75);
        }
        .activity-info {
          p {
            @include dpr-fz(32px);
            color: #666;
          }
        }
      }
    }
  }
}
</style>
