import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {IndexModule} from './index/index.module';
import {AppRoutingModule} from './router/app-routing.module';
import {DataService} from './service/data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AuthGuard} from './service/auth-login.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    Title,
    DataService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
