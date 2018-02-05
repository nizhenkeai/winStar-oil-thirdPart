import {Component, OnInit} from '@angular/core';
import {Question} from '../../../entity/active';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {flyIn} from "../../../animationsVariable";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  animations: [flyIn]
})
export class AnswerComponent implements OnInit {
  answer: Question;
  width: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(res => {
        this.answer = JSON.parse(localStorage.getItem(res.id))
      });
    this.width = document.documentElement.clientWidth;
  }

}
