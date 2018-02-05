/**
 * Created by Administrator on 2017/9/12.
 */

export class DriverLicenseCard {
  cardNumber: string;
  name: string;
  driverLicense: string;
  status: number;
}
export class DriverLicenseInfo {
  id: string;
  number: string;
  type: string;
  name: string;
  archiveNumber: string;
  vehicleType: string;
  licenceOrgan: string;
  licenseDate: number;
  replaceDate: number;
  status: string;
  totalDockPoints: number;
  bindStatus: string;
  replaceDateStr: string;
}

export class BindDriverLicenseCard {
  status: string;
  message: string;
  data: [DriverLicenseCard, DriverLicenseInfo];
}

export class SendNoteCode {
  status: string;	// 发送状态	成功、失败
  text: string;	// 发送成功时为校验码，失败时为失败原因
}

export class LoginRes {
  account: string; // 账户信息
  createTime: number;
  headerImage: string; // 头像地址
  id: string;
  lastLoginTime: string; // 未使用该字段
  nickName: string; // 昵称
  password: string; // 未使用该字段
  phoneNumber: string; // 手机号
  regFrom: number; // 登录||注册来源	1 android 2 ios 3 pc
  status: number; // 1正常 2 锁定
  tk: string; // header中作为认证凭证使用 RRtoken_id={tk}
  type: number;
  updateTime: number;
  user: UserObject;
  userDriverLicenseProfileCount: number; // 用户认证的驾驶证数量
  userId: string;
  userVehicleProfileCount: number; // 用户已添加的车辆数量
}
export class UserObject {
  address: string;
  certificateId: string;
  createTime: string;
  description: string;
  id: string;
  name: string;
  sex: number; // 1 男 0女
  status: number; // 1 正常 2 锁定
  updateTime: string;
}

export class VerifyCode {
  id: string;
  validateCode: string;
  isUsed: string;
  checkId: string;
}
