<template>
	<div class="message">
		<v-Header title="编辑个人资料" option="保存" />
		<div class="msg-body">
			<ul>
				<li>
          <router-link class="router" tag="span" :to="`/${company}/avator`">
            <label>头像</label>
            <span class="right-part">
              <img class="avator" src="@/assets/images/lufa/autoPhoto.jpg" alt="">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-arrowright"></use>
              </svg>
            </span>
          </router-link>
				</li>
				<li>
					<label>用户名</label>
					<span class="right-part">
						<input type="text" name="userName" placeholder="用户名" maxlength="12">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-arrowright"></use>
						</svg>
					</span>
				</li>
				<li>
					<label>性别</label>
					<span class="right-part">
            <select name="sex" id="sex">
              <option value="1">男</option>
              <option value="0">女</option>
            </select>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </span>
				</li>
				<li>
					<label>出生日期</label>
					<span class="right-part">
            <input type="date" name="birthday" class="birthday">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </span>
				</li>
				<li>
					<label>手机号码</label>
					<span class="right-part">
            <input type="number" name="phoneNum" oninput="if(value.length>11)value=value.slice(0,11)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </span>
				</li>
				<li>
					<label>邮箱</label>
					<span class="right-part">
            <input type="text" name="mail">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </span>
				</li>
				<li>
          <!-- <router-link class="router" tag="span" :to="`/${company}/address`"> -->
            <label>地址管理</label>
            <span class="right-part">
              <input type="textarea" name="address">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-arrowright"></use>
              </svg>
            </span>
          <!-- </router-link> -->
				</li>
				<li>
          <router-link class="router" tag="span" :to="`/${company}/modifypwd`">
            <label>修改密码</label>
            <span class="right-part">
              <!-- <input type="password" name="pwd" minlength="8" maxlength="16"> -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-arrowright"></use>
              </svg>
            </span>
          </router-link>
				</li>
			</ul>
			<ul class="hobby">
          <label>爱好：</label>
          <!-- <input type="text" class="content-hobby"> -->
          <textarea name="hobby" class="content-hobby" placeholder="（50字以内）" maxlength="50"></textarea>
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
      company: store.state.company,
      defaultImg:
        'this.src="' + require("@/assets/images/fst/load_error.png") + '"'
    };
  }
};
</script>
<style  lang="scss">
@import "~@/assets/common/dpr.scss";
.message {
}
.msg-body {
  height: calc(100vh - 80rem/75);
  background: #f5f5f5;
  ul {
    background: #fff;
    margin-bottom: (10rem/75);
    &.hobby {
      background: #fff;
      height: (320rem/75);
      label {
        margin-left: 3vw;
        line-height: 1rem;
        @include dpr-fz(32px);
        color: #666666;
      }
      .content-hobby {
        @include dpr-fz(32px);
        color: #999;
        display: block;
        width: 94vw;
        height: (200rem/75);
        margin: 0 3vw;
        &::-webkit-input-placeholder {
          color: #ddd;
        }
      }
    }
    li {
      width: 94vw;
      height: (90rem/75);
      margin: 0 3vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.01rem solid #eee;
      .router {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
      label {
        @include dpr-fz(32px);
        color: #666666;
      }
      &:first-child {
        height: (120rem/75);
      }
      span.right-part {
        @include flex-center();
        .avator {
          width: (80rem/75);
          height: (80rem/75);
          border: 0.02rem solid #ccc;
          border-radius: 50%;
        }
        svg {
          color: #999;
          margin-left: (25rem/75);
        }
        input {
          @include dpr-fz(32px);
          height: (86rem/75);
          border: none;
          text-align: right;
          color: #999;
          background: none;
          &.birthday {
            width: (240rem/75);
            appearance: none;
          }
        }
        select {
          @include dpr-fz(32px);
          color: #999;
          border: none;
          height: (86rem/75);
          width: (90rem/75);
          direction: rtl;
          appearance: none;
          background: none;
          option {
            @include dpr-fz(14px);
          }
        }
      }
    }
  }
}
</style>