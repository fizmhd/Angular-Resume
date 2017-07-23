import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AccountLogin } from './account/account-login.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AccountLogin ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
