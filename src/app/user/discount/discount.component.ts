import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Coupon} from '../../entity/user';
import {UserService} from '../../service/user.service';
import {flyIn} from "../../animationsVariable";
@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
  animations: [flyIn]
})
export class DiscountComponent implements OnInit {
  Coupon: Coupon[];

  couponList_0: Coupon[] = [];
  couponList_1: Coupon[] = [];
  couponList_2: Coupon[] = [];
  show_1 = true;
  show_2 = false;
  show_3 = false;

  constructor(private userIndexTitle: Title,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userIndexTitle.setTitle('我的');
    this.getCouponList();

  }

  isShow(who: number): void {
    if (who === 1) {
      this.show_1 = true;
      this.show_2 = false;
      this.show_3 = false;
    } else if (who === 2) {
      this.show_1 = false;
      this.show_2 = true;
      this.show_3 = false;
    } else if (who === 3) {
      this.show_1 = false;
      this.show_2 = false;
      this.show_3 = true;
    }
  }

  /**
   * 获取优惠券列表
   */
  getCouponList(): void {
    this.userService.getCoupon()
      .then(res => {
        this.Coupon = res;
        for (let couponList of res) {
          if (couponList.status === 0) {
            this.couponList_0.push(couponList);
          } else if (couponList.status === 1) {
            this.couponList_1.push(couponList);
          } else if (couponList.status === 2) {
            this.couponList_2.push(couponList);
          }
        }
      });
  }
}
