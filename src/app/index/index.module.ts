import {NgModule} from '@angular/core';
import {MicroMallDashboardComponent} from './micro-mall-dashboard/micro-mall-dashboard.component';
import {IndexComponent} from './index.component';

import {ShareModule} from '../share/share.module';
import {IndexRoutingModule} from './index-routing.module';
import {IndexService} from '../service/index.service';


import {SwiperModule} from 'ngx-swiper-wrapper';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';


const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

@NgModule({
  imports: [
    ShareModule,
    IndexRoutingModule,
    SwiperModule.forRoot(SWIPER_CONFIG)
  ],
  declarations: [
    MicroMallDashboardComponent,
    IndexComponent
  ],
  providers: [IndexService]
})
export class IndexModule {
}
