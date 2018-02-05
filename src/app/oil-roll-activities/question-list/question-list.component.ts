import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../service/activity.service';
import {Question} from '../../entity/active';
import {flyIn} from "../../animationsVariable";


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  animations: [flyIn]
})
export class QuestionListComponent implements OnInit {

  qsData: Question[];
  width: number;

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.getQsData();
    this.width = document.documentElement.clientWidth;
  }

  getQsData(): void {
    this.activityService.getData()
      .then(res => {
        this.qsData = res;
        for (let qs of res) {
          let qsStr = JSON.stringify(qs);
          localStorage.setItem(qs.id, qsStr);
        }
      });
  }
}
