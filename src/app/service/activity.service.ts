import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Question, Money, AddOrder} from '../entity/active';
import {environment} from '../../environments/environment';


@Injectable()
export class ActivityService {
  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'token_id': localStorage.getItem('app_token_id')
    });
  private questionUrl = environment.questionUrl;
  private moneyUrl = environment.moneyUrl;

  constructor(private http: Http) {
  }

  /**
   * 获取问题列表数据
   * questions And answer
   * @returns {Promise<Question[]>}
   */
  getData(): Promise<Question[]> {
    return this.http.get(this.questionUrl)
      .toPromise()
      .then(res => res.json() as Question[])
      .catch(this._error);
  }

  /**
   * 获取index页面的价格列表
   * @returns {Promise<Money[]>}
   */
  getMoney(): Promise<Money[]> {
    return this.http.get(this.moneyUrl)
      .toPromise()
      .then(res => res.json() as Money[])
      .catch(this._error);
  }

  /**
   * 添加订单
   * @param {string} activityId
   * @param {string} couponId
   * @param {string} itemId
   * @returns {Promise<AddOrder>}
   */
  addOilOrder(activityId: string, couponId: string, itemId: string): Promise<AddOrder> {
    const addOilOrderUrl = `${environment.addOilOrderUrl}?activityId=${activityId}&couponId=${couponId}&itemId=${itemId}`;
    return this.http
      .post(addOilOrderUrl, '', {headers: this.headers})
      .toPromise()
      .then(res => res.json() as AddOrder)
      .catch(this._error);
  }

  /**
   *  电子油券购买服务协议
   * @returns {Promise<any|TResult2|TResult1>}
   */
  oilServeAgreement(): Promise<any> {
    const oilServeText = `${environment.oilServeText}`;
    return this.http
      .get(oilServeText)
      .toPromise()
      .then(res => res.json())
      .catch(this._error);
  }

  /**
   * 电子油券说明事项
   * @returns {Promise<any|TResult2|TResult1>}
   */
  oilExplain(): Promise<any> {
    const oilExplainText = `${environment.oilExplainText}`;
    return this.http
      .get(oilExplainText)
      .toPromise()
      .then(res => res.json())
      .catch(this._error);
  }

  /**
   * 异常
   * @param error 异常
   */
  private _error(error: any): Promise<any> {
    console.log('this error :', error);
    return Promise.reject(error.message || error);
  }

}
