import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {SendNoteCode, LoginRes, VerifyCode} from '../entity/index';
import {environment} from '../../environments/environment';


@Injectable()
export class IndexService {

  isLoggedIn = false;
  redirectUrl: string;
  private formHeaders = new Headers({
    'content-type': 'application/x-www-form-urlencoded'
  });
  private headers = new Headers({
    'content-type': 'application/json'
  });

  constructor(private http: Http) {
  }

  /**
   * 验证验证码
   * @param code
   * @returns {Promise<TResult|TResult2|VerifyCode>}
   */
  verifyCode(code: string): Promise<VerifyCode> {
    const verifyCodeUrl = `${environment.smsSend}/checkImgCode?validateCode=${code}`;
    return this.http.get(verifyCodeUrl)
      .toPromise()
      .then(res => res.json() as VerifyCode)
      .catch();
  }

  /**
   * 发送短信验证码
   * @param phoneNumber
   * @param checkId
   * @returns {Promise<any|TResult2|SendNoteCode>}
   */
  sendNoteCode(phoneNumber: string, checkId: string): Promise<SendNoteCode> {
    const sendNoteCodeUrl = `${environment.smsSend}`;
    const data = `appSecret=1&phoneNumber=${phoneNumber}&types=1&checkId=${checkId}`;
    return this.http.post(sendNoteCodeUrl, data, {headers: this.formHeaders})
      .toPromise()
      .then(response => response.json() as SendNoteCode)
      .catch(this.handleError);
  }

  /**
   * 短信登陆
   * @param account
   * @param msgVerifyId
   * @param msgVerifyCode
   * @returns {Promise<TResult|TResult2|LoginRes>}
   */
  userLogin(account: string, msgVerifyId: string, msgVerifyCode: string): Promise<LoginRes> {
    const loginCodeUrl = `${environment.loginCodeUrl}`;
    return this.http.post(loginCodeUrl, JSON.stringify({
      'account': account,
      'msgVerifyId': msgVerifyId,
      'visitType': 5,
      'msgVerifyCode': msgVerifyCode,
      'alias': '',
    }), {headers: this.headers})
      .toPromise()
      .then(response => {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', `${this.isLoggedIn}`);
        return response.json() as LoginRes;
      })
      .catch();
  }

  // 错误提示
  private handleError(error: any): Promise<any> {
    console.error('发生了一个错误', error);
    return Promise.reject(error.message || error);
  }

}
