import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {SwalComponent} from '@toverux/ngsweetalert2';
import {UserService} from '../../service/user.service';
import {OilInfo, OilSetMeal} from '../../entity/user';
import {flyIn} from "../../animationsVariable";
declare var aesjs: any;

@Component({
  selector: 'app-oil-vouchers',
  templateUrl: './oil-vouchers.component.html',
  styleUrls: ['./oil-vouchers.component.css'],
  animations: [flyIn]
})
export class OilVouchersComponent implements OnInit {
  @ViewChild('dialog') private swalDialog: SwalComponent;
  oilVouchers;
  isNull: boolean;
  qsData: OilSetMeal[];
  oilData: OilInfo[];
  isUp: boolean = true;
  panData;
  _html: string;

  constructor(private userIndexTitle: Title,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userIndexTitle.setTitle('我的加油券');
    this.getQsData();
  }

  /**
   * 我的优惠券显示隐藏
   */
  changeUp(oilVouchers): void {
    if (this.oilVouchers != oilVouchers) {
      for (let oil of this.qsData) {
        oil['isTrue'] = false;
      }
    }
    oilVouchers.isTrue = !oilVouchers.isTrue;
    this.oilVouchers = oilVouchers;
    return;
  }

  /**
   * 获取我的加油套餐
   */
  getQsData(): void {
    this.userService.getOilSetMealList()
      .then(res => {
        if (res.length === 0) {
          this.isNull = true;
        } else {
          this.isNull = false;
          this.qsData = res;
        }
      }).catch(error => {
        this.isNull = true;
    });
  }

  /**
   * 获取加油套餐油卷列表
   */
  getOilData(orderId: number): void {
    this.userService.getOilInfo(orderId)
      .then(res => {
        this.oilData = res;
      });
  }

  /**
   * 查看券码
   */
  getPan(id: any, panAmt: number): void {
    this.userService.getSearchPan(id)
      .then(res => {
        const value = this.aesDecrypt('A00$94B5-B884=D0', res.result);
        const _value = value.substring(0, 4) + ' ' +
          value.substring(4, 8) + ' ' +
          value.substring(8, 12);
        this.panData = res;
        this._html = `
<h5>请向加油站工作人员提供以下编码进行结算</h5>
<h4 style="color: #3CA8D9">${_value}</h4>
<small style="text-align: left;display: block">
  电子油券使用须知：前往陕西省内延长壳牌油站加油支付时，告知收银员打开“车队卡POS机里的“第三方支付”，选择“易通电子券”，
  输入电子油券码可完成加油
</small>`;
        this.setSwalDialogError(`${panAmt} 元加油券`, this._html);
      });
  }


  aesDecrypt(_key: string, value: string): string {
    const key = aesjs.utils.utf8.toBytes(_key);
    const encryptedBytes = aesjs.utils.hex.toBytes(value);
    const aesCbc = new aesjs.ModeOfOperation.cbc(key, '');
    const decryptedBytes = aesCbc.decrypt(encryptedBytes);
    const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText.toString().substring(0, 12);
  }

  //  弹出层
  setSwalDialogError(title: string, html: string): void {
    this.swalDialog.title = title;
    this.swalDialog.html = html;
    this.swalDialog.options = {
      'confirmButtonColor': '#3CA8D9',
      'confirmButtonText': '确定'
    };
    this.swalDialog.show();
  }
}

