import {Component, OnInit, Input} from '@angular/core';
import {Coupon} from '../../../entity/user';
@Component({
  selector: 'app-already-use',
  templateUrl: './already-use.component.html',
  styleUrls: ['./already-use.component.css']
})
export class AlreadyUseComponent implements OnInit {
  @Input() data: Coupon[];

  constructor() {
  }

  ngOnInit() {
    console.log(this.data);
  }

}
