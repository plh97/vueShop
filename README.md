
[![Build Status](https://travis-ci.org/pengliheng/vueShop.svg?branch=master)](https://travis-ci.org/pengliheng/vueShop)
[![author](https://img.shields.io/badge/author-peng-blue.svg)](https://www.penlh.com)
[![Node.js Version](https://img.shields.io/badge/node.js-9.2.0-blue.svg)](http://nodejs.org/download)
![Size](https://github-size-badge.herokuapp.com/pengliheng/vueShop.svg)

### 前言
为了展示作品

### 作品
- [x] [vue版本购物商城](https://work.pipk.top)（请在移动端下访问）
- [x] [酒瓶定制](https://work.pipk.top/canvas)(pc/移动兼容)
- [x] [聊天室](https://chat.pipk.top)
- [x] [个人博客](https://pipk.top)
- [x] [github 数据生成报告](https://github.com/pengliheng/github-report)
- [x] [某司官网](https://work.pipk.top/daocheng)(pc观看)
- [x] [UI组件](https://github.com/pengliheng/component)
- [x] [粒子时钟](https://work.pipk.top/clock)(pc端观看)
- [x] [贪吃蛇小游戏](https://work.pipk.top/snake)(pc端观看)
- [x] [2048](https://work.pipk.top/2048)(马上完成)




###### 如何缓存用户密码账号 git config credential.helper store



### 项目目录
```js
项目根目录
├─build                  // webpack配置文件存放目录
│  └─project_config
├─config                 // 项目私密信息存放目录
├─dist                   // 打包文件存放目录
│  ├─images              // 图片
│  ├─mobile              // 移动端目录
│  │  ├─css              // css文件
│  │  └─js               // js文件
│  └─pc                  // pc端目录
│      ├─css             // css文件
│      └─js              // js文件
├─public                 // 存放公共资源，例如上传图片缓存区
├─src                    // 源码存放目录
│  ├─assets              // 静态文件
│  │  ├─images           // 图片
│  │  └─template         // 特定模板
│  │      ├─fst
│  │      ├─judou
│  │      └─lufa
│  ├─mobile               // 移动端源码入口
│  │  ├─component         // 公共组件
│  │  │  ├─sell
│  │  │  ├─set
│  │  │  └─usercenter
│  │  ├─pages             // 各自项目特有组件
│  │  │  ├─fst
│  │  │  └─lufa
│  │  ├─router            // 路由存放目录
│  │  ├─store             // vuex存放目录
│  │  └─index.js          // 入口文件
│  └─pc                   // pc端源码入口
│      ├─component
│      ├─pages
│      └─router
└─static
```

### TODO
- [x] issue：淘宝字体大小适配不对
- ```scss
    // 建议改为
    @mixin fz(@font-size){ 
       font-size: @font-size; 
       [data-dpr="1"] & { font-size: @font-size / 2; } 
       [data-dpr="3"] & { font-size: @font-size * 1.5; } 
    }
    ```
    已改
- ```scss
    @include dpr-fz(10px);           // 用于引用自适应字体
    @include flex-center();      // 用于垂直水平居中
    ```

- [x] issue：图片适配
- ```scss
    // 建议改为
    @mixin dpr-bk-img($url,$name,$type:".jpg"){
    background-image: url($url+"2x/"+ $name+"@2x"+$type);
    [data-dpr="3"] &{
        background-image: url($url+"3x/"+ $name+"@3x"+$type);
    }   
  ```
  已改
- ```scss
    // 第三个参数png为默认，可不填，如果是jpg则要填写
    // 参数1：路径
    // 参数2：文件名
	@include dpr-img('../../../assets/images/lufa/','一周恋味', 'png');

    ```



### 使用技术栈
- [x] vue          框架
- [x] vuex         状态管理
- [x] vue-router   路由管理
- [x] mint-ui      移动端-vue-ui框架
<!-- - [x] vue-awesome-swiper   轮播图 -->
- [x] [scss](http://sass.bootcss.com/docs/sass-reference/#yun-suan) css样式管理，不懂请看文档
- [x] postcss      css兼容性及模块化
- [x] eslint       语法检查
- [ ] graphql      接口管理
- [ ] restful      接口管理


### 安装步骤
- source tree 上面将项目拷贝下来
- 安装[nodejs 8.11](https://nodejs.org/en/)
- 安装编辑器[vscode](https://code.visualstudio.com/),为后续开发流程统一(可选步骤)
- 安装[yarn](https://yarnpkg.com/zh-Hans/docs/install)，替代npm(可选步骤)
- 翻墙，由于某些npm包(node-sass)被墙了，会一直无法安装，而安装淘宝镜像，则会导致后期无法顺利`npm publish`(可选步骤)
- vscode 内置git，参考配置
    ```js
    {
        "window.zoomLevel": 1,
        "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",  // 你的git文件地址
        "explorer.confirmDelete": false,
        "workbench.startupEditor": "newUntitledFile",
        "files.autoSave": "afterDelay",
        "editor.minimap.enabled": true,
        "editor.matchBrackets": true,
        "files.associations": {
            "*.jsp": "html",
            "*.wxml": "xml"
        },
        "workbench.iconTheme": "material-icon-theme",
        "workbench.colorTheme": "Atom One Dark",
        "window.restoreWindows": "all",
        "material-icon-theme.showUpdateMessage": false,
        "explorer.confirmDragAndDrop": false,
        "eslint.autoFixOnSave": true,
        "files.eol": "\n",
    }
    ```
- vscode 安装 prettier和eslint 插件，然后`esline --init`
- 命令行步骤（安装项目 - 跑起项目）
    ```js
    yarn          // 安装所有package
    yarn w        // 运行webpack
    yarn nodemon  // 跑起来项目，具体查看package.json文件
    ```