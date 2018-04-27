// fst 分类列表的数据接口
const Mock = require('mockjs');
var Random = Mock.Random;

var data = Mock.mock(/api\/lufa$/, {
  code: 1,
  msg: '获取成功.',
  'rows|5-16': [{
    'id|+1': 641,
    'goods_image': Random.image('500x500', '@color', 'lufa'),
    'goods_image_list|1-5': [ Random.image('500x500', '@color', 'lufa list') ],
    'new_price|+5.73': 0.0,
    'goods_name': '明眸玩色眼彩盘L23紫罗兰',
    'goods_code|+5': Number('002001019'),
    'goods_short_name': '6926891805149-23',
    'brand_id|+1': 2,
    'brand_name': '毛戈平',
    'td_code': '6926891806467-23',
    'bar_code': '',
    'standard_name': '1.5g',
    'produce_area_name': '',
    'model_name': '',
    'unit_id|+2': 5,
    'unit_name': '盒',
    'assist_unit_enable': '1',
    'assist_unit_id|+1': 1,
    'assist_unit_name': '',
    'assist_unit_conversion': '',
    'retail_price': 70.0,
    'prime_cost': 28.0,
    'validity_days': '',
    'remarks': '',
    'corp_id': '',
    'corp_code|+1': '001003',
    'corp_name': '鹭发商贸',
    'del_flag': '0',
    'create_date': '',
    'create_user_id': '',
    'create_user_name': '',
    'goods_status': 'A0',
    'goods_type_id|+3': 55,
    'goods_type_name': '眼部',
    'is_score': '',
    'is_discount': '',
    'discount_reat': '',
    'goods_attribute': '',
    'goods_factory': '',
    'supplier_id': '',
    'dept_id': 'f6d694e8ae114d2585a4f434f465ef49',
    'dept_code': '001003005',
    'dept_name': '货品部',
    'shop_relation_id': '',
    'breed_id': 0,
    'breed_name': '',
    'grade_id': 0,
    'grade_name': '',
    'mold_id': 0,
    'mold_name': '',
    'price_type': '折扣定价'
  }]
});

// data.total = data.rows.length;

module.exports = data;
