
const router = require('koa-router')();
const axios = require('axios');
const koaBody = require('koa-body');
const superagent = require('superagent');


router
  .all('/test', async ctx =>{
    // ctx.set('Access-Control-Allow-Credentials',true)
    ctx.body = JSON.parse(ctx.header.cookie);
  })


module.exports = router;
