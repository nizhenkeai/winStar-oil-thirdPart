import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-oil-pending',
  templateUrl: './oil-pending.component.html',
  styleUrls: ['./oil-pending.component.css']
})
export class OilPendingComponent implements OnInit {

  isUp: boolean = true;

  constructor(private userIndexTitle: Title) {
  }

  ngOnInit() {
    this.userIndexTitle.setTitle('我的');
  }

  changeUp(): void {
    this.isUp = !this.isUp;
    return;
  }
}
