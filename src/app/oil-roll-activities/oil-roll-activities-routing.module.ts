import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {PaymentComponent} from './payment/payment.component';
import {ReceiveComponent} from './receive/receive.component';
import {AgreementComponent} from './agreement/agreement.component';
import {QuestionListComponent} from "./question-list/question-list.component";
import {AnswerComponent} from "./question-list/answer/answer.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', component: IndexComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'receive', component: ReceiveComponent},
  {path: 'agreement', component: AgreementComponent},
  {path: 'question', component: QuestionListComponent},
  {path: 'answer/:id', component: AnswerComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OilRollActivitiesRoutingModule {
}
