<template>
  <div class="avator">
    <header class="header">
      <router-link fst tag="span" :to="`/${company}/message`">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use>
          </svg>
          返回
      </router-link>
      <span class="option" @click="toggle">···</span>
    </header>
    <img class="avator-img" src="@/assets/images/lufa/autoPhoto.jpg" alt="">
    <div class="mask" v-show="isShow">
      <div class="btn-able" id="btn-able">
          <button class="local-photo" @click="upload()">本地相册</button>
          <button class="take-photo"  @click="init_camera()">拍照</button>
      </div>
      <div class="btn-disable" id="btn-disable">
          <button class="cancel" @click="toggle">取消</button>
      </div>
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
      isShow: false
    };
  },
  mounted() {
    let mask = document.querySelector(".mask");
    mask.addEventListener("click", e => {
      console.log(e.path);
      console.log(e.path.id);
      console.log("==============================================");
      if (e.path === "btn-able") {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    });
  },
  methods: {
    toggle(e) {
      this.isShow = !this.isShow;
    },
    upload() {
      let input_upload = document.createElement("input");
      input_upload.type = "file";
      input_upload.id = "pengliheng";
      input_upload.click();
      input_upload.addEventListener("change", e => {
        let url = "${ctx}" + "/file/upload";
        ajax_upload_image(e, url);
      });
    },
    init_camera() {
      let input_upload = document.createElement("input");
      input_upload.type = "file";
      input_upload.accept = "image/*";
      input_upload.click();
      input_upload.addEventListener("change", e => {
        let url = "${ctx}" + "/file/upload";
        ajax_upload_image(e, url);
      });
    },

    //上传保存，暂时没有接口
    ajax_upload_image(e, url) {
      let file = e.path[0].files[0];
      let formData = new FormData();
      formData.append("file", file);
      $.ajax({
        url: ctx + "/file/upload",
        type: "POST",
        contentType: "multipart/form-data",
        dataType: "JSON",
        async: false,
        data: formData,
        processData: false,
        contentType: false,
        success: function(obj) {
          let image_url = ctx.replace(/\/a/, "/") + obj.files[0].url;
          document.getElementById("aisle").style.display = "none";
          var mall_domain = "${mall_domain}";
          let updateAvator =
            mall_domain +
            "/updateAvator?user_id=${user_id}" +
            "&photo=" +
            image_url;
          fetch(updateAvator, {
            method: "GET"
          })
            .then(res => res.json())
            .then(json => {
              console.log(json, image_url);
              document.getElementById("append_image").src = image_url;
            });
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~@/assets/common/dpr.scss";
.avator {
  height: 100vh;
  background: #333;
  .header {
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
    .option {
      @include dpr-fz(80px);
      min-width: (75rem/75);
      text-align: center;
    }
  }
  .avator-img {
    width: (450rem/75);
    height: (450rem/75);
    margin: (280rem/75) (150rem/75);
  }
  .mask {
    background: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    div {
      width: 100vw;
      position: absolute;
      background: #fff;
      bottom: 0;
      &.btn-able {
        height: (375rem/75);
      }
      &.btn-disable {
        height: (150rem/75);
        border-top: 0.04rem solid #f5f5f5;
      }
      button {
        width: (700rem/75);
        height: (75rem/75);
        display: block;
        margin: (25rem/75) auto;
        @include dpr-fz(32px);
        color: #fff;
        border: none;
        border-radius: 0.1rem;
        background: #b84747;
        &.cancel {
          background: #ccc;
        }
      }
    }
  }
}
</style>
