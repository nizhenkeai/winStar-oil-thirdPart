import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SendOilComponent} from './send-oil/send-oil.component';
import {DetailsComponent} from './send-oil/details/details.component';
import {IndexComponent} from './send-oil/index/index.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'sendOil'},
  {
    path: 'sendOil', component: SendOilComponent, children:
    [
      {path: '', pathMatch: 'full', redirectTo: 'index'},
      {path: 'details/:num', component: DetailsComponent},
      {path: 'index', component: IndexComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinStarActivitiesRoutingModule {
}

