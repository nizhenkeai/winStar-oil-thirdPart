import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {flyIn} from '../../animationsVariable';
import {IndexService} from '../../service/index.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {SwalComponent} from '@toverux/ngsweetalert2';

@Component({
  selector: 'app-micro-mall-dashboard',
  templateUrl: './micro-mall-dashboard.component.html',
  styleUrls: ['./micro-mall-dashboard.component.css'],
  animations: [flyIn]
})
export class MicroMallDashboardComponent implements OnInit {
  @ViewChild('dialog') private swalDialog: SwalComponent;
  second: number;
  src: any;
  isTime: boolean = false;
  private timer;
  private reg;
  phoneNum: string;
  msgVerifyId: string;

  constructor(private indexTitleService: Title,
              private indexService: IndexService,
              private router: Router) {
  }

  ngOnInit() {
    this.toShowTime();
    this.indexTitleService.setTitle('手机验证');
    this.src = `${environment.smsSend}/getRandomCode`;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/activity']);
    }
  }

  /**
   * 显示倒计时
   */
  toShowTime(): void {
    this.isTime = true;
    this.second = 10;
    // 每一秒更新时间
    this.timer = setInterval(() => {
      this.second--;
      if (this.second === 0) {
        clearInterval(this.timer);
        this.isTime = false;
        this.changeCodeImg();
      }
    }, 1000);
  }

  /**
   * 验证手机号 并调验证验证码接口
   * @param phoneNum
   * @param code
   */
  regPhoneNum(phoneNum: string, code: string): void {
    this.reg = new RegExp(/^1[3|4|5|7|8]\d{9}$/);
    if (phoneNum === '') {
      this.setSwalDialogError('请输入您的手机号');
    } else if (!this.reg.test(phoneNum)) {
      this.setSwalDialogError('请输入正确的手机号');
    } else {
      this.phoneNum = phoneNum;
      this.verifyCode(code);
    }
  }


  /**
   * 切换图片事件
   */
  changeCodeImg(): void {
    this.src = `${environment.smsSend}/getRandomCode?a=${Math.floor(Math.random() * 10000 + Math.random() * 100)}`;
  }


  /**
   * 验证验证码 成功则发送短信验证码 并倒计时
   * @param code
   */
  verifyCode(code: string): void {
    this.indexService.verifyCode(code)
      .then(res => {
        this.sendNoteCode(this.phoneNum, res.checkId);
        this.toShowTime();
      })
      .catch(() => {
        this.setSwalDialogError('验证输入错误，请重新输入！');
      });
  }


  /**
   * 发送短信验证码
   * @param appSecret
   * @param phoneNumber
   */
  sendNoteCode(phoneNumber: string, checkId: string): void {
    console.log(phoneNumber);
    this.indexService.sendNoteCode(phoneNumber, checkId)
      .then(res => {
        this.msgVerifyId = res.text;
      })
      .catch(() => {
        this.setSwalDialogError('服务器繁忙，请稍后再试！');
      });
  }


  /**
   * 短信 短信验证码 登陆
   * @param phoneNum
   * @param noteValidCode
   */
  userLogin(phoneNum: string, noteValidCode: string): void {
    console.log(phoneNum.length);
    this.indexService.userLogin(phoneNum, this.msgVerifyId, noteValidCode)
      .then(res => {
        localStorage.setItem('app_phoneNumber', phoneNum);
        localStorage.setItem('app_token_id', res.tk);
        this.router.navigate(['/activity/index']);
      })
      .catch(() => {
        this.setSwalDialogError('输入有误请重试！');
      });
  }


  /**
   * 弹出层
   * @param title
   */
  setSwalDialogError(title: string): void {
    this.swalDialog.title = title;
    this.swalDialog.options = {
      'confirmButtonColor': '#3CA8D9',
      'confirmButtonText': '确定'
    };
    this.swalDialog.show();
  }

}

