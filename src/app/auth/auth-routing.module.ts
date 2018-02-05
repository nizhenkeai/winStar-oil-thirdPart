/**
 * Created by m on 2017/9/6.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CardAuthComponent} from './card-auth/card-auth.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cardAuth'},
  {path: 'cardAuth', component: CardAuthComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}

