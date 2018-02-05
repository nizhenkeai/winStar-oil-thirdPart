import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  /**
   * 添加车辆，认证信息卡，等user错误状态
   */
  userMap: { [key: string]: string } = {
    'CARD_IS_NOT_EXIST.USER.NotRule': '交通安全信息卡卡号不正确',
    'CARD_IS_BINDED.USER.NotRule': '交通安全信息卡已被其他用户捆绑认证',
    'INVALID_VERIFY.USER.NotRule': '手机短信验证码验证失败',
    'USER_ACCOUNT_NOT_FOUND.USER.NotFound': '用户证件号码不存在或错误，请查验后重新输入',
    'DRIVERLICENSE_NOT_AUTHENTICATION.USER.NotFound': '驾驶证未认证，请绑定交通安全信息卡，认证驾驶证',
    'USER_DRIVERLICENSE_BINDED_ERROR.USER.NotRule': '用户驾驶证信息绑定失败，请稍后再试',
    'DRIVERlINCENSE_NOT_BIND.USER.NotRule': '驾驶证未认证',
    'INFOCARD_NOT_BIND.USER.NotRule': '交通安全信息卡已经取消认证',
    'CAR_INFO_NOT_EXIST.USER.NotFound': '车辆信息不存在',
    'VEHICLE_REACH_UPPER_LIMIT.USER.NotRule': '绑定车辆到达上限，最高绑定3辆机动车',
    'CAR_ALREADY_ADD.USER.NotRule': '该车辆已添加',
    'USER_CAR_INFO_NOT_EXIST.USER.NotRule': '用户数据不存在',
    'EACH_ACCOUNT_CAN_ONLY_AUTHENTICATE_ONE_CAR.USER.NotRule': '很抱歉，您只能认证一辆车，如需认证该车辆，请删除之前认证车辆的信息',
    'CAR_IS_ALREADY_BINDED.USER.NotRule': '该车辆已被认证',
    'driverLicense.InvalidParameter': '驾驶证有误',
    'accountInfoNotExist.user.NotRule': '用户认证失败，请稍后再试'
  };

  /**
   * 查询驾驶证信息错误状态
   */
  driverLicenseDetailsMap: { [key: string]: string } = {
    'certificate.NotFound': '驾驶证输入有误，请重新输入！',
    'certificateType.InvalidParameter': '驾驶证类型有误，无法查询！',
    'name.InvalidParameter': '驾驶证姓名输入有误，请重新输入！',
    'archiveNumber.InvalidParameter': '档案编号输入有误，请重新输入！'
  };

  /**
   * 添加订单错误状态
   */
  addOrderErrorMessageMap: { [key: string]: string } = {
    'reachLimit.order.NotRule': '亲，今日缴费人数过多，请稍后处理或次日处理',
    'illegal.order.NotFound': '亲，查询违法不存在',
    'driverLicense.order.NotFound': '亲，查询驾驶证不存在',
    'driverLicenseNotBinding.order.NotRule': '亲，驾驶证未绑定，无法处理本次违法',
    'driverLicenseError.order.NotRule': '亲，驾驶证有误，无法处理本次违法',
    'handled.order.NotRule': '亲，该违法已经处理成功，请稍后查询验证',
    'othersPaid.order.NotRule': '亲，该违法已缴费成功，正在处理',
    'paid.order.NotRule': '亲，该违法已缴费成功，正在处理',
    'mishandled.order.NotRule': '亲，该笔违法超出自助处理范围，请交管部门处理',
    'awardedAndPaid.order.NotRule': '亲，该违法已经处理完毕',
    'awardedNot610.order.NotRule': '亲，该笔违法超出自助处理范围，请交管部门处理',
    'awardedPass14days.order.NotRule': '亲，该笔违法超出自助处理范围，请交管部门处理',
    'beyondSelfHelp.order.NotRule': '亲，该笔违法超出自助处理范围，请交管部门处理',
    'greaterThan6.order.NotRule': '亲，该笔违法记分大于6分，超出自助处理范围，请交管部门处理',
    'greaterThan200.order.NotRule': '亲，该笔违法罚款大于200元，超出自助处理范围，请交管部门处理',
    'driverLicenseGreaterThan11.order.NotRule': '亲，驾驶证记分大于11分,继续处理会导致驾驶证超分，本次违法无法处理',
    'driverLicenseStateError.order.NotRule': '亲，当前驾驶证状态异常，请到交管部门处理',
    'quasiDrivingModelNotConfirm.order.NotRule': '亲，驾驶证准驾车型和当前处理车辆的车型不符',
    'oneCycleCanHandle3Cars.order.NotRule': '亲，驾驶证在一个记分周期内仅可处理3辆机动车',
    'oneCycleCanHandle24Points.order.NotRule': '亲，驾驶证一个计分周期内最高不得累计超过24分',
    'illegalTimeBeforeCertificateTime.order.NotRule': '亲，违法时间早于领证日期，无法处理本次违法',
    'thisAndBeforeGreaterThan11.order.NotRule': '亲，累计分数大于11分，无法缴费',
    'orderPersistError.order.NotRule': '亲，添加订单失败',
    'cashier.order.ServiceUnavailable': '亲，违法处理已启动，申请付款失败，正在联系银行，请稍后重试',
    'order.order.NotRule': '亲，查询单个订单出现异常',
    'orders.order.NotRule': '亲，本次缴费失败，正在联系银行，请稍后再试',
    'orders.order.NotFound': '亲，本次缴费失败，正在联系银行，请稍后再试',
    'openId.order.NotFound': '亲，本次缴费失败，正在联系银行，请稍后再试',
    'user.order.ServiceUnavailable': '亲，本次缴费失败，正在联系银行，请稍后再试',
    'moneyEqualZero.order.NotRule': '亲，单个违法罚款金额为0元，请到交管部门处理',
    'errorTime.order.NotRule': '亲，系统维护时间为（23:30--0:30）,请在其他时间处理违法，给您带来不便，请谅解',
    'payTypeNotCorrect.order.NotRule': '亲，付款类型参数值错误，请稍后再试',
  };

  activityIndexMap: { [key: string]: string } = {
    'firstActivityContent': '每日持交通安全信息卡在“优驾行”上进行刷卡购物的前100名（含）用户，可根据消费产生时间的先后排名，获得相应的购物折扣优惠：<br />' +
    '1.享8.8折购物优惠：每日持信息卡在“优驾行”上消费的前20名（含）用户；<br />' +
    '2.享9折购物优惠：每日持信息卡在“优驾行”上消费的前21名~50名（含）用户；<br />' +
    '3.享9.5折购物优惠：每日持信息卡在“优驾行”上消费的前51名~100名（含）用户。',

    'firstActivityRule': '1.自2017年10月1日起，持交通安全信息卡每日均可参加本活动；<br />' +
    '2.消费时间排名根据持卡人使用交通安全信息卡（不含其他建行卡）在“优驾行”上交易产生的时间先后系统自动排名，并给予相应的折扣；<br />' +
    '3.以上每种折扣当日仅可享受一次，并且仅可购买一件商品；<br />' +
    '4.当持卡人达到享受折扣的条件时，系统根据规则自动提示用户可享受的折扣。',

    'secondActivityContent': '持建行卡在“优驾行”上进行消费，累计到一定的金额即可享受相应的返利优惠券：<br />' +
    '1.微商城“30元优惠券”：当月持信息卡在“优驾行”上消费合计满3000元~5000元；<br />' +
    '2.微商城“50元优惠券”：当月持信息卡在“优驾行”上消费合计满5001元~10000元；<br />' +
    '3.微商城“100元优惠券”：当月持信息卡在“优驾行”上消费合计满10001元（含）以上。',

    'secondActivityRule': '1.本活动自2017年10月1日起开始累计持卡人所持每张建行卡发生的交易金额；<br />' +
    '2.系统将以单张建行卡为单位进行累计，若用户持多张建行卡不作交叉累计；<br />' +
    '3.每月任何一张建行卡的消费金额满3000元（含）以上，持卡人均有一次抽取优惠券的机会，并且仅限一次；<br />' +
    '4.本活动仅统计持卡人每个自然月内的消费金额，次月不作累计；<br />' +
    '5.“优驾行”上的机动车违法缴费业务的金额不作累计；<br />' +
    '6.持卡人所领取的优惠券在“微商城”中仅可于购买商品时抵现使用，不找零；7.本活动中所有面值的优惠券有效期为30个（含）自然日，过期作废。',

    'thirdActivityContent': '2017年10月1日起，持陕西省机动车驾驶人交通安全信息卡，在“微商城”中首次购买商品，即可享受“第二单立减25元”优惠',

    'thirdActivityRule': '1.本活动购买商品时，仅支持使用陕西省机动车驾驶人交通安全信息卡；<br />' +
    '2.自2017年10月1日起，所有在“优驾行”上未办理过任何业务的交通安全信息卡，均可在【微商城】中参与本活动；<br />' +
    '3.若2017年10月1日起持卡人通过交通安全信息卡（包含其他建行卡）在“优驾行”上处理过违法裁决缴费业务的，不可参与本活动；<br />' +
    '4.每张交通安全信息卡仅可参与一次本活动，在“微商城”中购买任意商品，即可享受“第二单立减25元”的优惠；<br />' +
    '5.本优惠活动仅限首单交易当日有效。'
  };


  /**
   * 驾驶证状态
   */
  licenseStatusMap: { [key: string]: string } = {
    'A': '正常',
    'B': '超分',
    'C': '转出',
    'D': '暂扣',
    'E': '撤销',
    'F': '吊销',
    'G': '注销',
    'H': '违法未处理',
    'I': '事故未处理',
    'J': '停止使用',
    'K': '扣押',
    'L': '锁定',
    'M': '逾期未换证',
    'N': '延期换证',
    'P': '过期体检',
    'R': '注销可恢复',
    'S': '逾期未审验',
    'T': '延期审验',
    'U': '扣留'
  };

  createCode(): string {
    let code = '';
    const codeLength = 4;
    const selectChar = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
      'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];
    for (let i = 0; i < codeLength; i++) {
      const charIndex = Math.floor(Math.random() * 36);
      code += selectChar[charIndex];
    }
    return code;
  }
}
