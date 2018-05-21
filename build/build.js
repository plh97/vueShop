// package
const Koa = require('koa');
const http = require('http');
const cors = require('@koa/cors');
// const fs = require('graceful-fs');
const bodyParser = require('koa-bodyparser');
const koaSend = require('koa-send');
const axios = require('axios');
const session = require('koa-session');
const koaStatic = require('koa-static');

// local
const config = require('../config');
const allRouter = require('./api/index.js');
// const daocheng = require('./project.json');

// application
const app = new Koa();
const static = new Koa();
// const router = new Router();
const port = process.env.PORT || config.port;
const server = http.createServer(app.callback());

app
  .use(allRouter.routes())
  .use(allRouter.allowedMethods())
  .use(bodyParser())
  .use(koaStatic('dist'))
  // 将前端路由指向 index.html
  .use(async (ctx, next) => {
    const isMobile = ctx.request.header['user-agent'].match(/Mobile/);
    // 将项目全部转发到这里
    if (isMobile) {
      console.log(` >>> 界面端: 移动端`);
      await koaSend(ctx, 'index.html', { root: `./dist/mobile` });
    } else {
      console.log(` >>> 界面端: pc端`);
      await koaSend(ctx, 'index.html', { root: `./dist/pc` });
    }
  });

server.listen(port, () => {
  console.log(` >>> port: ${port}`);
  console.log(` >>> ENV: ${process.env.NODE_ENV}`);
});


// 专用于加载静态图片资源
static.use(koaStatic('./'))

const staticServer = http.createServer(static.callback());
staticServer.listen(9090, () => {
  console.log(` >>> 静态资源端口: ${9090}`);
});



