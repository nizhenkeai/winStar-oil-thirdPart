import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WinStarActivitiesRoutingModule} from './winStar-activities-routing.module';
import {WinStarActivitiesService} from './winStar-activities.service';

import {SendOilComponent} from './send-oil/send-oil.component';
import {IndexComponent} from './send-oil/index/index.component';
import {DetailsComponent} from './send-oil/details/details.component';

@NgModule({
  imports: [
    CommonModule,
    WinStarActivitiesRoutingModule
  ],
  declarations: [
    SendOilComponent,
    IndexComponent,
    DetailsComponent
  ],
  providers: [WinStarActivitiesService]
})
export class WinStarActivitiesModule {
}
