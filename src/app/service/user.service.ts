import {Injectable} from '@angular/core';
import {OilSetMeal, OilInfo, Coupon, Pan} from '../entity/user';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'token_id': localStorage.getItem('app_token_id')
  });
  private oilSetMealUrl = environment.oilSetMealUrl;
  private oilSetMealInfo = environment.oilSetMealInfo;
  private couponUrl = environment.couponUrl;
  private searchPanUrl = environment.searchPanUrl;
  private filtercouponUrl = environment.filtercouponUrl

  constructor(private http: Http) {
  }

  /**
   * 获取我的加油券列表
   * @returns {Promise<any|TResult2|OilSetMeal[]>}
   */
  getOilSetMealList(): Promise<OilSetMeal[]> {
    return this.http.get(this.oilSetMealUrl, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as OilSetMeal[])
      .catch(this._error);
  }

  /**
   * 获取查看我的券码
   * @param orderId
   * @returns {Promise<any|TResult2|OilInfo[]>}
   */
  getOilInfo(orderId: number): Promise<OilInfo[]> {
    const oilSetMealInfoUrl = `${this.oilSetMealInfo}?orderId=${orderId}`;
    return this.http.get(oilSetMealInfoUrl, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as OilInfo[])
      .catch(this._error);
  }

  /**
   * 获取我的优惠券
   */
  getCoupon(): Promise<Coupon[]> {
    return this.http.get(this.couponUrl, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Coupon[])
      .catch(this._error);
  }
  /**
   * 获取我的优惠券
   */
  getFilterCoupon(itemId: string,itemNumber: number,type :number): Promise<Coupon[]> {
    const filtercouponUrl = `${environment.filtercouponUrl}?number=${itemNumber}&shopId=${itemId}&type=${type}`;
    return this.http.get(filtercouponUrl, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Coupon[])
      .catch(this._error);
  }

  /**
   * 查看我的券码
   */
  getSearchPan(id: number): Promise<Pan> {
    return this.http.get(`${this.searchPanUrl}/${id}`, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Pan)
      .catch(this._error);
  }

  /**
   * 异常
   * @param error 异常
   */
  _error(error: any): Promise<any> {
    console.log('this error :', error);
    return Promise.reject(error.message || error);
  }
}
