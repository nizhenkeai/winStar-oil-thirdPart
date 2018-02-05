import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/finally';


@Injectable()
export class WinStarActivitiesService {
  private getUserDetails = environment.winStarSendOilPhoneUrl;
  private sendOil = environment.winStarSendOilPostUrl;

  private headers = new Headers({
    'Content-Type': 'application/json',
    'token_id': localStorage.getItem('app_token_id')
  });

  constructor(private http: Http) {
  }


  /**
   * 根据手机号获取用户基本信息
   * @param {string} mobile
   * @returns {Promise<any>}
   */
  _getUserDetails(mobile: string): Promise<any> {
    const getUserDetailsUrl = `${this.getUserDetails}?mobile=${mobile}&verify=24b6e946d4594661a58bd235fe639544`;
    return this.http
      .post(getUserDetailsUrl, '', {headers: this.headers})
      .toPromise()
      .then(res => res.json() as any)
      .catch(this.handleError);
  }


  /**
   * 送油接口
   * @param {string} accountId
   * @param {string} orderId
   * @returns {Promise<any>}
   * @private
   */
  _sendOil(accountId: string, orderId: string): Promise<any> {
    const sendOilUrl = `${this.sendOil}?accountId=${accountId}&orderId=${orderId}&activityId=4028f69c5ec16fd4015ec17e98d50007`;
    return this.http
      .post(sendOilUrl, '', {headers: this.headers})
      .toPromise()
      .then(res => res.json() as any)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }
}
