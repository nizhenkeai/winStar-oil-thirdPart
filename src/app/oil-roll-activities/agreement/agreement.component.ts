import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {SafeHtml, DomSanitizer} from '@angular/platform-browser';
import {flyIn} from '../../animationsVariable';
import {ActivityService} from '../../service/activity.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css'],
  animations: [flyIn]
})
export class AgreementComponent implements OnInit {
  @ViewChild('agreementText') private agreementText: ElementRef;
  agreementHtml: SafeHtml;

  constructor(private activityService: ActivityService,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    this.oilServeAgreement();
  }

  oilServeAgreement(): void {
    this.activityService.oilServeAgreement()
      .then(res => {
        this.agreementHtml = this.domSanitizer.bypassSecurityTrustHtml(res.content);
      })
      .catch(() => {
        alert('当前访问人数过多，请稍后再试！');
      });
  }
}
