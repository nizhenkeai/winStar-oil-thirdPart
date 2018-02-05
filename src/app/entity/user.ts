/**
 * Created by m on 2017/9/5.
 */
export class OilSetMeal {
  orderId: string; // 订单Id
  sendState: string; // 赠送状态 0：正常 1：已赠送待领取
  shopName: string; // 套餐名
  surplusNumber: number; // 剩余张数
  surplusPrice: number; // 余额
  totalNumber: number; // 总张数
  totalPrice: number; // 套餐总价
}

export class OilInfo {
  accountId: string; // 用户Id
  endDate: string; // 失效日期
  expireState: string; // 过期状态 0：未过期、1：已过期
  id: string;  // 主键
  openDate: string; // 生效日期
  orderId: string; // 订单Id
  panAmt: number; // 加油券金额
  panDescription: string; // 加油券规则描述
  panName: string; // 加油券名称 预留，值就是页面的“延长壳牌加油券”，防止后面变成动态，可以取这个字段的值
  period: string; // 期数
  shopPrice: number; // 商品原价 套餐商品使用
  useState: string; // 使用状态 0：未使用、1：已使用
}

export class Coupon {
  accountId: string; // 帐号id
  activityId: string; // 活动id
  amount; // 金额
  name;//名称
  code: string; // 优惠券编码
  couponTemplateId: string; // 优惠券发放模板id
  createdAt; // 创建时间
  discountRate; // 折扣率
  id: string; // 唯一标识
  limitDiscountAmount; // 最高折扣上限
  showStatus: number; // 系统设定显示状态 0 未使用 1 已使用 2 已失效
  status: number;  // 状态 0 显示 1不显示
  telPhone: string; // 手机号
  validBeginAt; // 有效期开始时间
  validEndAt; // 有效期结束时间
}
export class Pan {
  result: string;
}
