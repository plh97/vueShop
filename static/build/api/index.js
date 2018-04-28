
const router = require('koa-router')();
const data = require('./fstList');
const axios = require('axios');
router
  .get('/queryTableRows', async ctx => {
    const getData = new Promise((resolve,reject)=>{
      axios.post('http://127.0.0.1:8080/daocheng/a/admin/common/queryTableRows', {
        id: '9ae4ca9d069547c19deb61f010518ec0',
        _extfn: 'get_shop_goods_by_type_list_3',
        corp_pri: 0,
        nopage: 1,
        code: '',
      }).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })

    ctx.body = await getData;
  });

module.exports = router;
