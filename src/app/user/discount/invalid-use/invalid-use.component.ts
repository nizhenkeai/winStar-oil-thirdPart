import {Component, OnInit, Input} from '@angular/core';
import {Coupon} from '../../../entity/user';
@Component({
  selector: 'app-invalid-use',
  templateUrl: './invalid-use.component.html',
  styleUrls: ['./invalid-use.component.css']
})
export class InvalidUseComponent implements OnInit {
  @Input() data: Coupon[];

  constructor() {
  }

  ngOnInit() {
    console.log(this.data);
  }

}
