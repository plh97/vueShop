
const router = require('koa-router')();
const axios = require('axios');
const koaBody = require('koa-body');
const Upload = require('./upload');

router
  .all('/upload', koaBody({ multipart: true }), Upload);


module.exports = router;
