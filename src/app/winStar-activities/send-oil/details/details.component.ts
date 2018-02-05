import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  num: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      console.log(res);
      this.num = res.num;
    });
  }

  downLoadApp(): void {
    window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wsd.yjx';
  }
}
