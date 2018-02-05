import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivityService} from '../../service/activity.service';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {flyIn} from '../../animationsVariable';
import {Coupon} from "../../entity/user";




@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  animations: [flyIn]
})
export class PaymentComponent implements OnInit {
  coupons: Coupon[];
  id: string;
  name:string;
  itemNumber : number = 1;
  type : number = 1;//1油卡、2审车
  amount:number;
  isUp: boolean = true;
  disabled: boolean = false;
  isHaveLoad: boolean = false;
  btnText: string = '确认支付';
  itemId: string;
  salePrice: number;
  deductPrice: number;
  shopPrice: number;
  activityId: string = '';
  couponId: string = '';
  img1: string = './assets/img/xuan.png';
  img2: string = './assets/img/unxuan.jpg';
  value: number = 105;
  ua = window.navigator.userAgent.toLowerCase();
  reg = /MicroMessenger/i;
  couponName:string ='--选择优惠券--';


  constructor(private title: Title,
              private activityService: ActivityService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.title.setTitle('订单确认');
    this.activatedRoute.params
      .subscribe(res => {
        this.itemId = res.id;
        this.salePrice = res.salePrice;
        this.shopPrice = res.shopPrice;
        this.activityId = res.activityId;
        this.deductPrice=res.salePrice;
      });
     this.getFilterCouponList();


  }

  changeUp(): void {
    console.info("--")
    this.isUp = !this.isUp;
    return;
  }

  /**
   * 选择优惠券
   */
  checkCoupon(id,amount,name):void{
    this.id=id;
    this.name=name;
    this.amount=amount;
    console.info("选取优惠券：")
    console.info(id+"--"+this.amount+"-"+this.name)
    this.couponName=name;
    this.couponId=id;
    this.deductPrice=this.salePrice-amount;
    this.isUp = !this.isUp;

    return;
  }
  /**
   * 获取可用优惠券列表
   */
  getFilterCouponList(): void {
    this.userService.getFilterCoupon(this.itemId,this.itemNumber,this.type)
      .then(res => {
        console.log("获取可用优惠券列表:");
        console.log(res);
        this.coupons =res;
        this.id = res[0].id;
        this.name = res[0].name;
        this.amount = res[0].amount;
      });
  }


  /**
   * 获取优惠券列表
   */
  getCouponList(): void {
    this.userService.getCoupon()
      .then(res => {
        console.log("获取优惠券列表:");
        console.log(res);
        this.coupons =res;
        this.id = res[0].id;
        this.name = res[0].name;
        this.amount = res[0].amount;
      });
  }

  /**
   * 添加订单
   */
  addOilOrder(): void {
    console.log(this.value);
    this.disabled = true;
    this.isHaveLoad = true;
    this.btnText = '请稍等...';
    this.activityService.addOilOrder(this.activityId, this.couponId, this.itemId)
      .then(res => {
        this.goPayment(res.objData, this.value);
      })
      .catch(() => {
        this.disabled = false;
        this.isHaveLoad = false;
        this.btnText = '确认支付';
        alert('当前访问人数过多，请稍后再试！');
      });
  }

  /**
   * 跳确认支付
   * @param orderNumber
   * @param bankCode
   */
  goPayment(orderNumber: string, bankCode: number) {

    const frontEndUrl = 'https://mobile.sxwinstar.net/wechat/thirdSuccess/index.php';
    const paymentUrl = 'https://mobile.sxwinstar.net/wechat/payment/thirdPay.html';
    const paymentType = '1';
    let subBankCode ;
    if (bankCode === 991) {
      if (this.reg.test(this.ua)) {
        subBankCode = 201;
        console.log(subBankCode);
      } else {
        subBankCode = 202;
        console.log(subBankCode);
      }
    } else if (bankCode === 992) {
      subBankCode = 301;
      console.log(subBankCode);
    }
    location.href = `${paymentUrl}?bankCode=${bankCode}&frontEndUrl=${frontEndUrl}&orderNumber=${orderNumber}` +
      `&paymentType=${paymentType}&subBankCode=${subBankCode}`;
  }

  /**
   * 修改选中图片
   *
   */
  changeImg1(): void {
    this.value = 105;
    this.img1 = './assets/img/xuan.png';
    this.img2 = './assets/img/unxuan.jpg';
  }

  changeImg2(): void {
    this.value = 991;
    this.img2 = './assets/img/xuan.png';
    this.img1 = './assets/img/unxuan.jpg';
  }

  changeCoupon(id):void{
    console.info("--"+id)
  }

}
