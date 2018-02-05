import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {PaymentComponent} from './payment/payment.component';
import {ReceiveComponent} from './receive/receive.component';
import {OilRollActivitiesRoutingModule} from './oil-roll-activities-routing.module';
import {ShareModule} from '../share/share.module';
import {AgreementComponent} from './agreement/agreement.component';
import {QuestionListComponent} from './question-list/question-list.component';
import {AnswerComponent} from './question-list/answer/answer.component';
import {ActivityService} from '../service/activity.service';
import {UserService} from '../service/user.service';

@NgModule({
  imports: [
    ShareModule,
    OilRollActivitiesRoutingModule,
  ],
  providers: [ActivityService, UserService],
  declarations:
    [
      IndexComponent,
      PaymentComponent,
      ReceiveComponent,
      AgreementComponent,
      QuestionListComponent,
      AnswerComponent
    ]
})

export class OilRollActivitiesModule {
}
