import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {DiscountComponent} from './discount/discount.component';
import {OilVouchersComponent} from './oil-vouchers/oil-vouchers.component';
import {UserRoutingModule} from './user-routing.module';
import {ShareModule} from '../share/share.module';
import {PendingUseComponent} from './discount/pending-use/pending-use.component';
import {AlreadyUseComponent} from './discount/already-use/already-use.component';
import {InvalidUseComponent} from './discount/invalid-use/invalid-use.component';
import { OilPendingComponent } from './oil-vouchers/oil-pending/oil-pending.component';
import { OilAlreadyComponent } from './oil-vouchers/oil-already/oil-already.component';
import { UserService } from '../service/user.service';
@NgModule({
  imports: [
    ShareModule,
    UserRoutingModule
  ],
  declarations: [
    IndexComponent,
    DiscountComponent,
    OilVouchersComponent,
    PendingUseComponent,
    AlreadyUseComponent,
    InvalidUseComponent,
    OilPendingComponent,
    OilAlreadyComponent
  ],
  providers: [UserService],
})
export class UserModule {
}
