import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MicroMallDashboardComponent} from './micro-mall-dashboard/micro-mall-dashboard.component';
import {IndexComponent} from './index.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {
    path: 'index', component: IndexComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', component: MicroMallDashboardComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {
}
