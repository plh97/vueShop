// fst 分类列表的数据接口
const Mock = require('mockjs');
var Random = Mock.Random;


var data = Mock.mock(/api\/fstorderlist$/, {
  code: 1,
  msg: '获取成功.',
  'rows|5-16': [{
    'order_id|+533242': '001001ZSXS201712060001',
    'order_owner|1': ['古天乐', '古巨基', '李娜', 'little airport', 'joma', '油尖旺金毛玲', '周杰伦'],
    'status|1': ['待付款', '已收货', '已退货', '待收货'],
    'list|1-3': [{
      'wine_type|1': ['赤霞珠干红', '红酒', '法塞特'],
      'id|+1': 66141,
      'orderId': '001001ZSXS201712060001',
      'type': 66141,
      'goods_image': Random.image('500x500', '@colorful', 'fst order list'),
      'goods_image_list|1-5': [ Random.image('500x300', '@colorful', 'fst list') ],
      'price|+123': 10,
      'num|+1': 1,
      'weight': '1.5KG',
      'goods_name': '法塞特2011霜后赤霞珠干红葡萄酒 750ml',
    }]
  }]
});


// data.total = data.rows.length;

module.exports = data;
