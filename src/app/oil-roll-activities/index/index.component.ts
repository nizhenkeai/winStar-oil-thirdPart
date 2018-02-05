import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Title, SafeHtml, DomSanitizer} from '@angular/platform-browser';
import {ActivityService} from '../../service/activity.service';
import {Money} from '../../entity/active'
import {Router} from '@angular/router';
import {flyIn} from "../../animationsVariable";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [flyIn]
})
export class IndexComponent implements OnInit {

  moneys: Money[];
  id: string;
  salePrice: number;
  shopPrice: number;
  app_phoneNumber: string;
  @ViewChild('oilExplainText') private oilExplainText: ElementRef;
  oilExplainHtml: SafeHtml;

  constructor(private title: Title,
              private activityService: ActivityService,
              private router: Router,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.app_phoneNumber = localStorage.getItem('app_phoneNumber');
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    this.title.setTitle('加油券');
    this.getMoney();
    this.oilExplain();
  }

  /**
   * 获取加油券金额列表
   */
  getMoney(): void {
    this.activityService.getMoney()
      .then(res => {
        this.moneys = res;
        this.id = res[0].id;
        this.salePrice = res[0].salePrice;
        this.shopPrice = res[0].shopPrice;
      });
  }

  /**
   * 获取电子加油券说明事项
   */
  oilExplain(): void {
    this.activityService.oilExplain()
      .then(res => {
        this.oilExplainHtml = this.domSanitizer.bypassSecurityTrustHtml(res.content.replace(/\n/g, '<br>'));
        console.log(this.oilExplainHtml);
      })
      .catch(() => {
        alert('当前访问人数过多，请稍后再试！');
      });
  }

  /**
   * 保存传入的金额id
   * @param id
   */
  saveId(id, salePrice, shopPrice): void {
    this.id = id;
    this.salePrice = salePrice;
    this.shopPrice = shopPrice;
  }

  /**
   * 立即购买
   */
  buy(): void {
    console.log(this.id);
    this.router.navigate(['/activity/payment',
      {
        'id': this.id,
        'salePrice': this.salePrice,
        'shopPrice': this.shopPrice
      }]);
  }

  claerLocalStorage(): void {
    localStorage.removeItem('app_token_id');
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/index']);
  }
}
