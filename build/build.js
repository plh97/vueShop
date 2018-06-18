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
// const router = new Router();
const port = process.env.PORT || config.port;
const server = http.createServer(app.callback());

app
  .use(allRouter.routes())
  .use(allRouter.allowedMethods())
  .use(bodyParser())
  // 将前端路由指向 index.html
  .use(async (ctx, next) => {
    if (!/\./.test(ctx.request.url)) {
      const isMobile = ctx.request.header['user-agent'].match(/Mobile/);
      // 将项目全部转发到这里
      if (isMobile) {
        console.log(` >>> 界面端: 移动端`);
        if(ctx.url === '/canvas'){
          await koaSend(ctx, 'index.html', { root: `./dist/canvas` });
        } else if (ctx.url === '/daocheng'){
          ctx.body = '<h1>请在pc端浏览该页面！</h1>'
        } else if (ctx.url === '/2048'){
          await koaSend(ctx, 'index.html', { root: `./dist/pc` });
        } else {
          await koaSend(ctx, 'index.html', { root: `./dist/mobile` });
        }
      } else {
        console.log(` >>> 界面端: pc端`,ctx.url);
        if(ctx.url === '/daocheng'){
          await koaSend(ctx, 'index.html', { root: `./dist/daocheng` });
        }else if(ctx.url === '/canvas'){
          await koaSend(ctx, 'index.html', { root: `./dist/canvas` });
        }else{
          await koaSend(ctx, 'index.html', { root: `./dist/pc` });
        }
      }
    } else {
      await next();
    }
  })
  .use(koaStatic('dist'))

server.listen(port, () => {
  console.log(` >>> port: ${port}`);
  console.log(` >>> ENV: ${process.env.NODE_ENV}`);
});
