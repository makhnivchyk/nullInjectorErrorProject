import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "@core";
import {SharedModule} from "@shared";
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {environment} from '@environment'


const COMPONENTS = [AppComponent];

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  SharedModule,
  CoreModule,
];


const NGXS_MODULES = [
  NgxsModule.forRoot([], {developmentMode: !environment.production}),
  NgxsRouterPluginModule.forRoot(),
  NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES, ...NGXS_MODULES
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
