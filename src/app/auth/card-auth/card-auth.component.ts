import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {SwalComponent} from '@toverux/ngsweetalert2';
import {Router} from '@angular/router';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-card-auth',
  templateUrl: './card-auth.component.html',
  styleUrls: ['./card-auth.component.css']
})
export class CardAuthComponent implements OnInit {
  @ViewChild('dialog') private swalDialog: SwalComponent;
  @ViewChild('g') private getValidCode: ElementRef;
  authItem: any;
  authSubmitted = false;

  constructor(private authService: AuthService,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {

  }

  setSwalDialog(title: string, text: string): void {
    this.swalDialog.title = title;
    this.swalDialog.text = text;
    this.swalDialog.type = 'error';
    this.swalDialog.options = {'confirmButtonColor': '#3ca8d9'};
    this.swalDialog.show();
  }

  _sendAuth(infoCard: number, phone: number): void {
    this.authService._sendAuth(infoCard, phone)
      .then(res => {
        this.setTime();
        this.authItem = res;
        this.authSubmitted = true;
      }).catch(res => {
      console.log(res);
      const errorMsg = JSON.parse(res._body);
      this.setSwalDialog(errorMsg.semantic, '');
    });
  }

  _auth(verify: number, phone: number): void {
    console.log(this.authItem.objData.xh);
    console.log(this.authItem.objData.kh);
    this.authService._auth(this.authItem.objData.xh, this.authItem.objData.kh, verify, phone)
      .then(() => {
        // this.router.navigate(['/index']);
      })
      .catch(res => {
        const errorMsg = JSON.parse(res._body);
        this.setSwalDialog(this.dataService.userMap[errorMsg.code], '');
      });
  }

  setTime() {
    let time = 120;
    const t = setInterval(() => {
      this.getValidCode.nativeElement.disabled = true;
      this.getValidCode.nativeElement.innerHTML = '重发（' + time + '）';
      if (time === 0) {
        this.getValidCode.nativeElement.disabled = false;
        this.getValidCode.nativeElement.innerHTML = '获取验证码';
        clearInterval(t);
      }
      time--;
    }, 1000);
  }


}
