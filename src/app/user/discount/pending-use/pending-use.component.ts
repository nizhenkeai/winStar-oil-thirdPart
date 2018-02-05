import {Component, OnInit, Input} from '@angular/core';
import {Coupon} from '../../../entity/user';
@Component({
  selector: 'app-pending-use',
  templateUrl: './pending-use.component.html',
  styleUrls: ['./pending-use.component.css']
})
export class PendingUseComponent implements OnInit {
  @Input() data: Coupon[];
  constructor() {
  }

  ngOnInit() {
    console.log(this.data);
  }
}
