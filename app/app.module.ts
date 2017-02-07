import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpModule,JsonpModule} from '@angular/http';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { appRouterProvider } from './app.routes';


@NgModule({
  imports:      [ BrowserModule,RouterModule,appRouterProvider ],
  declarations: [ AppComponent ],
  providers:[{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
