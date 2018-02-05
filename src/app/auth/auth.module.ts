import {NgModule} from '@angular/core';
import {CardAuthComponent} from './card-auth/card-auth.component';
import {ShareModule} from '../share/share.module';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthService} from '../service/auth.service';


@NgModule({
  imports: [
    ShareModule,
    AuthRoutingModule
  ],
  declarations: [CardAuthComponent],
  providers: [AuthService]
})
export class AuthModule {
}
