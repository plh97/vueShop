// 公共组件
const Set = resolve => require(["@/mobile/component/set"], resolve);
const Sell = resolve => require(["@/mobile/component/sell"], resolve);
const Usercenter = resolve =>
  require(["@/mobile/component/Usercenter"], resolve);
const GiftCard = resolve =>
  require(["@/mobile/component/Usercenter/giftCard"], resolve);
const Account = resolve =>
  require(["@/mobile/component/Usercenter/account"], resolve);
const Earnlist = resolve =>
  require(["@/mobile/component/Usercenter/earnlist"], resolve);
const Message = resolve =>
  require(["@/mobile/component/Usercenter/message"], resolve);
const Vipcard = resolve =>
  require(["@/mobile/component/Usercenter/vipcard"], resolve);
const Ourcoupon = resolve =>
  require(["@/mobile/component/Usercenter/ourcoupon"], resolve);
const Ourteam = resolve =>
  require(["@/mobile/component/Usercenter/ourteam"], resolve);
const ScanQrcode = resolve =>
  require(["@/mobile/component/Usercenter/scanQrcode"], resolve);
const Avator = resolve =>
  require(["@/mobile/component/Usercenter/avator"], resolve);
const Modifypwd = resolve =>
  require(["@/mobile/component/Usercenter/modifypwd"], resolve);

// 登陆注册页面
const Login = resolve => require(["@/mobile/component/login"], resolve);
const Register = resolve => require(["@/mobile/component/register"], resolve);

// 订单列表页面
const Orderlist = resolve => require(["@/mobile/component/orderlist"], resolve);
const OrderlistAll = resolve =>
  require(["@/mobile/component/orderlist/all"], resolve);
const OrderlistBeing = resolve =>
  require(["@/mobile/component/orderlist/being"], resolve);
const OrderlistTook = resolve =>
  require(["@/mobile/component/orderlist/took"], resolve);
const OrderlistReturn = resolve =>
  require(["@/mobile/component/orderlist/return"], resolve);

// 订单详情页面
const GoodsDetail = resolve =>
  require(["@/mobile/component/goodsdetail"], resolve);

const Pages = {
  fst: {
    home: resolve => require(["@/mobile/pages/fst/Home"], resolve),
    index: resolve => require(["@/mobile/pages/fst"], resolve)
  },
  lufa: {
    home: resolve => require(["@/mobile/pages/lufa/Home"], resolve),
    index: resolve => require(["@/mobile/pages/lufa"], resolve)
  },
  zhuogao: {
    home: resolve => require(["@/mobile/pages/zhuogao/Home"], resolve),
    index: resolve => require(["@/mobile/pages/zhuogao"], resolve)
  }
};

const jsonTemp = ({ company }) => {
  return {
    path: `/${company}`,
    component: Pages[company].index,
    children: [
      {
        path: `/${company}`,
        component: Pages[company].home
      },
      {
        path: `/${company}/sell`,
        component: Sell
      },
      {
        path: `/${company}/set`,
        component: Set
      },
      {
        path: `/${company}/usercenter`,
        component: Usercenter
      },
      {
        path: `/${company}/giftcard`,
        component: GiftCard
      },
      {
        path: `/${company}/account`,
        component: Account
      },
      {
        path: `/${company}/earnlist`,
        component: Earnlist
      },
      {
        path: `/${company}/message`,
        component: Message
      },
      {
        path: `/${company}/orderlist`,
        component: Orderlist,
        children: [
          {
            path: `/${company}/orderlist/all`,
            component: OrderlistAll
          },
          {
            path: `/${company}/orderlist/being`,
            component: OrderlistBeing
          },
          {
            path: `/${company}/orderlist/took`,
            component: OrderlistTook
          },
          {
            path: `/${company}/orderlist/return`,
            component: OrderlistReturn
          }
        ]
      },
      {
        path: `/${company}/goodsdetail`,
        component: GoodsDetail
      },
      {
        path: `/${company}/vipcard`,
        component: Vipcard
      },
      {
        path: `/${company}/ourcoupon`,
        component: Ourcoupon
      },
      {
        path: `/${company}/ourteam`,
        component: Ourteam
      },
      {
        path: `/${company}/scanQrcode`,
        component: ScanQrcode
      },
      {
        path: `/${company}/login`,
        component: Login
      },
      {
        path: `/${company}/register`,
        component: Register
      },
      {
        path: `/${company}/avator`,
        component: Avator
      },
      {
        path: `/${company}/modifypwd`,
        component: Modifypwd
      },
<<<<<<< HEAD
=======

>>>>>>> 46cd3a478af73fc6d04775575d8481bf5d2f49e2
      {
        path: `/${company}/login`,
        component: Login
      },
      {
        path: `/${company}/register`,
        component: Register
      }
    ]
  };
};

export default jsonTemp;
