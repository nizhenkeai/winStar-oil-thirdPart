import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {flyIn} from "../../animationsVariable";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [flyIn]
})
export class IndexComponent implements OnInit {

  constructor(private userIndexTitle: Title) {
  }

  ngOnInit() {
    this.userIndexTitle.setTitle('我的');
  }

}
