
const router = require('koa-router')();
const axios = require('axios');
const koaBody = require('koa-body');
const superagent = require('superagent');

const Upload = require('./upload');

router
  .all('/upload', koaBody({ multipart: true }), Upload)
  .all('/auth', async ctx =>{
    ctx.set('Access-Control-Allow-Credentials',true)
    if (ctx.path === '/favicon.ico') return;
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    let data = new Promise((resolve,reject)=>{
      superagent.post('/test')
        .set('Content-Type', 'application/json;charset=UTF-8')
        .set('Cookie', JSON.stringify(ctx.session))
        .end((err, response)=>{
          if (err || !response.ok) {
            res.send('error');
          } else {
            resolve(response.body);
          }
        });
    })
    ctx.body = await data;
  })
  .all('/test', async ctx =>{
    // ctx.set('Access-Control-Allow-Credentials',true)
    ctx.body = JSON.parse(ctx.header.cookie);
  })


module.exports = router;
