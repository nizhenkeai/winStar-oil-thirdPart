/**
 * Created by m on 2017/9/6.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {DiscountComponent} from './discount/discount.component';
import {OilVouchersComponent} from './oil-vouchers/oil-vouchers.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', component: IndexComponent},
  {path: 'discount', component: DiscountComponent},
  {path: 'oilVouchers', component: OilVouchersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
