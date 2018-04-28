// require('./fst');
// require('./fst1');
require('./fstlist');
require('./fstgoodslist');

// require('./lufa');
// require('./lufa1');
require('./lufalist');
require('./lufagoodslist');

// require('./zhuogao');
// require('./zhuogao1');
require('./zhuogaolist');
require('./zhuogaogoodslist');


const Mock = require('mockjs');
const Random = Mock.Random;

Random.extend({
  colorful: [
    '333', 
    '666', 
    '999',
    'dfdfdf',
    'c83c3b',
  ],
  constellation: function(date){
      return this.pick(this.colorful)
  }
})
