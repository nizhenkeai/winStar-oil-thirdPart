// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,

    /**
     * 用户API
     */
    userAPI: '/wechatApi-ng4/api/user',

    /**
     * 获取油券列表
     */
    moneyUrl: '/wechatApi-ng4/api/v1/items/shopInfo/list?sourceType=2&type=2',

    /**
     * 问题list
     */
    questionUrl: '/wechatApi-ng4/api/user/questions/noauth/list',

    /**
     * 添加订单
     */
    addOilOrderUrl: '/wechatApi-ng4/api/v1/orders/oilorder',

    /**
     * 支付订单
     */
    payOrderdUrl: '/wechatApi-ng4/api/v1/cashier/payOrder',


    /**
     * 获取我的加油券列表
     */
    oilSetMealUrl: '/wechatApi-ng4/api/v1/items/myOilSetMeal',

    /**
     * 获取查看我的券码
     */
    oilSetMealInfo: '/wechatApi-ng4/api/v1/items/myOilSetMealInfo',

    /**
     * 获取我的优惠券
     */
    couponUrl: '/wechatApi-ng4/api/v1/marketing/coupon',
    /**
     * 获取符合条件的优惠券
     */
    filtercouponUrl: '/wechatApi-ng4/api/v1/marketing/coupon/filter',

    /**
     *查看我的券码
     */
    searchPanUrl: '/wechatApi-ng4/api/v1/items/searchPan',

    /**
     * 买油送油券 输入手机号接口
     */
    winStarSendOilPhoneUrl: '/wechatApi-ng4/api/user/account/loginH5',

    /**
     * 买油发油券
     */
    winStarSendOilPostUrl: '/wechatApi-ng4/api/v1/orders/oilorder/giveCoupon',
    /**
     * 电子油券购买服务协议
     */
    oilServeText: '/wechatApi-ng4/api/v1/items/oiltext/list?type=2',
    /**
     * 电子油券说明事项
     */
    oilExplainText: '/wechatApi-ng4/api/v1/items/oiltext/list?type=1',
    /**
     * 短信登陆
     */
    loginCodeUrl: '/wechatApi-ng4/api/user/account/login',
    /**
     * 发送验证码
     */
    smsSend: 'https://mobile.sxwinstar.net/api/v3/smsSend',
  }
;
