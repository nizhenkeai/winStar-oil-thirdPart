import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../service/auth-login.service';

/**
 * 主路由
 */
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {
    path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'activity',
    loadChildren: 'app/oil-roll-activities/oil-roll-activities.module#OilRollActivitiesModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'user', loadChildren: 'app/user/user.module#UserModule'
  },
  {
    path: 'winStar',
    loadChildren: 'app/winStar-activities/winStar-activities.module#WinStarActivitiesModule',
    canLoad: [AuthGuard]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
