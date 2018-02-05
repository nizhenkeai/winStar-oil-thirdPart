export const environment = {
  production: true,
  /**
   * 用户API
   */
  userAPI: '/wechat_access/api/user/',

  /**
   * 获取油券列表
   */
  moneyUrl: '/wechat_access/api/v1/items/shopInfo/list?sourceType=2&type=2',

  /**
   * 问题list
   */
  questionUrl: '/wechat_access/api/user/questions/noauth/list',

  /**
   * 添加订单
   */
  addOilOrderUrl: '/wechat_access/api/v1/orders/oilorder',

  /**
   * 支付订单
   */
  payOrderdUrl: '/wechat_access/api/v1/cashier/payOrder',


  /**
   * 获取我的加油券列表
   */
  oilSetMealUrl: '/wechat_access/api/v1/items/myOilSetMeal',

  /**
   * 获取查看我的券码
   */
  oilSetMealInfo: '/wechat_access/api/v1/items/myOilSetMealInfo',

  /**
   * 获取我的优惠券
   */
  couponUrl: '/wechat_access/api/v1/marketing/coupon',

  /**
   *查看我的券码
   */
  searchPanUrl: '/wechat_access/api/v1/items/searchPan',

  /**
   * 买油送油券 输入手机号接口
   */
  winStarSendOilPhoneUrl: '/wechat_access/api/user/account/loginH5',

  /**
   * 买油发油券
   */
  winStarSendOilPostUrl: '/wechat_access/api/v1/orders/oilorder/giveCoupon',

  /**
   * 电子油券购买服务协议
   */
  oilServeText: '/wechat_access/api/v1/items/oiltext/list?type=2',
  /**
   * 电子油券说明事项
   */
  oilExplainText: '/wechat_access/api/v1/items/oiltext/list?type=1',
  /**
   * 短信登陆
   */
  loginCodeUrl: '/wechat_access/api/user/account/login',
  /**
   * 发送验证码
   */
  smsSend: '/api/v3/smsSend',
};
