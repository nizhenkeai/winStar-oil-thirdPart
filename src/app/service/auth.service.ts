import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/finally';


@Injectable()
export class AuthService {
  private defaultUrl = environment.userAPI;

  private headers = new Headers({
    'Content-Type': 'application/json',
    'token_id': localStorage.getItem('app_token_id')
  });

  constructor(private http: Http) {
  }

  /**
   * 发送验证码
   * @param infoCard
   * @param phone
   */
  _sendAuth(infoCard: number, phone: number): Promise<any> {
    const urlTemp = `auth/sendAuth?infoCard=${infoCard}&phone=${phone}`;
    const sendAuthUrl = `${this.defaultUrl}${urlTemp}`;
    return this.http
      .get(sendAuthUrl)
      .finally(() => {
      }).toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  /**
   * 验证验证码，并认证信息卡
   * @param serialNum
   * @param infoCard
   * @param verify
   * @param phone
   * @returns {Promise<TResult|T>}
   */
  _auth(serialNum: number, infoCard: number, verify: number, phone: number): Promise<any> {
    const authUrl = `${this.defaultUrl}auth/auth?serialNum=${serialNum}&infoCard=${infoCard}&verify=${verify}&phone=${phone}`;
    return this.http
      .post(authUrl, '', {headers: this.headers})
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }
}
