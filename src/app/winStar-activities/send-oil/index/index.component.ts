import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {WinStarActivitiesService} from '../../winStar-activities.service';
import {ActivatedRoute, Router} from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild('t') private t: ElementRef;
  orderId: string;
  tText: string = '立即领取';

  constructor(private winStarActivitiesService: WinStarActivitiesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.map(params => params.get('orderId'))
      .subscribe(orderId => {
        this.orderId = orderId;
      });
  }

  getUserDetails(phone: string): void {
    if (phone.length !== 11 || phone.substring(0, 1) !== '1') {
      alert('手机号码有误，请重新输入！');
      return;
    }
    this.tText = '处理中...';
    this.t.nativeElement.disabled = true;
    this.winStarActivitiesService._getUserDetails(phone)
      .then(res => {
        console.log(res);
        this._sendOil(res.id, this.orderId);
      })
      .catch(res => {
        console.log(res);
        alert('服务器繁忙，请稍后再试！');
        this.tText = '立即领取';
        this.t.nativeElement.disabled = false;
      });
  }


  _sendOil(accountId: string, orderId: string): void {
    this.winStarActivitiesService._sendOil(accountId, orderId)
      .then(res => {
        console.log(res);
        this.router.navigate(['winStar/sendOil/details', res.amount]);
      })
      .catch(res => {
        if ('alreadyGive.NotRule' === JSON.parse(res._body).code) {
          alert('当前优惠券已经领取过了！');

          this.tText = '已被领取';
          this.t.nativeElement.disabled = true;
          return;
        }

        alert('服务器繁忙，请稍后再试！');
      });
  }
}
